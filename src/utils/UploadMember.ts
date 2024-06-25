import { useUploadMember} from "@/stores/uploadMember"
import { storeToRefs } from 'pinia'

const { valid_members, invalid_members } = storeToRefs(useUploadMember());

import * as XLSX from 'xlsx';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useToast } from "@/composables/useToast"

export async function handleExcelUpload(file: File, option: string) {
		try {
		if (option == 'id_based') {
			// Validate if prepopulate master is uploaded or not
			// You Cannot Upload Members More Than 500
			return false;
		}

		const workbook = await readExcelFile(file); // Read the Excel file
		const sheetName = workbook.SheetNames[0]; // Get the first sheet name
		const rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert sheet to row objects
		const jsonObject = JSON.stringify(rowObject); // Convert row objects to JSON string

		if (rowObject.length > 501) {
			useToast("error", "You Cannot Upload Members More Than 500", "");
			return false;
		}
		const validationResult =validateAndProcessData(rowObject, option);

	} catch (err:any) {
		// Handle errors
		console.error('Error reading file:', err);
		// Set an error message or handle it in your UI
		useToast("error", "Error reading file", "");
	}
}
function readExcelFile(file: File): Promise<XLSX.WorkBook> {
	return new Promise((resolve, reject) => {
			const reader = new FileReader();

		reader.onload = (e: any) => {
			try {
				const data = new Uint8Array(e.target.result);
					const workbook = XLSX.read(data, { type: 'array' });
				resolve(workbook);
			} catch (error) {
				reject(error);
			}
		};

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsArrayBuffer(file);
	});
}
function validateAndProcessData(exceldata: any,option: string){
	const return_arr = [];

	const requiredFields = getRequiredFields(option);
	const found = Object.keys(exceldata[0]).every(r => requiredFields.includes(r));

	const numbersRegex = /^[0-9]+$/
	if (!found) {
		useToast("error", "File with wrong headers", "");
		return false;
				}

	if (option == 'regular') {
		exceldata.slice(1).forEach((data: any) => { // Assuming 'data' is an object with any structure
			const requiredFields: string[] = ['Traveller_name', 'Email', 'Country_Code', 'Phone'];
			const optionalFields: { [key: string]: { defaultValue: any, trim?: boolean } } = {
				Members_Allowed: { defaultValue: 1, trim: true },
				Airport_Hub: { defaultValue: '', trim: true },
				Visa_Hub: { defaultValue: '', trim: true },
				Traveller_name: { defaultValue: '', trim: true },
				Dealership: { defaultValue: '' },
				Travel_Date: { defaultValue: '' }
			};

			// Check if all required fields are present
			const allRequiredFieldsPresent: boolean = requiredFields.every(field => field in data);


			if (allRequiredFieldsPresent) {
				// Process required fields
				data.Email = (data.Email as string).trim();
				data.Phone = (data.Phone as string).toString().replace(/\s+/g, '');
				data.Country_Code = (data.Country_Code as string).toString().replace(/\s+/g, '');
				data.country = '';

				// Process optional fields
				Object.keys(optionalFields).forEach(field => {
					data[field] = field in data ?
						(optionalFields[field].trim ? (data[field] as string).toString().trim() : data[field]) :
						optionalFields[field].defaultValue;
				});

				// Parse and validate phone number
				const phoneNumberObject = parsePhoneNumberFromString(`+${data.Country_Code}${data.Phone}`);

				// Assuming parsePhoneNumberFromString returns a PhoneNumber | undefined
				if (phoneNumberObject && phoneNumberObject.isValid() && data.Country_Code.match(numbersRegex)) {
					data.Phone = `+${data.Country_Code}${data.Phone}`;
					data.country = phoneNumberObject.country;
					valid_members.value.push(data);
				} else {
					data.remark = 'Country Code/ Phone Number Error';
					invalid_members.value.push(data);
				}
			} else {
				// Handle missing required fields
				const missingField = requiredFields.find(field => !(field in data));
				data.remark = missingField ? `${missingField} Error / ${missingField} is empty` : 'Please Check Data';
				invalid_members.value.push(data);
			}
		});
	}

	if(option=='approve'){
		exceldata.slice(1).forEach((data:any) => {
			const hasAllRequiredFields = ['Email', 'Country_Code', 'Phone'].every(field => field in data);
			const addToInvalidMembers = (remark:any) => {
				data.remark = remark;
				invalid_members.value.push(data);
			};
			if (hasAllRequiredFields) {
				['Type', 'Traveller_name', 'Dealership'].forEach(field => {
					data[field] = field in data ? data[field].trim() : '';
				});

				data.Email = data.Email.trim();
				data.Phone = data.Phone.toString().replace(/\s+/g, '');
				data.Country_Code = data.Country_Code.toString().replace(/\s+/g, '');
				data.country = '';

				const phoneNumberObject:any = parsePhoneNumberFromString(`+${data.Country_Code}${data.Phone}`);
				// console.log(phoneNumberObject);
				// console.log(phoneNumberObject.isValid());
				if (phoneNumberObject.isValid() && data.Country_Code.match(numbersRegex)) {
					data.Phone = `+${data.Country_Code}${data.Phone}`;
					data.country = phoneNumberObject.country;
					valid_members.value.push(data);

				} else {
					addToInvalidMembers('Country Code / Phone Number Error');
				}

			}
			else {
				const missingField = ['Email', 'Country_Code', 'Phone', 'Traveller_name', 'Dealership', 'Type'].find(field => !(field in data));
				switch (missingField) {
					case 'Type':
						data.Type = 'Primary';
						invalid_members.value.push(data);
						break;
					case 'Email':
					case 'Country_Code':
					case 'Phone':
					case 'Traveller_name':
					case 'Dealership':
						addToInvalidMembers(`${missingField} Error / ${missingField} is empty`);
						break;
					default:
						if (missingField === undefined && data.Type === 'Secondary') {
							if (!('Relation' in data)) {
								addToInvalidMembers('Relation Error / Relation is empty');
							}
							if (!('Payment' in data)) {
								addToInvalidMembers('Payment Error / Payment is empty');
							}
						} else {
							addToInvalidMembers('Please Check Data');
						}
				}
			}

		})
		}


	if (option === 'id_based') {
		exceldata.slice(1).forEach((data: any) => { // Replace 'any' with a specific type if possible
			if (!('Email' in data) && !('Phone' in data)) {
				data.Phone = '';
				data.Email = '';
				data.remark = 'Email or Phone is required!';
				invalid_members.value.push(data);
				return;
			}

			data.Traveller_name = 'Traveller_name' in data ? (data.Traveller_name as string).trim() : '';
			data.Members_Allowed = 'Members_Allowed' in data ? (data.Members_Allowed as number).toString().trim() : '1';
			data.Airport_Hub = 'Airport_Hub' in data ? (data.Airport_Hub as string).trim() : '';
			data.Visa_Hub = 'Visa_Hub' in data ? (data.Visa_Hub as string).trim() : '';
			data.Dealership = 'Dealership' in data ? (data.Dealership as string) : '';
			data.Email = 'Email' in data ? (data.Email as string).trim() : '';

			if ('AuthCode' in data) {
				if ('Phone' in data) {
					data.Phone = (data.Phone as string).replace(/\s+/g, '');
					data.Email = '';

					if ((data.Phone as string).length === 12 && (data.Phone as string).charAt(0) === '9') {
						data.Phone = '+' + data.Phone;
					} else if ((data.Phone as string).length === 10) {
						data.Phone = '+91' + data.Phone;
					}

					valid_members.value.push(data);
				} else {
					data.Phone = '';
					if ('Email' in data) {
						valid_members.value.push(data);
					}
				}
			} else {
				data.AuthCode = '';
				data.remark = 'AuthCode is required!';
				invalid_members.value.push(data);
			}
		});
	}



	// console.log(return_arr);

	}
function getRequiredFields(option:string) {

	const optionFieldsMap:any = {
		'regular': ['Traveller_name', 'Email', 'Country_Code', 'Phone', 'Gender', 'DOB', 'Airport_Hub', 'Visa_Hub', 'Members_Allowed', 'Dealership','Travel_Date'],
		'approve': ['Traveller_name', 'Email', 'Country_Code', 'Phone', 'Gender', 'DOB', 'Airport_Hub', 'Visa_Hub', 'Dealership', 'Type', 'Relation', 'Payment','Travel_Date'],
		'id_based': ['AuthCode','Traveller_name','Email','Phone','Gender','DOB','Airport_Hub','Visa_Hub','Members_Allowed','Dealership','Travel_Date'],
	};

	return optionFieldsMap[option] || [];
}

export function verifyfunction(){

if (invalid_members.value.length > 0) {
		return true;
	}
}