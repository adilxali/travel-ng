<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue"
import { useQuoteStore } from "@/stores/quote"
import axios from "@/utils/tenants"
import { useRoute, useRouter } from "vue-router"
import { NSpin, NTabs, NTabPane, useMessage, type SelectOption, NButton } from "naive-ui"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import Summery from "@/components/GroupLead/Summery.vue"
import Flight from "@/components/GroupLead/Flight.vue"
import MailFormat from "@/components/GroupLead/MailFormat.vue"
import Cost from "@/components/GroupLead/Cost.vue"
import Hotel from "@/components/GroupLead/Hotel.vue"
import DayPlan from "@/components/GroupLead/DayPlan.vue"
import Event from "@/components/GroupLead/Event.vue"
import Transport from "@/components/GroupLead/Transport.vue"
import Visa from "@/components/GroupLead/Visa.vue"

import { storeToRefs } from "pinia"

const store = useQuoteStore()



const route = useRoute()
const router = useRouter()

const { getLead, createHotel, reset } = store
const { finalData, hotels } = storeToRefs(store)

const quoteId = ref<string>('')


const fetchData = async () => {
	if (route.params.id) {
		reset()
		await getLead(route.params.id)
	}
}

const queryType = ref<number | any>(1)

const tabs = ref([
	{ label: "Summary", value: "summary", show: [1, 2, 3, 4, 5, 6] },
	{ label: "Hotel", value: "hotels", show: [5, 6] },
	{ label: "Day Plan", value: "day_plan", show: [1, 2, 5] },
	{ label: "Flight", value: "flight", show: [3] },
	{ label: "Event", value: "event", show: [1] },
	{ label: "Transport", value: "transport", show: [2] },
	{ label: "Visa", value: "visa", show: [4] },
	{ label: "Mail Format", value: "mail_format", show: [1, 2, 3, 4, 5, 6] },
	{ label: "Cost", value: "cost", show: [1, 2, 3, 4, 5, 6] }
])

const buttons = ref<any[]>([
	{ label: "Save", type: "success", svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>` },
	{ label: "Clone", type: "primary", svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M4.25 0a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A2.25 2.25 0 0 0 11.75 0zM9.5 3A1.5 1.5 0 0 1 11 4.5v8A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3zM2.25 8.5A.75.75 0 0 1 3 7.75h1.75V6a.75.75 0 0 1 1.5 0v1.75H8a.75.75 0 0 1 0 1.5H6.25V11a.75.75 0 0 1-1.5 0V9.25H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>` },
])

const activeTab = ref<string>("summary")


const filterTabs = computed(() => {
	return tabs.value.filter(tab => tab.show.includes(finalData.value.quote_type_id))
})



const message = useMessage()
const isLoading = ref<boolean>(false)
const loading = ref<boolean>(false)

async function saveQuotation() {
	try {
		loading.value = true
		const { data } = await axios.post("/quotes", finalData.value)
		loading.value = false
		if (data.success) {

			message.success(data.message)
			reset()
			router.push('/editquotation/' + data.data.id)
		}
	} catch (error: any) {
		console.log(error.response)
	} finally {
		loading.value = false

	}
}




onUnmounted(() => {
	console.log("unmounted")
	reset()
})
onMounted(async () => {
	try {
		isLoading.value = true
		await fetchData()
		queryType.value = finalData.value.quote_type_id
		const { data } = await axios.get('get_quote_id')

		console.log(data.data.quote_id)
		finalData.value.quote_id = data.data.quote_id
		isLoading.value = false

	} catch (error: any) {
		console.log(error.response)
	}
})

</script>

<template>
	<div>
		<div v-if="loading"
			class="fixed z-2 w-screen h-scren top-0 right-0 left-0 bottom-0 overflow-hidden backdrop-blur-md flex justify-center items-center">
			<n-spin :size="80">
				<template #description>Please wait...</template>
			</n-spin>
		</div>
		<div v-if="isLoading"
			class="fixed z-1 w-full h-full top-0 right-0 left-0 bottom-0 overflow-hidden backdrop-blur-md flex justify-center items-center">
			<n-spin :size="80">
				<template #description>Please wait...</template>
			</n-spin>
		</div>
		<div v-else>
			{{ finalData }}
			<div class="grid grid-cols-1 my-2 mx-2">
				<div class="flex justify-between items-center col-span-1">
					<div>
						<h3 class="">Create Quotation</h3>
					</div>
					<div class="flex space-x-4">
						<n-button type="success" class="bg-[#23AA59] col-span-1" @click="saveQuotation()"> <n-icon
								size="18" class="me-2"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
									viewBox="0 0 24 24">
									<path fill="currentColor"
										d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
								</svg> </n-icon> Save </n-button>
						<n-button type="primary" class="col-span-1">
							<n-icon size="18" class="me-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14">
									<path fill="currentColor" fill-rule="evenodd"
										d="M4.25 0a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A2.25 2.25 0 0 0 11.75 0zM9.5 3A1.5 1.5 0 0 1 11 4.5v8A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3zM2.25 8.5A.75.75 0 0 1 3 7.75h1.75V6a.75.75 0 0 1 1.5 0v1.75H8a.75.75 0 0 1 0 1.5H6.25V11a.75.75 0 0 1-1.5 0V9.25H3a.75.75 0 0 1-.75-.75"
										clip-rule="evenodd" />
								</svg>
							</n-icon> Clone
						</n-button>
					</div>
				</div>
			</div>


			<MainPanel v-if="finalData">
				<h4 class="mb-6">{{ finalData.quote_id }}</h4>
				<div class="grid">
					<div class="grid grid-cols-2 gap-x-4">
						<div class="main">
							<div class="p-2 mx-auto w-max border rounded-lg shadow-sm flex space-x-4">
								<n-tag v-for="tab in filterTabs" :key="tab.value" :color="{
									borderColor: 'transparent'
								}" :class="[
									'px-4 py-2', 'border-none',
									activeTab === tab.value ? 'bg-[#1e51a4] text-white rounded-md' : 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
								]" @click="activeTab = tab.value">
									{{ tab.label }}
								</n-tag>
							</div>
						</div>
					</div>
					<div>
						<n-tabs :tab-style="{ display: 'none' }" v-model:value="activeTab" animated>
							<n-tab-pane name="summary">
								<n-card>
									<Summery :quoteData="finalData" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="hotels">
								<n-card>

									<Hotel :locations="finalData.queryDetail.locations" :hotels="hotels" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="day_plan">
								<n-card>
									<DayPlan :queryDetail="finalData.queryDetail" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="flight">
								<n-card>
									<Flight :flights="finalData.queryDetail.flights" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="event">
								<n-card>
									<Event :queryDetails="finalData.queryDetail" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="transport">
								<n-card>
									<Transport :locations="finalData.queryDetail.locations"
										:transport="finalData.queryDetail.transport_types" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="visa">
								<n-card>
									<Visa :locations="finalData.queryDetail.locations"
										:hubs="finalData.queryDetail.hubs" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="mail_format">
								<n-card>
									<MailFormat :mail_format="finalData.mail_format" />
								</n-card>
							</n-tab-pane>
							<n-tab-pane name="cost">
								<n-card>
									<Cost :categories="finalData.quote_costs" />
								</n-card>
							</n-tab-pane>
						</n-tabs>
					</div>
				</div>
			</MainPanel>
		</div>
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
