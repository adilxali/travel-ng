import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"
export const useGroupStore = defineStore("grp", () => {
	const groupData = ref<any>({
		group_id: "",
		group_name: "Travel Group 123",
		group_logo: "group_logo.png",
		tour_date: "2024-07-01",
		total_nights: 7,
		total_days: 8,
		activated: true,
		app_logo: "app_logo.png",
		app_background_image: "background_image.png",
		app_footer_color: "#ffffff",
		app_silent_notifications: false,
		app_chat: true,
		embed_instruction_text: "Please follow the instructions",
		embed_button_text: "Click Here",
		embed_paste_link: "http://example.com",
		mail_signature: "Best Regards, TravelExic",
		kyc_documents: ["Original Passport", "Photo ID", "NOC Certificate", "Vaccination Certificate"],
		custom_documents: ["Pan Card", "Covid Certificate"],
		reply_to_mails: ["reply@example.com", "noreply@example.com"],
		package_category: "Luxury",
		group_status: "active",
		locations: []
	})

    return {
        groupData
    }
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useGroupStore, import.meta.hot))
}
