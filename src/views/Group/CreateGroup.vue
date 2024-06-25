<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import Summary from "@/components/Group/Summary.vue"
import axios from "@/utils/tenants"
import { useToast } from "@/composables/useToast"
import { NButton, NSpin, NIcon, useMessage } from "naive-ui"

const isLoading = ref<boolean>(false)
const isSubmiting = ref<boolean>(false)

const router = useRouter()

const groupData = ref<any>({
	group_id: "",
	group_name: "",
	group_logo: "",
	tour_date: null as any,
	total_nights: 0,
	total_days: 0,
	activated: true,
	app_logo: "app_logo.png",
	app_background_image: "background_image.png",
	app_footer_color: "#f2f4f8",
	app_silent_notifications: false,
	app_chat: false,
	embed_instruction_text: "",
	embed_button_text: "",
	embed_paste_link: "",
	mail_signature: "",
	kyc_documents: [],
	custom_documents: [],
	reply_to_mails: [],
	package_category: "Luxury",
	group_status: "active",
	locations: []
})

const createGroup = async () => {
	try {
		isSubmiting.value = true
		if(!groupData.value.tour_date){
			message.error("Tour Date is required")
			return
		}
		if(!groupData.value.group_name){
			message.error("Group Name is required")
			return
		}
		if(groupData.value.locations.length === 0){
			message.error("Please Add Destination Location. At least one location is required")
			return
		}
		
		const { data } = await axios.post("/groups", groupData.value)
		if(data.success){
			useToast('success', data.message)
			router.push(`/editgroup`)
		}
	} catch (err: any) {
		console.log(err)
		useToast('error', err.response.data.message)
	} finally {
		isSubmiting.value = false

	}
}

const message = useMessage()


onUnmounted(() => {
	console.log("unmounted")
})
onMounted(async () => {
	try {
		isLoading.value = true
		const { data } = await axios.get(`/get_group_id`)
		groupData.value.group_id = data.data.group_id
	} catch (err: any) {
		console.log(err)
	} finally {
		isLoading.value = false

	}
})
</script>

<template>
	<div>
		{{ groupData }}
		<div class="flex justify-between mx-3 mb-2">
			<h3 >Create Group</h3>
			<n-button key="Save" type="success" class="col-span-1" @click="createGroup" :disabled="isSubmiting">
				<n-icon size="18" class="me-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
					</svg>
				</n-icon>
				Save & Continue
			</n-button>
		</div>

		<MainPanel>
			<div v-if="isLoading"
				class="fixed z-2 w-full h-full top-0 right-0 left-0 bottom-0 overflow-hidden  flex justify-center items-center">
				<n-spin :size="80">
					<template #description>Please wait...</template>
				</n-spin>
			</div>
			<div v-else>
				<h4 class="mb-6">{{ groupData.group_id }}</h4>
				<Summary :groupData="groupData" />
			</div>

		</MainPanel>
	</div>
</template>

<style scoped>
.custom-tabs .n-tab {
	/* Default tab color */
	background-color: #e0e0e0;
	/* Change this to your desired color */
	color: #000;
}

.custom-tabs .n-tab--active {
	/* Active tab color */
	background-color: #4caf50;
	/* Change this to your desired color */
	color: #fff;
}

/* Optionally, you can style the tab border, text, etc. */
.custom-tabs .n-tab:hover {
	background-color: #d0d0d0;
	/* Hover color */
}
</style>
