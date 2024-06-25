<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, reactive } from "vue"
import Model from "@/app-layouts/common/Model.vue"

import { useTenantStore } from "@/stores/grouplead"
import { storeToRefs } from "pinia"
import {
	useMessage,
	NFormItem,
	NSelect,
	NDatePicker,
	NInput,
	NButton,
	NDynamicTags,
	NCheckbox,
	NInputNumber,
	type SelectOption,
	NTag,
	NSpace,
	NSpin
} from "naive-ui"
import Rating from "primevue/rating"
import MainPanel from "@/app-layouts/common/MainPanel.vue"

const store = useTenantStore()

const {
	createCompany,
	fetchAllCities,
	fetchAllCountry,
	fetchCompany,
	fetchCompanyContact,
	fetchSources,
	fetchQuery,
	createContact,
	createLead,
	genrate_lead_id,
	reset
} = store
const { lead_id, countries, cities, companies, companyContact, sourceType, queryType, loading } = storeToRefs(store)

const isLoading = ref<boolean>(false)

const form = ref({
	group_lead_pipeline_stage_id: 1,
	group_name: "",
	lead_id: "",
	lead_feel: 1,
	group_lead_source_id: null as number | null | undefined,
	travel_date: null,
	number_of_travellers: "",
	estimated_budget: "",
	group_lead_type_id: null as number | undefined | null,
	contact_person: {
		company_id: null as any | number | undefined | null,
		id: null as any | number | undefined | null
	},
	self_assign: true,
	remarks: "",
	queryDetail: {
		countries: [] as string[],
		locations: [] as any[],
		requirements: [] as string[],
		hubs: [] as string[],
		hotel_type: "" as string,
		transport_types: [] as string[]
	}
})

const duration = ref<number>(1)

const company = ref({
	name: "",
	address: ""
})

const contact = ref<any>({
	name: "",

	emails: [
		{
			label: "Work",
			value: ""
		}
	],
	contact_numbers: [
		{
			label: "Work",
			value: ""
		}
	],
	company_id: null as any
})

const ratingLabels = reactive<any>({
	1: "Initial Inquiry",
	2: "Qualification",
	3: "Proposal",
	4: "Negotiation",
	5: "Commitment"
})

const add = reactive({
	visible: false,
	adding: ""
})

function getRatingLabel(rating: any) {
	return ratingLabels[rating]
}

const message = useMessage()

const hotelsType = ref<any[]>([
	{ value: "Budget", label: "Budget" },
	{ value: "Heritage", label: "Heritage" },
	{ value: "Resort", label: "Resort" },
	{ value: "Boutique", label: "Boutique" }
])

const selectedLocation = ref<any>({
	id: null as any,
	name: "" as any
})
const handleUpdateValue = (value: any, option: SelectOption) => {
	;(selectedLocation.value.id = option.id), (selectedLocation.value.name = option.name)
}

function addLocation() {
	if (!selectedLocation.value.name || !selectedLocation.value.id) {
		message.error("Please Select the Location")
		return false
	}
	if (
		form.value.group_lead_type_id === 6 ||
		form.value.group_lead_type_id === 5 ||
		form.value.group_lead_type_id === 2
	) {
		if (!duration.value) {
			message.error("Please Enter the  Duration")
			return false
		}
		if (selectedLocation.value && duration.value) {
			form.value.queryDetail.locations.push({
				city_id: selectedLocation.value.id, // Generate unique ID
				locationName: selectedLocation.value.name,
				duration: duration.value
			})
			selectedLocation.value.id = null
			selectedLocation.value.name = ""
			duration.value = 1
		}
	} else if (form.value.group_lead_type_id === 4) {
		if (selectedLocation.value) {
			form.value.queryDetail.countries.push(selectedLocation.value.id)
			loca.value.push({
				id: selectedLocation.value.id,
				locationName: selectedLocation.value.name
			})
		}
		selectedLocation.value.id = null
		selectedLocation.value.name = ""
		duration.value = 1
	} else {
		if (selectedLocation.value) {
			form.value.queryDetail.locations.push(selectedLocation.value.id)
			loca.value.push({
				id: selectedLocation.value.id,
				locationName: selectedLocation.value.name
			})
		}
		selectedLocation.value.id = null
		selectedLocation.value.name = ""
		duration.value = 1
	}
}

const removeLocation = (index: number) => {
	if (
		form.value.group_lead_type_id === 6 ||
		form.value.group_lead_type_id === 5 ||
		form.value.group_lead_type_id === 2
	) {
		form.value.queryDetail.locations.splice(index, 1)
	} else if (form.value.group_lead_type_id === 4) {
		form.value.queryDetail.countries.splice(index, 1)
		loca.value.splice(index, 1)
	} else {
		form.value.queryDetail.locations.splice(index, 1)
		loca.value.splice(index, 1)
	}
}

const handleSearch = (query: string) => {
	if (!query.length) {
		cities.value = []
		return
	}
	let timeoutId: NodeJS.Timeout | null = null
	// Clear any existing timeout
	if (timeoutId) {
		clearTimeout(timeoutId)
	}

	// Set a new timeout
	timeoutId = setTimeout(async () => {
		loading.value = true
		if(query.length > 3){
			
		if (form.value.group_lead_type_id === 4) {
			await fetchAllCountry(query)
		} else {
			await fetchAllCities(query)
		}
		}
		loading.value = false
	}, 1500) // Adjust delay as needed
}

const openModel = (query: string) => {
	;(add.visible = true), (add.adding = query)
}

const closeModel = () => {
	add.visible = false
	add.adding = ""
}

const addCompany = async () => {
	if (company.value.name === "") {
		message.error("Please Enter the Company Name")
		return false
	}
	if (company.value.address === "") {
		message.error("Please Enter the Company Address")
		return false
	}
	await createCompany(company.value)
	closeModel()
}

const addPhone = () => {
	contact.value.contact_numbers.push({ label: "Work", value: "" })
}

const removePhone = (index: number) => {
	contact.value.contact_numbers.splice(index, 1)
}

const addEmail = () => {
	contact.value.emails.push({ label: "Work", value: "" })
}

const removeEmail = (index: number) => {
	contact.value.emails.splice(index, 1)
}

const createcontact = async () => {
	if (!contact.value.company_id) {
		message.error("Please Select the Company")
		return false
	}
	if (contact.value.name === "") {
		message.error("Please Enter the Name")
		return false
	}
	if (contact.value.emails.length < 1) {
		message.error("Please Enter the email")
		return false
	}
	if (contact.value.contact_numbers.length < 1) {
		message.error("Please Enter the Contact Number")
		return false
	}
	await createContact(contact.value)
	await fetchCompanyContact(contact.value.company_id)

	closeModel()
}

const phoneTypes: any[] = [
	{
		label: "Work",
		value: "work"
	},
	{
		label: "Home",
		value: "home"
	}
]

const updateQuery = (value: any) => {
	form.value.group_lead_type_id = value
	form.value.queryDetail.locations = []
	form.value.queryDetail.countries = []
	form.value.queryDetail.countries = []
	;(form.value.queryDetail.requirements = [] as string[]),
		(form.value.queryDetail.hubs = [] as string[]),
		(form.value.queryDetail.hotel_type = "" as string),
		(form.value.queryDetail.transport_types = [] as string[])
}

const emailTypes: any[] = [
	{
		label: "Work",
		value: "work"
	},
	{
		label: "Personal",
		value: "personal"
	}
]

const loca = ref<any[]>([])

const handleSubmit = async () => {
	if (!form.value.group_lead_source_id) {
		message.error("Please Select the Source Lead")
		return false
	}
	if (!form.value.travel_date) {
		message.error("Please Select the Travel Date")
		return false
	}
	if (!form.value.contact_person.company_id) {
		message.error("Please Select the Comapany")
		return false
	}
	if (!form.value.contact_person.id) {
		message.error("Please Select the Contact Person")
		return false
	}
	if (!form.value.estimated_budget) {
		message.error("Please Enter the Estimate Budget")
		return false
	}
	if (!form.value.number_of_travellers) {
		message.error("Please Enter the Number of Travellers")
		return false
	}
	if (!form.value.group_lead_type_id) {
		message.error("Please Select the Query Type")
		return false
	}

	// Event
	if (form.value.group_lead_type_id === 1) {
		if (form.value.queryDetail.requirements.length < 1) {
			message.error("Please Enter  the Requirements")
			return false
		}
		if (form.value.queryDetail.locations.length < 1) {
			message.error("Please Select the Location")
			return false
		}
	}

	// Transport
	if (form.value.group_lead_type_id === 2) {
		if (form.value.queryDetail.transport_types.length < 1) {
			message.error("Please Select  the Hotel Type")
			return false
		}
		if (form.value.queryDetail.locations.length < 1) {
			message.error("Please Select the Location")
			return false
		}
	}
	//  Flight
	if (form.value.group_lead_type_id === 3) {
		if (form.value.queryDetail.hubs.length < 1) {
			message.error("Please Select the Hubs")
			return false
		}
		if (form.value.queryDetail.locations.length < 1) {
			message.error("Please Select the Location")
			return false
		}
	}

	// Visa
	if (form.value.group_lead_type_id === 4) {
		if (form.value.queryDetail.hubs.length < 1) {
			message.error("Please Select the Hubs")
			return false
		}
		if (form.value.queryDetail.countries.length < 1) {
			message.error("Please Select the Country")
			return false
		}
	}

	//Package
	if (form.value.group_lead_type_id === 5) {
		if (form.value.queryDetail.requirements.length < 1) {
			message.error("Please Enter  the Requirements")
			return false
		}
		if (form.value.queryDetail.hubs.length < 1) {
			message.error("Please Select the Hubs")
			return false
		}
		if (form.value.queryDetail.locations.length < 1) {
			message.error("Please Select the Location")
			return false
		}
	}

	//Hotels

	if (form.value.group_lead_type_id === 6) {
		if (form.value.queryDetail.hotel_type === "") {
			message.error("Please Select  the Hotel Type")
			return false
		}
		if (form.value.queryDetail.locations.length < 1) {
			message.error("Please Enter  the Requirements")
			return false
		}
	}

	await createLead(form.value)

	console.log(form)
}

watch(
	() => form.value.contact_person.company_id,
	async newVal => {
		if (!form.value.contact_person.company_id) return
		if (!newVal) return
		await fetchCompanyContact(form.value.contact_person.company_id)
		console.log(newVal)
	},
	{
		immediate: true
	}
)

onUnmounted(() => {
	console.log("unmounted")
	reset()
})
onMounted(async () => {
	isLoading.value = true
	try {
		await genrate_lead_id()
		form.value.lead_id = lead_id.value
		await fetchSources()
		await fetchQuery()
		await fetchCompany()
	} finally {
		isLoading.value = false // Ensure loading state is reset
	}
})
</script>

<template>
	<div>
		<Model :show="add.visible" @close="closeModel">
			<div class="min-w-7xl" v-if="add.adding === 'Company'">
				<h2 class="text-xl font-semibold mb-2">Add New Company</h2>

				<form @submit.prevent="addCompany">
					<div class="mb-4">
						<label for="name" class="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
						<NInput
							v-model:value="company.name"
							id="name"
							type="text"
							placeholder="Enter company name"
							class="w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</div>

					<div class="mb-4">
						<label for="address" class="block text-gray-700 text-sm font-bold mb-2">Company Address</label>
						<NInput
							v-model:value="company.address"
							id="address"
							type="text"
							placeholder="Enter company address"
							class="w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</div>

					<NButton type="primary" attr-type="submit">Add Company</NButton>
				</form>
			</div>
			<div v-if="add.adding === 'contact'">
				<h5 class="mb-2">Company Name</h5>
				<NSelect
					v-model="contact.company_id"
					:class="['col-span-5', 'w-full']"
					label-field="name"
					value-field="id"
					:options="companies"
					placeholder="Please Select Company"
					@update:value="(option: SelectOption) => (contact.company_id = option)"
				/>

				<h5 class="my-2">Name</h5>

				<div class="grid gap-4 mb-4">
					<NInput v-model:value="contact.name" placeholder="Name" />
				</div>
				<h5 class="my-2">Phone</h5>
				<div
					v-for="(phone, index) in contact.contact_numbers"
					:key="index"
					class="grid grid-cols-8 gap-x-2 mb-1"
				>
					<NInput v-model:value="phone.value" placeholder="Phone" class="col-span-4" />
					<NSelect v-model:value="phone.label" :options="phoneTypes" class="col-span-2" />
					<NButton
						v-if="contact.contact_numbers.length > 1"
						type="error"
						@click="removePhone(index)"
						class="ml-2 bg-red-600"
					>
						-
					</NButton>
					<NButton type="info" @click="addPhone">+</NButton>
				</div>
				<h5 class="my-2">Email</h5>
				<div v-for="(email, index) in contact.emails" :key="index" class="grid grid-cols-8 gap-x-2 mb-1">
					<NInput v-model:value="email.value" placeholder="Email" class="col-span-4" />
					<NSelect v-model:value="email.label" :options="emailTypes" class="col-span-2" />
					<NButton v-if="contact.emails.length > 1" type="error" @click="removeEmail(index)" class="ml-2">
						-
					</NButton>
					<NButton type="info" @click="addEmail">+</NButton>
				</div>

				<NButton type="primary" @click="createcontact" class="mt-4">Create Contact Person</NButton>
			</div>
		</Model>

		<h3 class="text-2xl font-semibold mb-6">Create Group Lead</h3>
		<MainPanel>
			<div
				v-if="isLoading"
				class="my-32 overflow-hidden h-[100%] backdrop-blur-md flex justify-center items-center"
			>
				<n-spin :size="80">
					<template #description>Please wait...</template>
				</n-spin>
			</div>
			<div v-else>
				<h4 class="text-xl font-semibold mb-6">{{ form.lead_id }}</h4>
				<form>
					<div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-y-2 gap-x-8">
						<div>
							<NFormItem label="Source Lead">
								<NSelect
									v-if="sourceType.length"
									v-model-value="form.group_lead_source_id"
									label-field="name"
									value-field="id"
									:options="sourceType"
									placeholder="Please Select Source Lead"
									@update-value="
										(value: any) => {
											form.group_lead_source_id = value
										}
									"
								/>
							</NFormItem>
							<NFormItem label="Company Name">
								<div class="grid grid-cols-6 gap-x-2 w-full">
									<NSelect
										v-if="companies.length"
										v-model="form.contact_person.company_id"
										:class="['col-span-5', 'w-full']"
										label-field="name"
										value-field="id"
										:options="companies"
										placeholder="Please Select Company"
										@update:value="
											(option: SelectOption) => (form.contact_person.company_id = option)
										"
									/>
									<NButton type="primary" @click="openModel('Company')">Add</NButton>
								</div>
							</NFormItem>
							<NFormItem label="Contact person">
								<div class="grid grid-cols-6 gap-x-2 w-full">
									<NSelect
										v-if="companyContact?.contact_person?.length"
										:class="['col-span-5', 'w-full']"
										v-model="form.contact_person.id"
										label-field="name"
										value-field="id"
										:options="companyContact?.contact_person"
										placeholder="Please Select"
										@update:value="(value: any) => (form.contact_person.id = value)"
									/>
									<NButton type="primary" @click="openModel('contact')">Add</NButton>
								</div>
							</NFormItem>
							<NFormItem label="Lead Feel Rating">
								<div class="grid grid-cols-2">
									<Rating v-model="form.lead_feel" :cancel="false" />
								</div>
								<NTag :bordered="false" type="success">{{ getRatingLabel(form.lead_feel) }}</NTag>
							</NFormItem>
							<NFormItem>
								<n-checkbox v-model:checked="form.self_assign" size="medium">
									<h5>Self Assign</h5>
								</n-checkbox>
							</NFormItem>
						</div>
						<div>
							<NFormItem label="Travel Date">
								<NDatePicker
									v-model:formatted-value="form.travel_date"
									value-format="yyyy-MM-dd"
									type="date"
									placeholder="Please Select Date"
									:class="['w-full']"
								/>
							</NFormItem>
							<NFormItem label="No of Travellers">
								<NInputNumber
									v-model="form.number_of_travellers"
									:show-button="false"
									placeholder=" Number of travellers"
									:class="['w-full']"
									:min="1"
									@update:value="(value: any) => (form.number_of_travellers = value)"
								/>
							</NFormItem>
							<NFormItem label="Estimated Budget">
								<NInputNumber
									v-model="form.estimated_budget"
									:min="1"
									:show-button="false"
									placeholder="Estimated Budget"
									:class="['w-full']"
									@update:value="(value: any) => (form.estimated_budget = value)"
								/>
							</NFormItem>

							<NFormItem label="Remarks">
								<NInput v-model:value="form.remarks" placeholder="Remarks" type="textarea" />
							</NFormItem>
						</div>
						<div>
							<NFormItem label="Query Type">
								<NSelect
									v-if="queryType.length"
									v-model="form.group_lead_type_id"
									label-field="name"
									value-field="id"
									:options="queryType"
									@update-value="updateQuery"
									label-value="label"
									field-value="value"
									placeholder="Please Select"
								/>
							</NFormItem>
							<div v-if="form.group_lead_type_id">
								<n-form
									:model="form"
									v-if="form.group_lead_type_id === 5 || form.group_lead_type_id === 1"
								>
									<NFormItem path="requirements" label="Enter Requirement: ">
										<n-dynamic-tags
											v-model:value="form.queryDetail.requirements"
											:color="{ color: 'bg-blue-800' }"
										/>
									</NFormItem>
								</n-form>
								<n-form
									:model="form"
									v-if="
										form.group_lead_type_id === 5 ||
										form.group_lead_type_id === 3 ||
										form.group_lead_type_id === 4
									"
								>
									<NFormItem path="hubs" label="Hubs: ">
										<n-dynamic-tags
											v-model:value="form.queryDetail.hubs"
											:color="{ color: 'bg-blue-800' }"
										/>
									</NFormItem>
								</n-form>
								<n-form :model="form" v-if="form.group_lead_type_id === 2">
									<NFormItem path="hubs" label="Transport Type: ">
										<n-dynamic-tags
											v-model:value="form.queryDetail.transport_types"
											:color="{ color: 'bg-blue-800' }"
										/>
									</NFormItem>
								</n-form>
								<NFormItem label="Hotel Type" v-if="form.group_lead_type_id === 6">
									<NSelect
										v-model="form.queryDetail.hotel_type"
										:options="hotelsType"
										@update-value="
											(value: any) => {
												form.queryDetail.hotel_type = value
											}
										"
										label-value="label"
										field-value="label"
										placeholder="Please Select Hotel Type"
										@update:value="(value: any) => form.queryDetail.hotel_type"
									/>
								</NFormItem>
								<div class="grid grid-cols-2 gap-x-2">
									<NFormItem label="Location" v-if="form.group_lead_type_id !== 4">
										<NSelect
											v-model:value="selectedLocation.name"
											placeholder="Please select a Location"
											value-field="name"
											label-field="name"
											:options="cities"
											:loading="loading"
											label-value="name"
											clearable
											filterable
											remote
											@search="handleSearch"
											@update:value="handleUpdateValue"
										/>
									</NFormItem>
									<NFormItem label="Country" v-if="form.group_lead_type_id === 4">
										<NSelect
											v-model:value="selectedLocation.name"
											placeholder="Please select a Country"
											value-field="name"
											label-field="name"
											:options="countries"
											:loading="loading"
											label-value="name"
											clearable
											filterable
											remote
											@search="handleSearch"
											@update:value="handleUpdateValue"
										/>
									</NFormItem>
									<NFormItem label="Duration">
										<NInputNumber
											v-if="form.group_lead_type_id === 6 || form.group_lead_type_id === 5"
											v-model:value="duration"
											min="1"
											:show-button="false"
											:class="['w-full']"
										/>
										&nbsp;
										<NButton type="primary" @click="addLocation()">Add</NButton>
									</NFormItem>
								</div>
								<div
									v-if="
										form.group_lead_type_id === 6 ||
										form.group_lead_type_id === 5 ||
										form.group_lead_type_id === 2
									"
								>
									<div class="grid grid-cols-4 gap-x-2">
										<h4 class="col-span-2">Location</h4>
										<h4>Duration</h4>
									</div>
									<div class="grid grid-cols-4 gap-x-2 mt-3">
										<template v-for="(item, index) in form.queryDetail.locations" :key="item.id">
											<h5 class="col-span-2">{{ item.locationName }}</h5>
											<h5>{{ item.duration }} Night</h5>
											<NButton strong secondary circle text @click="removeLocation(index)">
												<NIcon>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
													>
														<path
															fill="#d82f2f"
															d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
														/>
													</svg>
												</NIcon>
											</NButton>
										</template>
									</div>
								</div>
								<div
									v-if="
										form.group_lead_type_id === 4 ||
										form.group_lead_type_id === 3 ||
										form.group_lead_type_id === 1
									"
								>
									<div class="grid grid-cols-2 gap-x-4">
										<h4>Location</h4>
									</div>
									<div class="grid grid-cols-2 gap-x-4 mt-2">
										<template v-for="(item, index) in loca" :key="item.id">
											<h5>{{ item.locationName }}</h5>

											<NButton strong secondary circle text @click="removeLocation(index)">
												<NIcon>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
													>
														<path
															fill="#d82f2f"
															d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
														/>
													</svg>
												</NIcon>
											</NButton>
										</template>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex justify-end mt-6">
						<NButton type="primary" @click="handleSubmit">Submit</NButton>
					</div>
				</form>
			</div>
		</MainPanel>
	</div>
</template>
