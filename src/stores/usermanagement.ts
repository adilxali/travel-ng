import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "@/utils/axios"
import { type User, type Plans } from "@/types/tenants.d"
import { useToast } from "@/composables/useToast"

export const useUserManagementStore = defineStore("usermanagement", () => {
	const plans = ref<Plans[]>([])
	const users = ref<User[]>([])

	const planInfo = ref<Plans>({ // Correctly initialize the Plans object
        name: "",
        price: 0,
        duration: 0,
        durationtype: "", 
        description: "",  
        max_users: 0, 
        max_roles: 0,
        discount: null, 
        discount_setting: "off",
        active_status: false 
    });
	const userInfo = ref<any>({
		name:'',
		email:'',
		password:'',
		dial_code:null as number | any,
		phone:'',
		active_status:null as any
		
	})

	const page = ref<number>(1)
	const pageCount = ref<number>(0)
	const itemCount = ref<number>(0)
	const pageSize = ref<number>(10)
	const from = ref(0)

	const isEditing = ref<boolean>(false)

	const editId = ref<number | null>(null)


	const isLoading = ref<boolean>(false)

	const controller = new AbortController()
	const signal = controller.signal

	const abortAPI = () => {
        controller.abort()
        

      }

    const getData = async (type: 'plans' | 'users') => {
        try {
          isLoading.value = true
          const { data } = await axios.get(`/${type}?page=${page.value}&limit=${pageSize.value}`, {
            signal: signal
          })
          if (type === 'plans') {
            plans.value = data.data
          } else {
            users.value = data.data
          }
          itemCount.value = data.pagination.total
          from.value = data.pagination.from
          pageCount.value = Math.ceil(itemCount.value / pageSize.value)
        } catch (error: any) {
			
          console.error(error)
        } finally {
          isLoading.value = false
        }
      }
      
      const updateData = async (id: number, data: any, type: 'plans' | 'users') => {
        try {
          isLoading.value = true
          const response = await axios.put(`/${type}/${id}`, data)
          if (response.data?.success) {
            useToast("success", response.data.message, "")
            getData(type)
          }
        } catch (error: any) {
          console.error(error)
          useToast("error", error.message, "")
        } finally {
          isLoading.value = false
        }
      }

      const deleteData = async (id: number, type: 'plans' | 'users') => {
        try {
          isLoading.value = true
          const response = await axios.delete(`/${type}/${id}`)
          if (response.data?.success) {
            useToast("success", response.data.message, "")
            getData(type)
          }
        } catch (error: any) {
          console.error(error)
          useToast("error", error.message, "")
        } finally {
          isLoading.value = false
        }
      }

      const createData = async (data: any, type: 'plans' | 'users') => {
        try {
          isLoading.value = true
          const response = await axios.post(`/${type}`, data)
          if (response.data?.success) {
            useToast("success", response.data.message, "")
            getData(type)
          }
        } catch (error: any) {
          console.error(error)
          useToast("error", error.message, "")
        } finally {
          isLoading.value = false
        }
      }

	const getPlans = async () => {
		try {
			isLoading.value = true
			const { data } = await axios.get(`/plans?page=${page.value}&limit=${pageSize.value}`, {
				signal: signal
			})
			plans.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error: any) {
			console.error(error)
		} finally {
			isLoading.value = false
		}
	}

	const getUsers = async () => {
		try {
			isLoading.value = true
			const { data } = await axios.get(`/tenants?page=${page.value}&limit=${pageSize.value}`, {
				signal: signal
			})
			users.value = data.data
			plans.value = data.data
			itemCount.value = data.pagination.total
			from.value = data.pagination.from
			pageCount.value = Math.ceil(itemCount.value / pageSize.value)
		} catch (error: any) {
			console.error(error)
		} finally {
			isLoading.value = false
		}
	}

	const getPlanInfo = async (idx: number) => {
		try {
			isLoading.value = true
			const {data} = await axios.get(`/plans/${idx}`)
            const {id, ...info } = data.data
			planInfo.value = info
		} catch (error: any) {
			console.error(error)
		} finally {
			isLoading.value = false
		}
	}

	const getUserInfo = async (id: number) => {
		try {
			isLoading.value = true
			const { data } = await axios.get(`/tenants/${id}`)
			userInfo.value = data.data
		} catch (error: any) {
			console.error(error)
		} finally {
			isLoading.value = false
		}
	}

	const createPlan = async (data: Plans) => {
		try {
			isLoading.value = true
			const response = await axios.post("/plans", data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getPlans()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
			await getPlans()
		}
	}

	const createUser = async (data: User) => {
		try {
			isLoading.value = true
			const response = await axios.post("/tenants", data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getUsers()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
			await getUsers()
		}
	}

	const updatePlan = async (id: number | null, data: Plans) => {
		try {
			isLoading.value = true
			const response = await axios.put(`/plans/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getPlans()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
			await getPlans()
		}
	}

	const updateUser = async (id: number | null, data: User) => {
		try {
			isLoading.value = true
			const response = await axios.put(`/tenants/${id}`, data)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getUsers()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
            await getUsers()
		}
	}

	const deletePlan = async (id: number) => {
		try {
			isLoading.value = true
			const response = await axios.delete(`/plans/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getPlans()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
			await getPlans()
			
		}
	}

	const deleteUser = async (id: number) => {
		try {
			isLoading.value = true
			const response = await axios.delete(`/tenants/${id}`)
			if (response.data.success) {
				useToast("success", response.data.message, "")
				getUsers()
			}
		} catch (error: any) {
			console.error(error)
			useToast("error", error.message, "")
		} finally {
			await getUsers()
			
		}
	}

	return {
		plans,
		users,
		planInfo,
		userInfo,
		isEditing,
		editId,
		isLoading,
		getPlans,
		getUsers,
		getPlanInfo,
		getUserInfo,
		createPlan,
		createUser,
		updatePlan,
		updateUser,
		deletePlan,
		deleteUser,
        itemCount,
        pageCount,
        from,
        pageSize,
        page
	}
})
