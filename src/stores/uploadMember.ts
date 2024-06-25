import { defineStore, acceptHMRUpdate} from "pinia"
import { ref } from "vue"

export const useUploadMember = defineStore('uploadMember', ()=>{


	const valid_members = ref<any[]>([]);
	const invalid_members = ref<any[]>([]);

	return {
		valid_members,
		invalid_members
	}
})