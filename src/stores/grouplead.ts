import { useToast } from "@/composables/useToast"
import { useAuthStore } from "./auth"
import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"
import axios from "@/utils/tenants"
import { useRouter } from "vue-router"

export const useTenantStore = defineStore("tenant", () => {
	const router = useRouter()
	const cities = ref<any[]>([])
	const loading = ref(false)
	const countries = ref<any[]>([])
	const companies = ref<any[]>([])
	const companyContact = ref<any>(
		{
			id: 0 as any,
			name: "" as any,
			address: "" as any,
			contact_person: [
				{
					id: null as any,
					name: null as any,
					email: [] as any,
					contact_numbers: [] as any
				} as any
			] as any[]
		}
	)
	const sourceType = ref<any[]>([])
	const queryType = ref<any[]>([])
	const groupLeads = ref<any[]>([])
	const lead_id = ref<string>("")

	const hotels = ref<any>({})

	const selectedLead = ref<any>({})

	const leadActivity = ref([])

	const { expired } = useAuthStore()

	const controller = new AbortController()
	const signal = controller.signal

	const genrate_lead_id = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/get_group_lead_id`)
			lead_id.value = data.data.group_lead_id
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchAllCities = async (name: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/cities?limit=50&filters[name]=${name}`, {
				signal: signal
			})
			cities.value = data.data
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchAllCountry = async (name: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/countries?limit=50&filters[name]=${name}`, {
				signal: signal
			})
			countries.value = data.data
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchCompany = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/contacts/companies`)
			companies.value = data.data
			console.log(data)
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchCompanyContact = async (id: number | null | undefined) => {
		try {
			if (!id) return
			loading.value = true
			const { data } = await axios.get(`/contacts/companies/${id}`)
			companyContact.value = data.data
			console.log(data)
		} catch (error) {
			expired(error)
			console.error("Error fetching Contact:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchSources = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/settings/sources`)
			sourceType.value = data.data
			console.log(data)
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchQuery = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/settings/types`)
			queryType.value = data.data
			console.log(data)
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const createLead = async (data: any) => {
		try {
			loading.value = true
			const res = await axios.post(`/group_leads`, data)
			if (res.data.success) {
				useToast("success", res.data.message, "")
				if(data.self_assign){
					
					router.push({ name: "MyLeads" })
				} else{
					router.push({ name: "OtherGroupLeads" })
				}
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const createCompany = async (data: any) => {
		try {
			loading.value = true
			const res = await axios.post(`/contacts/companies`, data)
			if (res.data.success) {
				useToast("success", res.data.message, "")
				await fetchCompany()
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const createContact = async (data: any) => {
		try {
			loading.value = true
			const res = await axios.post(`/contacts/contact_persons`, data)
			if (res.data.success) {
				useToast("success", res.data.message, "")
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchLeads = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/group_leads`, {
				signal: signal
			})

			groupLeads.value = data.data
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const updateStage = async (id: any, item: any) => {
		try {
			loading.value = true
			const { data } = await axios.put(`/group_leads/${id}`, item)
			if (data.success) {
				useToast("success", data.message, "")
				// fetchLeads()
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const getLead = async(id: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/group_leads/${id}`)
			selectedLead.value = data.data
			console.log(data)

			
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const getLeadActivity = async (id: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/activities/group-lead/${id}`)
			leadActivity.value = data.data
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const createNote = async(item:any)=>{
		try {
			loading.value = true
			const { data } = await axios.post(`/activities`, item)
			if (data.success) {
				useToast("success", data.message, "")
				// fetchLeads()
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const sendMail = async(item:any)=>{
		try {
			loading.value = true
			const { data } = await axios.post(`/mails`, item)
			if (data.success) {
				useToast("success", data.message, "")
				// fetchLeads()
			}
		} catch (error) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	 const  fetchHotels = async (id:any) => {
		debugger;
		try {
			loading.value = true
			const { data } = await axios.get(`/accommodations/get-accommodations-by-city-id/${id}`, {
				signal: signal
			})
			hotels.value[id] = data.data
		
		} catch (error:any) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}

	const createHotel = async (data:any, close?:any)=>{
		try {
			loading.value = true
			const response = await axios.post(`/accommodations`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}

	const reset = () => {
		cities.value = []
		countries.value = []
		companies.value = []
		companyContact.value = [{ id: null as any, name: "" as any, address: "" as any, contact_person: [] as any[] }]
		sourceType.value = []
		queryType.value = []
		lead_id.value = ""
	}


	// Fetch tenant data on store creation

	return {
		lead_id,
		cities,
		countries,
		companies,
		companyContact,
		sourceType,
		queryType,
		groupLeads,
		leadActivity,
		selectedLead,
		loading,
		reset,
		genrate_lead_id,
		fetchAllCities,
		fetchAllCountry,
		fetchCompany,
		fetchCompanyContact,
		fetchSources,
		fetchQuery,
		createCompany,
		createContact,
		fetchLeads,
		updateStage,
		getLeadActivity,
		createNote,
		getLead,
		sendMail,
		fetchHotels,
		createHotel,
		createLead,
		hotels
	} // Expose the fetch function if needed
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTenantStore, import.meta.hot))
}
