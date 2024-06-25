import { useToast } from "@/composables/useToast"
import { useAuthStore } from "./auth"
import { useTenantStore } from "./grouplead"
import { defineStore, acceptHMRUpdate } from "pinia"
import { ref, reactive } from "vue"
import axios from "@/utils/tenants"
import moment from "moment"
export const useQuoteStore = defineStore("tenant", () => {
	interface Cost {
		title: string
		rate: number | null
		quantity: number | null
		remarks: string
		price: number
	}

	interface Category {
		category_name: string
		total_amount: number
		markup_percent: boolean
		markup_value: number
		costs: Cost[]
	}
	const finalData = ref({
		group_lead_id: null as null | number,
		quote_id: null as null | any,
		contact_person_id:{} as any,
		company_id:{} as any,
		contact_person: {
			id: null as null | number,
			company_id: null as null | number
		},
		quotation_amount: [
			{
				type: "",
				cost: null as null | number
			}
		] as any[],
		travel_date: null as any,
		number_of_travellers: null as null | number,
		estimated_budget: null as null | number,
		banner: "" as any,
		quote_type_id: null as any | number,
		quote_costs: [] as Category[],
		mail_format: {
			welcome_mail: "",
			tour_details: {
				inclusions: "",
				exclusions: ""
			},
			terms: ""
		},
		queryDetail: {
			flights: [] as any[],

			locations: [] as any[],
			transport_types: [] as any[],
			hubs: [] as any[],
		}
	})

	const dayPlanData = {
		day: 1,
		breakfast: true,
		lunch: false,
		dinner: true,
		places: [] as any[]
	}

	const { expired } = useAuthStore()

	const hotels = ref<any>({})
	const loading = ref<boolean>(false)

	const controller = new AbortController()
	const signal = controller.signal

	async function fetchHotels(id: number | string) {
		loading.value = true
		try {
			const { data } = await axios.get(`/accommodations/get-accommodations-by-city-id/${id}`)
			hotels.value[id] = data.data
		} catch (error) {
			useAuthStore().expired(error) // Assuming expired handles token issues
			console.error("Error fetching hotels:", error)
			// Consider more specific error handling (e.g., display user-friendly message)
		} finally {
			loading.value = false
		}
	}

	async function createHotel(data: any, close?: () => void) {
		loading.value = true
		try {
			const response = await axios.post(`/accommodations`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				close?.() // Optionally close modal/form
			}
		} catch (error: any) {
			useAuthStore().expired(error)
			useToast("error", error?.response?.data?.message || error.message, "")
			// Handle errors gracefully (e.g., display error messages)
		} finally {
			loading.value = false
		}
	}

	const getLead = async (id: any) => {
		try {
			const { data: leadData } = await axios.get(`/group_leads/${id}`) // Destructure and rename

			if (leadData.data) {
				// Check for valid lead data
				const initialTravelDate = moment(leadData.data.travel_date, "DD-MM-YYYY") // Parse once

				// Create base structure for finalData
				finalData.value = {
					...finalData.value,
					group_lead_id: leadData.data.id,
					contact_person_id: leadData.data.contact_person_id,
					company_id: leadData.data.company_id,
					contact_person: {
						id: leadData.data.contact_person_id.id,
						company_id: leadData.data.company_id.id
					},
					quote_type_id: leadData.data.group_lead_type_id.id,
					travel_date: moment(leadData.data.travel_date, "DD-MM-YYYY").format("YYYY-MM-DD"),
					number_of_travellers: leadData.data.number_of_travellers,
					estimated_budget: leadData.data.estimated_budget
				}
				if(leadData.data.group_lead_type_id.id == 2){
					finalData.value.queryDetail.transport_types = leadData.data.queryDetail.transport_types
				}
				
				let previousEndDate = initialTravelDate.clone();
				if(leadData.data.group_lead_type_id.id !== 4 ){
					leadData.data.queryDetail.locations.forEach(async (item: any, index: any) => {
						try {
							await fetchHotels(item.id) // Await each fetchHotel call
							
							// Date calculations (moved inside for clarity)
							const duration = item.duration || 0
							const startDate = previousEndDate.clone();  // Clone to avoid modifying previous dates
							const endDate = startDate.clone().add(duration, 'day');
					
							// Update previousEndDate for the next iteration
							previousEndDate = endDate.clone().add(0, 'day');

							console.log("Loc Name", item.name)

						

							// Construct location data (note the simplified hotel array)
							finalData.value.queryDetail.locations.push({
								city_id: item.id,
								name: item.name,
								total_night: item.duration,
								date_from: startDate.format("YYYY-MM-DD"),
								date_to: endDate.format("YYYY-MM-DD"),
								hotels: [] as any[],
								day_plans: Array.from({ length: duration + 1 }, (_, i) => ({
									...dayPlanData,
									day: i + 1
								})),

								transports:[]
							})
						} catch (error) {
							console.error("Error fetching hotels or processing location data:", error)
							// Handle errors gracefully (e.g., log to a service, display user-friendly message)
						}
					})
				}
					
				
				if(leadData.data.group_lead_type_id.id == 4){
					leadData.data.queryDetail.countries.forEach(async (item: any, index: any) => {
						finalData.value.queryDetail.locations.push({
							country_id : item.id,
							name: item.name,
							hubs:[]
						})
					})
					console.log("Countries", finalData.value.queryDetail.locations)
					
					finalData.value.queryDetail.hubs = leadData.data.queryDetail.hubs
					
				}
			}
		} catch (error) {
			console.error("Error fetching lead:", error)
			// expired(error); // If applicable
		}
	}

	const reset = () => {
		finalData.value = {
			group_lead_id: null,
			quote_id: null,
			contact_person_id: null,
			company_id: null,
			contact_person: {
				id: null,
				company_id: null
			},
			quotation_amount: [
				{
					type: "",
					cost: null
				}
			],
			travel_date: null,
			number_of_travellers: null,
			estimated_budget: null,
			banner: "",
			quote_type_id: null,
			quote_costs: [],
			mail_format: {
				welcome_mail: "",
				tour_details: {
					inclusions: "",
					exclusions: ""
				},
				terms: ""
			},
			queryDetail: {
				flights: [],
				locations: [],
				transport_types: [],
				hubs: []
			}
		}
	}

	return {
		finalData,
		hotels,
		loading,
		fetchHotels,
		createHotel,
		getLead,
		reset,
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTenantStore, import.meta.hot))
}
