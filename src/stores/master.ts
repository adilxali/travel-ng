import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "@/utils/axios"
import { useToast } from "@/composables/useToast"
import { useAuthStore } from "./auth"
import { useMessage } from "naive-ui"
export const useMasterStore = defineStore("master", () => {
	const states = ref<Array<any>>([])
	const countries = ref<Array<any>>([])
	const cities = ref<Array<any>>([])
	const places = ref<Array<any>>([])
	const placeCategory = ref<Array<any>>([])
	const hotels = ref<any[]>([])
	const page = ref<number>(1)
	const pageCount = ref<number>(0)
	const itemCount = ref<number>(0)
	const pageSize = ref<number>(10)
	const loading = ref<boolean>(false)
	const from = ref(0)

	const message = useMessage();
	const { expired } = useAuthStore()

	const controller = new AbortController()
	const signal = controller.signal

	const fetchCountry = async () => {
		try {
			loading.value = true

			const { data } = await axios.get(`/countries?page=${page.value}&limit=${pageSize.value}`, {
				signal: signal
			})

			countries.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error: any) {
			expired(error)
			console.error("Error fetching countries:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchAllCountry = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/countries?pagination=0`, {
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

	const fetchCities = async (id: any) => {
		try {
			loading.value = true
			const url = id.value
				? `cities/get-cities-by-state-id/${id.value}?page=${page.value}&limit=${pageSize.value}`
				: `cities?page=${page.value}&limit=${pageSize.value}`

			const { data } = await axios.get(url, {
				signal: signal
			})

			cities.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}

	const fetchAllCities = async (name:any)=>{
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

	const fetchCitisByName = async ()=>{
		try {
			loading.value = true
			const { data } = await axios.get(`/cities?pagination=0`, {
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

	const cityByState = async (id: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/cities/get-cities-by-state-id/${id.value}?pagination=0`, {
				signal: signal
			})
			cities.value = data.data
		} catch (error) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}

	const cityById = async (id: any) => {
		try {
			loading.value = true
			const { data } = await axios.get(`/cities/${id}`, {
				signal: signal
			})
			cities.value = data.data
		} catch (error) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}

	const fetchAllStateOfCountry = async (id: any) => {
		try {
			loading.value = true
			if(id.value){
				const { data } = await axios.get(`/states/get-states-by-country-id/${id.value}?pagination=0`, {
					signal: signal
				})
				states.value = data.data
			}

		} catch (error: any) {
			expired(error)
			console.error("Error fetching states:", error)
		} finally {
			loading.value = false
		}
	}

	const updateState = async (id: number, data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/states/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			console.log(error)
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const createState = async (data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.post(`/states`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
		
			console.log(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const createCountry = async (data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.post(`/countries`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.response.data.error, "")
		} finally {
			loading.value = false
		}
	}

	const updateCountry = async (id: number, data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/countries/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const createCity = async (data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.post(`/cities`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.response.data.error, "")
		} finally {
			loading.value = false
		}
	}

	const updateCity = async (id: number, data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/cities/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const createPlace = async (data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.post(`/places`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.response.data.error, "")
		} finally {
			loading.value = false
		}
	}

	const updatePlace = async (id: number, data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/places/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}

	const createPlaceCat = async (data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/categories`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
		} catch (error: any) {
			expired(error)
			console.log(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const updatePlaceCat = async (id: number, data: any, close?: any) => {
		try {
			loading.value = true
			const response = await axios.put(`/categories/${id}`, data)
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
	const deletePlaceCat = async (id: number) => {
		try {
			loading.value = true
			const response = await axios.put(`/categories/${id}`)
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

	const deleteCountry = async (id: number) => {
		try {
			loading.value = true
			const response = await axios.delete(`/countries/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
			}
		} catch (error: any) {
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const deleteState = async (id: number) => {
		try {
			loading.value = true
			const response = await axios.delete(`/states/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
			}
		} catch (error: any) {
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const deleteCity = async (id: number) => {
		try {
			loading.value = true
			const response = await axios.delete(`/cities/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
			}
		} catch (error: any) {
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}
	const deletePlace = async (id: number) => {
		try {
			loading.value = true
			const response = await axios.delete(`/places/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
			}
		} catch (error: any) {
			expired(error)
		
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}

	const fetchStateByCountryId = async (id?: any, pn?: any, ps?: any, pagination?: any) => {
		try {
			loading.value = true

			const url = id.value
				? `states/get-states-by-country-id/${id.value}?page=${pn.value}&limit=${ps.value}`
				: `states?page=${page.value}&limit=${pageSize.value}`

			const { data } = await axios.get(url, {
				signal: signal
			})
			states.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error) {
			expired(error)
			console.error("Error fetching state data:", error)
		} finally {
			loading.value = false
		}
	}

	const fetchPlaces = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/places?page=${page.value}&limit=${pageSize.value}`)

			places.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (err: any) {
			expired(err)
			console.log(err.error)
		} finally {
			loading.value = false
		}
	}

	const fetchStateByName = async (name: string) => {
		try {
			const { data } = await axios.get(`states?filters[name]=${name}`, {
				signal: signal
			})
			states.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (err: any) {
			expired(err)
			console.log(err.error)
		}
	}

	const fetchPlacecategory = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`categories?filters[title]=&filters[taxonomy]=`, {
				signal: signal
			})
			placeCategory.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error:any) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}
	const fetchPlaceAllcategory = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`categories?pagination=0`, {
				signal: signal
			})
			placeCategory.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error:any) {
			expired(error)
			console.log(error)
		} finally {
			loading.value = false
		}
	}

	
	const fetchHotels = async () => {
		try {
			loading.value = true
			const { data } = await axios.get(`/accommodations?page=${page.value}&limit=${pageSize.value}`, {
				signal: signal
			})
			hotels.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
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

	const updateHotel = async (id: number | null | undefined, data:any, close?:any)=>{
		try {
			loading.value = true
			if(id){
				const response = await axios.put(`/accommodations/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
			}

		} catch (error: any) {
			expired(error)
			console.log(error)
			if (error.response.data.message === "Validation errors") {
				Object.entries(error.response.data.data).forEach((errors:any) => {
				
					errors.forEach((error: any) => {
						useToast("error", error, "")
					})
				  
				});
			  }
			
		} finally {
			loading.value = false
		}
	}
	
	const deleteHotel = async(id:number | null | undefined)=>{
		try {
			loading.value = true
			if(id){
				const response = await axios.put(`/accommodations/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				if (close) {
					close()
				}
			}
			}

		} catch (error: any) {
			expired(error)
			useToast("error", error.message, "")
		} finally {
			loading.value = false
		}
	}

	const abortAPI = () => {
		return controller.abort()
	}

	const $reset = () => {
		states.value = []
		countries.value = []
		cities.value = []
		places.value = []
		hotels.value = []
		placeCategory.value = []
		page.value = 1
		from.value = 1
		pageCount.value = 0
		itemCount.value = 0
		pageSize.value = 10
		loading.value = false
	}

	return {
		countries,
		states,
		cities,
		places,
		placeCategory,
		hotels,
		page,
		pageCount,
		itemCount,
		pageSize,
		loading,
		from,
		fetchCountry,
		fetchAllCountry,
		fetchStateByCountryId,
		fetchCities,
		fetchAllStateOfCountry,
		fetchPlaces,
		fetchStateByName,
		fetchPlacecategory,
		fetchPlaceAllcategory,
		abortAPI,
		updateState,
		createState,
		updateCountry,
		createCountry,
		updateCity,
		createCity,
		updatePlace,
		createPlace,
		deleteCountry,
		deleteState,
		deleteCity,
		deletePlace,
		createPlaceCat,
		updatePlaceCat,
		deletePlaceCat,
		fetchHotels,
		cityByState,
		updateHotel,
		deleteHotel,
		createHotel,
		cityById,
		fetchAllCities,
		$reset
	}
})
