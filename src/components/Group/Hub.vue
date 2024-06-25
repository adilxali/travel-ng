<script setup lang="ts">
import { ref, watch } from "vue"
import {
	NButton,
	NSelect,
	NTabs,
	NTabPane,
	NTag,
	NCard,
	NInput,
	useMessage,
	NCollapse,
	NCollapseItem,
	type SelectOption, NTimePicker, NIcon, NSpace, NUpload
} from "naive-ui"
import draggable from "vuedraggable"
import Hotel from "@/components/Group/Hotel.vue"
import dayplan from "@/components/Group/DayPlan.vue"

const message = useMessage()
const availableDocuments = ref(["Original Passport", "NOC Certificate", "Photo ID", "Vaccination Certificate"])
const requiredDocuments = ref<string[]>([])
const props = defineProps(["locations", "hotels"])
const documentName = ref("")

const activeTab = ref<string>("subgroup")
const tabs = ref([
	{
		label: "Subgroups",

		value: "subgroup"
	},
	{
		label: "Hotel",

		value: "hotel"
	},
	{
		label: "Day Plan",

		value: "day_plan"
	},
	{
		label: "Personalize",

		value: "personalise"
	}
])
function addDocument() {
	const newDocumentName = documentName.value.trim()
	if (newDocumentName) {
		availableDocuments.value.push(newDocumentName)
		documentName.value = ""
		message.success(`Added ${newDocumentName}`)
	}
}

watch(requiredDocuments, () => {
	console.log(requiredDocuments)
})
</script>

<template>
	<div>

		<div class="flex justify-start gap-x-2 p-4">


			<div class="p-2 mb-4 mt-5 w-max border rounded-lg shadow-sm flex justify-self-end space-x-4">
				<n-tag v-for="tab in tabs" :key="tab.value" :color="{
					borderColor: 'transparent'
				}" :class="[
						'px-4 py-2',
						'border-none',
						activeTab === tab.value
							? 'bg-[#1e51a4] text-white rounded-md'
							: 'text-[#1e51a4] cursor-pointer bg-transparent border-none'
					]" @click="activeTab = tab.value">
					{{ tab.label }}
				</n-tag>
			</div>
		</div>

		<div>
			<n-tabs :tab-style="{ display: 'none' }" v-model:value="activeTab" animated>
				<n-tab-pane name="subgroup">

					<div class="mx-auto w-full grid grid-cols-4 p-4 gap-x-4 gap-y-2">
						<div class="col-span-3">
							<div class="bg-[#d1ecf1]  py-3 px-4 rounded-md">
								<n-collapse>
									<n-collapse-item name="1">
										<template #header>
											<h4 class="text-[#3d7a95]">How it works?</h4>
										</template>
										<div>
											<span>
												NB : Any if you do not see a master set of documents then ask your
												agency admin to create the same. You can also
												add custom documents here in the list then drag them to right hand side
												to make them available for the tour.
											</span>
										</div>
									</n-collapse-item>
								</n-collapse>
							</div>
							<div class="mt-5 w-full">
								<h4>Subgroup Selection</h4>

								<p class="text-md mt-5 text-[#555] font-semibold">Generate excel for subgrouping using
									Airport Hub</p>
								<div class="grid grid-cols-10 gap-x-4">
									<n-select placeholder="Select Hub" class="mt-2 col-span-4" />
									<n-button type="primary"
										class="ms-3 mt-2 w-full border-t-blue-800 bg-blue col-span-2">
										<template #icon>
											<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
												viewBox="0 0 24 24">
												<path fill="currentcolor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
											</svg>
										</template>
										Previous Excel
									</n-button>
									<n-button type="primary" class="mt-2 w-full border-t-blue-800 bg-blue col-span-2">
										<template #icon>
											<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
												viewBox="0 0 24 24">
												<path fill="currentcolor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
											</svg>
										</template>
										Download Excel
									</n-button>
									<n-button type="success"
										class="mt-2 w-full border-t-green-800 bg-green-100 col-span-2" dashed>
										<template #icon>
											<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
												viewBox="0 0 24 24">
												<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
											</svg>
										</template>
										Upload Sheet
									</n-button>
								</div>
							</div>
							<div class="mt-5">
								<h4>Subgroup Selection</h4>

								<p class="text-md mt-5 text-[#555] font-semibold">Subgroup Category</p>
								<div class="grid grid-cols-8 gap-x-4">
									<n-select placeholder="Select Category" class="mt-2 col-span-4" />
									<n-select placeholder="Select Subgroup" class="mt-2 col-span-4" />
								</div>
							</div>

							<div class="mt-5 flex">
								<n-button type="primary">Hotels ></n-button>
							</div>
						</div>


					</div>


				</n-tab-pane>
				<n-tab-pane name="hotel">
					<Hotel :hotels="hotels" :locations="locations" />
				</n-tab-pane>
				<n-tab-pane name="day_plan">
					<dayplan :locations="locations" />

				</n-tab-pane>
				<n-tab-pane name="personalise">
					<div>
						<div class="flex gap-4 p-4">

							<NCard title="Agency Documents Move Docs" class="flex-1  bg-[#f9f9f9]">
								<draggable v-model="availableDocuments" group="documents" item-key="index"
									class="list-group bg-white" ghost-class="ghost" tag="div" handle=".drag-handle">
									<template #item="{ element, index }">
										<div class="flex items-center justify-between mt-2 border p-2 rounded-lg">
											<h5>{{ element }}</h5>
											<div>
												<NIcon :size="24" class="cursor-move drag-handle">
													<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
														viewBox="0 0 24 24">
														<path fill="#1e51a4"
															d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z" />
													</svg>
												</NIcon>
											</div>
										</div>
									</template>
								</draggable>
							</NCard>

							<NCard title="Documents Required" class="flex-1 bg-[#f9f9f9]">
								<draggable v-model="requiredDocuments" group="documents" item-key="index"
									class="list-group" ghost-class="ghost" tag="div" handle=".drag-handle">
									<template #item="{ element, index }">
										<div class="flex items-center justify-between mt-2 border p-2 rounded-lg">
											<h5>{{ element }}</h5>
											<div>
												<NIcon :size="24" class="cursor-move drag-handle">
													<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
														viewBox="0 0 24 24">
														<path fill="#1e51a4"
															d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z" />
													</svg>
												</NIcon>
											</div>
										</div>
									</template>
								</draggable>
							</NCard>
						</div>
						<div class="flex gap-4 p-5">
							<NCard class="w-[50%]  bg-[#f9f9f9]">
								<h5>Add Documents</h5>
								<div class="mt-4 ml-4 grid grid-cols-4 gap-x-4">

									<div class="col-span-3">
										<NInput v-model:value="documentName" @keydown.enter="addDocument"
											placeholder="Define document name" />
									</div>
									<NButton type="primary" @click="addDocument" class="ml-2">+</NButton>
								</div>

							</NCard>
						</div>
					</div>
				</n-tab-pane>
			</n-tabs>
		</div>

	</div>
</template>

<style scoped>
.n-card.n-card--bordered {
	border: 1px solid #dddddd;
}
</style>