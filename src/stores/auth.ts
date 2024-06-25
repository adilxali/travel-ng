import { defineStore, acceptHMRUpdate } from "pinia"
import type { Role, Roles } from "@/types/auth.d"
import _castArray from "lodash/castArray"
import axios from "axios"
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useToast } from "@/composables/useToast"
export const useAuthStore = defineStore("auth", ()=>{
	const logged = ref(false)
	const role = ref<Role |null>(null)
	const user = ref<any>({})
	const token = ref<string | null | undefined>(null)
	const router = useRouter()
	const loading = ref(false)

	const setLogged = (payload?: any, admin?:Roles, tokenn?:string) => {
		logged.value = true
		role.value = admin;
		user.value = payload;
		token.value = tokenn;
	}

	const expired = (error:any)=>{
		if(error?.response.data.message === 'expired'){
			useToast( "error","Token Expired",'')
			logged.value = false
			role.value = null
			user.value = {}
			token.value = null
			router.push({ name: "Login" })
			localStorage.removeItem('token')
		}
	}

	const setLogout = async () => {
		try {
			loading.value = true
			const res = await axios.post('https://travelexicng.doon.org.in/api/logout')
			if (res.status === 200 || res.data.message == "expired") {
				useToast( "success","Logout successfully",'')
				logged.value = false
				role.value = null
				user.value = {}
				token.value = null
				router.push({ name: "Login" })
				localStorage.removeItem('token')
			}
			
			console.log(res)
		} catch (error:any) {
			// Handle error here
			expired(error)
			console.error(error)
		}
		finally{
			loading.value = false
		
		}
	}
	
	const isLogged = computed(() => logged.value)
	const userRole = computed(() => role.value)
	const isRoleGranted = (roles?: Roles) => {
		if (!roles) {
			return true
		}
		if (!role.value) {
			return false
		}

		const arrRoles: Role[] = _castArray(roles)

		if (arrRoles.includes("all")) {
			return true
		}

		return arrRoles.includes(role.value)
	}
	return {
		logged,
		role,
		user,
		setLogged,
		setLogout,
		isLogged,
		userRole,
		isRoleGranted,
		token,
		loading,
		expired
	}
},
{
	persist:{
		paths:["logged", "role", "user", 'token']
	
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
