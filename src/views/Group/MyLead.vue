<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useToast } from "@/composables/useToast"
import { useTenantStore } from "@/stores/grouplead"
import { storeToRefs } from "pinia"
import draggable from "vuedraggable"
import { NDivider, NTag, NTabs, NTabPane, useMessage, type UploadFileInfo, NSpin, NInputNumber, NDatePicker } from "naive-ui"
import type { Column } from "@/types/kanban.d"
import Drawer from "@/components/GroupLead/Drawer.vue"
import Note from "@/components/GroupLead/Note.vue"
import Activity from "@/components/GroupLead/Activity.vue"
import Email from "@/components/GroupLead/Email.vue"
import File from "@/components/GroupLead/File.vue"
import Remarks from "@/components/GroupLead/Remarks.vue"
import Quote from "@/components/GroupLead/Quote.vue"
import axios from "@/utils/tenants"

const tabs = ref<string[]>(["Notes", "Activity", "Email", "File", "Quote"])
const currentTab = ref("Notes")
const noteContent = ref<string>("")

const store = useTenantStore()

const { fetchLeads, sendMail, updateStage, getLead, getLeadActivity, createNote } = store
const { groupLeads, selectedLead, leadActivity } = storeToRefs(store)

const isLoading = ref<boolean>(false)

const isSending = ref<boolean>(false)

const editingTravellerCount = ref<boolean>(false)
const travellerCount = ref<number>(0)
const handleTravellerEdit = (count:any)=>{
	editingTravellerCount.value = true,
	travellerCount.value = count.number_of_travellers
}

const editingTravellerDate = ref<boolean>(false)
const travellerDate = ref(null)
const handleTravellerDate =  (count:any)=>{
	editingTravellerDate.value = true
	// travellerDate.value = count.travel_date
}

const saveTravellerCount = async(count:any)=>{
	count.number_of_travellers = travellerCount.value

	try{
		await updateStage(count.id, { number_of_travellers: travellerCount.value })
	}catch(error){
		console.log(error)
	}finally{
		await getLeadActivity(count.id)
		editingTravellerCount.value = false
	}

}

const cancelEditDate = ()=>{
	editingTravellerDate.value = false;
}
const cancelEditCount = ()=>{
	editingTravellerCount.value = false;
}

const saveTravellerDate = async(count:any)=>{
	count.travel_date = travellerDate.value

	try{
		await updateStage(count.id, { travel_date: travellerDate.value })
	}catch(error){
		console.log(error)
	}finally{
		await getLeadActivity(count.id)
		editingTravellerDate.value = false
	}

}

async function handleNote() {
	isSending.value = true
	console.log(noteContent.value)
	const data = {
		group_lead_id: selectedLead.value.id,
		type: "note",
		comment: noteContent.value
	}
	await createNote(data)
	await getLeadActivity(selectedLead.value.id)
	noteContent.value ="",
	isSending.value = false
}

const email = ref({
	email: "",
	cc: [] as string[],
	subject: "",
	body: "",
	file: null as UploadFileInfo | null
})

async function sendEmail() {
	isSending.value = true
	const formData = new FormData()
	formData.set("group_lead_id", selectedLead.value.id)
	formData.set("cc[]", "")
	formData.set("bcc[]", "")
	formData.set("subject", email.value.subject)
	formData.set("reply", email.value.body)
	formData.append("reply_to[]", email.value.email)
	await sendMail(formData)
	isSending.value = false
}

const activity = ref({
	group_lead_id: null,
	title: "",
	type: "phone",
	schedule_from: "2024-06-06 16:00:00",
	schedule_to: "2024-06-06 17:00:00",
	location: "Byjus Building, Dehradun, Uttarakhand, India",
	comment: "This is just a demo meting with client. Client want to know about our project in depth."
})

async function send() {
	try {
		isSending.value = true
		activity.value.group_lead_id = selectedLead.value.id

		const response: any = await createNote(activity.value)

		// Check Response (Ensure response indicates success)
		if (response) {
			// Or whatever success condition applies
			// Get Lead Activity (Assuming getLeadActivity is async)
			await getLeadActivity(selectedLead.value.id)

			// Reset Activity Object:
			activity.value = {
				group_lead_id: null,
				title: "",
				type: "phone",
				schedule_from: "", // Reset to empty string if you prefer
				schedule_to: "",
				location: "",
				comment: ""
			}
		} else {
			// Handle error response
			console.error("Error creating note:", response) // Or display a user-friendly message
		}
	} catch (error) {
		console.error("An error occurred while sending the activity:", error)
		// Handle other potential errors
	} finally {
		isSending.value = false
	}
}

const file = ref<any>({
	type: "file",

	bode: "" as string,
	file: null as UploadFileInfo | null
})

const uploadFile = async () => {
	try {
		isSending.value = true
		const formData = new FormData()
		formData.set("group_lead_id", selectedLead.value.id)
		formData.set("comment", file.value.body)
		formData.set("file", file.value.file)

		const { data } = await axios.post("/activities/file-upload", formData)
		if (data.success) {
			useToast("success", data.message, "")
			// fetchLeads()
		}
	} catch (error: any) {
		console.log(error)
	} finally {
		await getLeadActivity(file.value.group_lead_id)
		file.value = {
			type: "file",
			body: "" as string,
			file: null as UploadFileInfo | null
		}
		isSending.value = false
	}
}

const closeSlider = () => {
	;(selectedLead.value = []), (leadActivity.value = [])
}

const message = useMessage()

const columns = ref<Column[]>([])

async function onLeadDrop(event: any) {
	const leadId = parseInt(event.item.dataset.id)
	const newStageId = event.to.parentElement.dataset.stageId
	console.log("Stage Id", newStageId)

	try {
		// Update the lead's stage on the server
		await updateStage(leadId, { group_lead_pipeline_stage_id: newStageId })
	} catch (error) {
		console.error("Error updating lead stage:", error)
	}
}

onMounted(async () => {

	try{
		isLoading.value = true
		await fetchLeads()
		columns.value = groupLeads.value
	}catch(error:any) {
		console.log("Error fetching leads")
	} finally{
		isLoading.value = false
	}


})

const openSlider = ref<boolean>(false)
</script>
<template>
	<div>
		<div
			v-if="isLoading"
			class="fixed z-1 w-full h-full top-0 right-0 left-0 bottom-0 overflow-hidden backdrop-blur-md flex justify-center items-center"
		>
			<n-spin :size="80">
				<template #description>Please wait...</template>
			</n-spin>
		</div>
		<!-- Kanban Modal -->
		<div class="flex gap-4 w-full mx-auto overflow-x-auto rounded-lg items-stretch">
			<div
				v-for="column in columns"
				:key="column.id"
				class="bg-[#f9f9f9] p-5 min-w-[300px] flex-1 rounded-md flex flex-col"
				:data-stage-id="column.id"
			>
				<header class="font-bold mb-2 rounded-sm capitalize">
					{{ column.stage }} -
					<span>{{ column.group_leads.length }}</span>
				</header>

				<draggable
					v-model="column.group_leads"
					:group="{ name: 'group_leads' }"
					@end="onLeadDrop"
					item-key="id"
					:animation="300"
					class="flex-1"
				>
					<template #item="{ element: group_lead }">
						<div
							@click="
								async () => {
									isLoading = true
									await getLead(group_lead.id)
									await getLeadActivity(group_lead.id)
									openSlider = true
									isLoading = false
								}
							"
							:data-id="group_lead.id"
							class="cursor-move max-h-[204px] pb-3 w-full bg-white my-2 rounded-lg border border-[#dddddd]"
						>
							<div class="grid grid-cols-3 gap-x-2">
								<div class="mt-2 col-span-2">
									<div class="ml-4">
										<p class="text-left font-semibold">{{ group_lead.company_id.name }}</p>
									</div>
								</div>
								<div class="col-span-1">
									<p
										class="font-bold text-sm p-1 rounded text-center"
										:class="{
											'bg-green-100 text-green-800': group_lead.quotes.length > 0, // Not Sent
											'bg-red-100 text-red-800': group_lead.quotes.length === 0 // Sent
										}"
									>
										{{ group_lead.quotes.length === 0 ? "Not Sent" : "Sent" }}
									</p>
								</div>
							</div>

							<div>
								<div class="ml-4 mt-6 grid gap-y-3">
									<div class="flex gap-x-2">
										<p class="text-left text-sm text-[#555555]">Date :</p>
										<p class="text-left text-sm font-bold text-[#555555]">
											{{ group_lead.travel_date }}
										</p>
									</div>
									<div class="flex gap-x-2">
										<p class="text-left text-sm text-[#555555]">Budget :</p>
										<p class="text-left text-sm font-bold text-[#555555]">
											{{ parseInt(group_lead.estimated_budget).toFixed(2) }}
										</p>
									</div>
									<div class="flex gap-x-2">
										<p class="text-left text-sm text-[#555555]">Query Type :</p>
										<p class="text-left text-sm font-bold text-[#555555]">
											{{ group_lead.group_lead_type_id.name }}
										</p>
									</div>
									<div class="flex gap-x-2">
										<div class="grid grid-cols-2">
											<p class="text-left text-sm text-[#555555]">Pax :</p>
											<p class="text-left text-sm font-bold text-[#555555]">
												{{ group_lead.number_of_travellers }}
											</p>
										</div>
										<div class="flex gap-x-2">
											<p class="text-left text-sm text-[#555555]">Feel :</p>
											<p class="text-left text-sm font-bold text-[#555555]">
												{{ group_lead.lead_feel }}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</draggable>
			</div>
		</div>

		<!-- Drawer -->
		<Drawer
			:show="openSlider"
			@update:show="
				$event => {
					closeSlider(), (openSlider = $event)
				}
			"
		>
			<div class="grid grid-cols-2 gap-x-4 h-full">
				<div class="m-3 border-r-2 border-r-gray-300 h-full overflow-y-scroll">
					<div class="mx-4 border-b-2 border-b-gray-300">
						<button @click="openSlider = false" class="bg-red-500 mb-2 text-white rounded-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 peer"
								fill="red"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<div class="hidden"><NDivider /></div>
					</div>
					<div class="h-3 text-left ml-4 mt-3">
						<p>{{ selectedLead.company_id.name }} - {{ selectedLead.contact_person_id.name }}</p>
					</div>

					<!-- Travelling Detail -->
					<div class="my-6 mx-4">
						<h5 class="mb-3">Travelling Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
									/>
								</svg>
								Travel Date
							</p>
							<div class="flex justify-evenly space-x-2" v-if="editingTravellerDate">
								<NDatePicker
									v-model:formatted-value="travellerDate"
									value-format="yyyy-MM-dd"
									type="date"
									placeholder="Please Select Date"
									
									
								/>
							
								<NIcon :size="24" class="cursor-pointer" @click="cancelEditDate">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
								</NIcon>
									
								
								
								<NIcon :size="22" class="cursor-pointer"
									@click="saveTravellerDate(selectedLead)">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
								</NIcon>
									
								
							</div>
							<p v-else @click="handleTravellerDate(selectedLead)" class="text-sm font-semibold">
								{{ selectedLead.travel_date }}
							</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
									/>
								</svg>
								Number of Travellers
							</p>
							<div class="flex justify-evenly space-x-2" v-if="editingTravellerCount">
								<NInputNumber
									v-model:value="travellerCount"
									placeholder="Enter traveller no."
									:show-button="false"
									:min="1"
									size="small"
								/>
							
								<NIcon :size="24" class="cursor-pointer" @click="cancelEditCount">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
								</NIcon>
									
								
								
								<NIcon :size="24" class="cursor-pointer"
								@click="saveTravellerCount(selectedLead)">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
								</NIcon>
							</div>
							<p v-else @click="handleTravellerEdit(selectedLead)" class="text-sm font-semibold">
								{{ selectedLead.number_of_travellers }}
							</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path fill="#bfbfbf" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z" />
									<path
										fill="#000000"
										fill-rule="evenodd"
										d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.752 2.818a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503"
										clip-rule="evenodd"
									/>
								</svg>
								Source Lead
							</p>
							<p class="text-sm font-semibold">{{ selectedLead.group_lead_source_id.name }}</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 1H11C11.5523 1 12 1.44772 12 2C12 2.55228 11.5523 3 11 3H3C2.44772 3 2 2.55228 2 2C2 1.44772 2.44772 1 3 1Z"
										fill="#BFBFBF"
									/>
									<path
										d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
										fill="#BFBFBF"
									/>
									<path
										d="M8.68221 7C9.06916 6.74272 9.4877 6.52915 9.93076 6.36637C9.97545 6.25292 10 6.12932 10 6C10 5.44772 9.55229 5 9 5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H8.68221Z"
										fill="#BFBFBF"
									/>
									<path
										d="M6.80269 9C6.45134 9.60738 6.2034 10.2821 6.08296 11H2C1.44772 11 1 10.5523 1 10C1 9.44771 1.44772 9 2 9H6.80269Z"
										fill="#BFBFBF"
									/>
									<path
										d="M6.80269 15C6.45134 14.3926 6.2034 13.7179 6.08296 13H1C0.447715 13 0 13.4477 0 14C0 14.5523 0.447715 15 1 15H6.80269Z"
										fill="#BFBFBF"
									/>
								</svg>

								Query Type
							</p>
							<p class="text-sm font-semibold">{{ selectedLead.group_lead_type_id.name }}</p>
						</div>
						<NDivider />
					</div>

					<!-- Contact Details -->

					<div class="my-6 mx-4">
						<h5 class="mb-3">Contact Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<p class="text-sm text-[#626262] flex items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
									<path
										fill="#bfbfbf"
										d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
									/>
								</svg>
								Contact Name
							</p>
							<p class="text-sm font-semibold">{{ selectedLead.contact_person_id.name }}</p>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<div>
								<p class="text-sm text-[#626262] flex items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
										<path
											fill="#bfbfbf"
											d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
										/>
									</svg>
									Contact Number
								</p>
							</div>
							<div>
								<template
									v-for="(item, index) in selectedLead.contact_person_id.contact_numbers"
									:key="index"
								>
									<p class="text-sm font-semibold">{{ item.value }} - {{ item.label }}</p>
								</template>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<div>
								<p class="text-sm text-[#626262] flex items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
										<path fill="#bfbfbf" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z" />
										<path
											fill="#000000"
											fill-rule="evenodd"
											d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.752 2.818a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503"
											clip-rule="evenodd"
										/>
									</svg>
									Contact Email
								</p>
							</div>
							<div>
								<template v-for="(item, index) in selectedLead.contact_person_id.email" :key="index">
									<p class="text-sm font-semibold">{{ item.value }} - {{ item.label }}</p>
								</template>
							</div>
						</div>

						<NDivider />
					</div>

					<!-- Package Details -->

					<div class="my-6 mx-4">
						<h5 class="mb-3">{{ selectedLead.group_lead_type_id.name }} Detail</h5>
						<div class="grid grid-cols-2 gap-x-4 mt-1">
							<template v-if="selectedLead.group_lead_type_id.id === 4">
								<template v-for="(item, index) in selectedLead.queryDetail.countries" :key="index">
									<div>
										<p class="text-sm text-[#626262] flex items-center gap-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
											>
												<path
													fill="#bfbfbf"
													d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
												/>
											</svg>
											Location {{ index + 1 }}
										</p>
									</div>
									<div>
										<p class="text-sm font-semibold">{{ item.name }}</p>
									</div>
								</template>
							</template>
							<template
								v-if="
									selectedLead.group_lead_type_id.id === 6 ||
									selectedLead.group_lead_type_id.id === 5 ||
									selectedLead.group_lead_type_id.id === 2
								"
							>
								<template v-for="(item, index) in selectedLead.queryDetail.locations" :key="index">
									<div>
										<p class="text-sm text-[#626262] flex items-center gap-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
											>
												<path
													fill="#bfbfbf"
													d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
												/>
											</svg>
											Location {{ index + 1 }}
										</p>
									</div>
									<div>
										<p class="text-sm font-semibold">{{ item.name }}</p>
									</div>
								</template>
							</template>
							<template v-if="selectedLead.group_lead_type_id.id === 3">
								<template v-for="(item, index) in selectedLead.queryDetail.location" :key="index">
									<div>
										<p class="text-sm text-[#626262] flex items-center gap-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
											>
												<path
													fill="#bfbfbf"
													d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
												/>
											</svg>
											Location {{ index + 1 }}
										</p>
									</div>
									<div>
										<p class="text-sm font-semibold">{{ item }}</p>
									</div>
								</template>
							</template>
						</div>

						<NDivider />
					</div>

					<!-- Requirements -->
					<template
						v-if="selectedLead!.group_lead_type_id.id === 1 || selectedLead.group_lead_type_id.id === 5"
					>
						<div class="my-6 mx-4">
							<h5 class="mb-3">Requirements</h5>
							<div class="flex flex-wrap items-center gap-2">
								<template v-for="(item, index) in selectedLead.queryDetail.requirements" :key="index">
									<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">
										{{ item }}
									</n-tag>
								</template>
							</div>

							<NDivider />
						</div>
					</template>

					<!-- Hubs -->

					<template
						v-if="
							selectedLead.group_lead_type_id.id === 3 ||
							selectedLead.group_lead_type_id.id === 4 ||
							selectedLead.group_lead_type_id.id === 5
						"
					>
						<div class="my-6 mx-4">
							<h5 class="mb-3">Hubs</h5>
							<div class="flex flex-wrap items-center gap-2">
								<template v-for="(item, index) in selectedLead.queryDetail.hubs" :key="index">
									<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">
										{{ item }}
									</n-tag>
								</template>
							</div>
							<NDivider />
						</div>
					</template>
					<!-- Transport Type -->
					<template v-if="selectedLead.group_lead_type_id.id === 2">
						<div class="my-6 mx-4">
							<h5 class="mb-3">Transport Types</h5>
							<div class="flex flex-wrap items-center gap-2">
								<template
									v-for="(item, index) in selectedLead.queryDetail.transport_types"
									:key="index"
								>
									<n-tag type="primary" class="bg-[#1e51a4] text-white rounded-lg px-4 py-2">
										{{ item }}
									</n-tag>
								</template>
							</div>
							<NDivider />
						</div>
					</template>

					<!-- Conversations And Remarks -->
					<div class="my-6 mx-4">
						<Remarks :data="leadActivity" />

						<NDivider />
					</div>
				</div>
				<div class="mt-2 h-full overflow-y-auto">
					<div class="p-2 mx-auto w-max border rounded-lg shadow-sm flex space-x-4">
						<n-tag
							v-for="tab in tabs"
							:key="tab"
							:class="[
								'px-4 py-2 ',
								currentTab === tab
									? 'bg-[#1e51a4] text-white '
									: 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
							]"
							:color="{
								borderColor: 'transparent'
							}"
							@click="() => (currentTab = tab)"
						>
							{{ tab }}
						</n-tag>
					</div>
					<div>
						<!-- const tabs = ['const tabs = ['Notes', 'Activity', 'Email', 'File', 'Quote']', 'Activity', 'Email', 'File', 'Quote'] -->

						<n-tabs :tab-style="{ display: 'none' }" v-model:value="currentTab" animated>
							<n-tab-pane name="Notes">
								<n-card>
									<Note v-model="noteContent" @saveNote="handleNote" :isSending="isSending" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="Activity">
								<n-card>
									<Activity :activity="activity" @send="send" :isSending="isSending" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="Email">
								<n-card>
									<Email :email="email" @sendEmail="sendEmail" :isSending="isSending" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="File">
								<n-card>
									<File :file="file" @upload="uploadFile" :isSending="isSending" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="Quote">
								<n-card>
									<Quote :lead="selectedLead" />
								</n-card>
							</n-tab-pane>
						</n-tabs>
					</div>
				</div>
			</div>
		</Drawer>
	</div>
</template>
<style scoped>
.sortable-chosen {
	background-color: rgba(231, 231, 231, 0.2);
	border: 1px solid #ddd;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.sortable-ghost {
	/* opacity: 0.8; */
	background-color: #ecf3ff;
}

.sortable-drag {
	background-color: #eee;
	transform: rotate(50deg);
}
</style>
