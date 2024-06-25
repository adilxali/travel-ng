<script setup lang="ts">
import { ref, watch, defineComponent } from "vue"
import { useUploadMember } from "@/stores/uploadMember"
import { useGroupStore } from "@/stores/group"
import { storeToRefs } from 'pinia'

import {
	type UploadFileInfo,
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
import { handleExcelUpload, verifyfunction } from "@/utils/UploadMember"
import Model from "@/app-layouts/common/Model.vue"
const visible_modal = ref<boolean>(false)
const message = useMessage()
const props = defineProps(['availDoc', 'reqDoc'])

const availableDocuments = ref<string[]>(props.availDoc)
const requiredDocuments = ref<string[]>([])


const { groupData } = storeToRefs(useGroupStore())

const { valid_members, invalid_members } = storeToRefs(useUploadMember());
const documentName = ref("")

const activeTab = ref<string>("define_doc")
const tabs = ref([
	{
		label: "Define Documents",

		value: "define_doc"
	},
	{
		label: "Pre-populated field",

		value: "populated_field"
	},
	{
		label: "Upload member List",

		value: "member_list"
	},
	{
		label: "Date Inventory",

		value: "inventory"
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
function close() {

	visible_modal.value = false

}

// Reactive reference to store the file list
const fileList = ref<UploadFileInfo[]>([])

// Function to handle file changes
function handleFileChange(newFileList: UploadFileInfo[] | any, option: any) {

	if (newFileList.fileList.length > 0) {

		const targetFile = newFileList.fileList[0].file
		handleExcelUpload(targetFile, option)

	}
}
function verifyMembers() {
	console.log('verifyMembers')
	if (verifyfunction()) {

		visible_modal.value = true
	}

}

// Wrapper function to update fileList and call handleFileChange
function onFileChange(newFileList: UploadFileInfo[], option: any) {
	valid_members.value = []
	invalid_members.value = []
	fileList.value = newFileList
	handleFileChange(newFileList, option)
}



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
				<n-tab-pane name="define_doc">
					<div class="bg-[#d1ecf1] my-3 py-3 mx-4 px-4 rounded-md">
						<n-collapse>
							<n-collapse-item name="1">
								<template #header>
									<h4 class="text-[#3d7a95]">How it works?</h4>
								</template>
								<div>
									<span>
										NB : Any if you do not see a master set of documents then ask your agency admin
										to create the same. You can also
										add custom documents here in the list then drag them to right hand side to make
										them available for the tour.
									</span>
								</div>
							</n-collapse-item>
						</n-collapse>
					</div>
					<div>
						<div class="flex gap-4 p-4">

							<NCard title="Agency Documents Move Docs" class="flex-1">
								<draggable v-model="availableDocuments" group="documents" item-key="index"
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

							<NCard title="Documents Required" class="flex-1">
								<draggable v-model="groupData.kyc_documents" group="documents" item-key="index"
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
						<h5>Add Documents</h5>
						<div class="mt-4 ml-4 grid grid-cols-2 gap-x-4">
							<div class="grid grid-cols-6 gap-x-2">
								<div class="col-span-5">
									<NInput v-model:value="documentName" @keydown.enter="addDocument"
										placeholder="Define document name" />
								</div>
								<NButton type="primary" @click="addDocument" class="ml-2">+</NButton>
							</div>
						</div>
					</div>
				</n-tab-pane>
				<n-tab-pane name="populated_field">
					<div class="bg-[#d1ecf1] my-3 py-3 mx-4 px-4 rounded-md">
						<n-collapse>
							<n-collapse-item name="1">
								<template #header>
									<h4 class="text-[#3d7a95]">How it works?</h4>
								</template>
								<div>
									<span>
										NB : Any if you do not see a master set of documents then ask your agency admin
										to create the
										same. You can also add custom documents here in the list then drag them to right
										hand side to
										make them available for the tour.
									</span>
								</div>
							</n-collapse-item>
						</n-collapse>
					</div>
					<div class="mx-auto grid grid-cols-8 p-4 gap-x-4 gap-y-2">
						<div class="col-span-4">
							<p class="text-md">Question</p>
							<n-space vertical class="mt-3">
								<n-input placeholder="What is your Favourite color?">

								</n-input>
							</n-space>
						</div>
						<div class="col-span-2">
							<p class="text-md">abc</p>
							<NUpload>

								<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
									<template #icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
											viewBox="0 0 24 24">
											<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
										</svg>
									</template>
									Upload Sheet
								</n-button>
							</NUpload>
						</div>
						<div class="col-span-2">
							<p class="text-md">Sample File</p><n-button type="primary"
								class="mt-3 w-full border-t-blue-800 bg-blue-100" dashed>
								<template #icon>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path fill="currentColor"
											d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
									</svg>

								</template>
								Download Sample
							</n-button>

						</div>
					</div>
				</n-tab-pane>
				<n-tab-pane name="member_list">
					<div class="bg-[#d1ecf1] my-3 py-3 mx-4 px-4 rounded-md">
						<n-collapse>
							<n-collapse-item name="1">
								<template #header>
									<h4 class="text-[#3d7a95]">How it works?</h4>
								</template>
								<div>
									<span>
										NB : Any if you do not see a master set of documents then ask your agency admin
										to create the
										same. You can also add custom documents here in the list then drag them to right
										hand side to
										make them available for the tour.
									</span>
								</div>
							</n-collapse-item>
						</n-collapse>
					</div>
					<div class="mx-auto grid grid-cols-8 p-4 gap-x-4 gap-y-2">

						<div class="col-span-2">
							<p class="text-md">Approved Member Sheet</p>
							<NUpload @change="(files: any) => onFileChange(files, 'approve')" accept=".xls,.xlsx">

								<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
									<template #icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
											viewBox="0 0 24 24">
											<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
										</svg>
									</template>
									Upload Sheet
								</n-button>
							</NUpload>
						</div>
						<div class="col-span-2">
							<p class="text-md">Regular Member Sheet</p>
							<NUpload @change="(files: any) => onFileChange(files, 'regular')" accept=".xls,.xlsx">

								<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
									<template #icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
											viewBox="0 0 24 24">
											<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
										</svg>
									</template>
									Upload Sheet
								</n-button>
							</NUpload>
						</div>
						<div class="col-span-2">
							<p class="text-md">Id Based Member Sheet </p>
							<NUpload @change="(files: any) => onFileChange(files, 'id_based')" accept=".xls,.xlsx">

								<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
									<template #icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
											viewBox="0 0 24 24">
											<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
										</svg>
									</template>
									Upload Sheet
								</n-button>
							</NUpload>
						</div>
						<div class="col-span-1 mt-5" v-if="valid_members.length > 0 || invalid_members.length > 0">
							<Model :show="visible_modal" @close="close()">

								<h5 class="text-2xl p-text-secondary block mb-5 border-b pb-2">Invalid Members </h5>

								<div class="">
									<div class="flex justify-center flex-col">

										<n-button type="success" class="mt-3 p-5 m-5  border-t-green-800 bg-green-100"
											dashed>
											<template #icon>
												<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
													viewBox="0 0 24 24">
													<path fill="currentColor"
														d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
												</svg>

											</template>
											Download Invalid Members
										</n-button>
										<p>Note: There is some error in your excel member file please correct and
											re-upload the file.
											Above excel file is just for reference do not upload this file.</p>

									</div>
								</div>


							</Model>
							<n-button @click="verifyMembers" type="warning"
								class="mt-3 w-full border-t-yellow-800 bg-yellow-100" dashed>
								Click To verify
							</n-button>
						</div>
					</div>


				</n-tab-pane>
				<n-tab-pane name="inventory">
					<div class="bg-[#d1ecf1] my-3 py-3 mx-4 px-4 rounded-md">
						<n-collapse>
							<n-collapse-item name="1">
								<template #header>
									<h4 class="text-[#3d7a95]">How it works?</h4>
								</template>
								<div>
									<span>
										NB : Any if you do not see a master set of documents then ask your agency admin
										to create the
										same. You can also add custom documents here in the list then drag them to right
										hand side to
										make them available for the tour.
									</span>
								</div>
							</n-collapse-item>
						</n-collapse>
					</div>
					<div class="mx-auto grid grid-cols-8 p-4 gap-x-4 gap-y-2">
						<div class="col-span-2">
							<p class="text-md">Hub wise inventory management</p>
							<NUpload>

								<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
									<template #icon>
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
											viewBox="0 0 24 24">
											<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
										</svg>
									</template>
									Upload master data file
								</n-button>
							</NUpload>
						</div>
						<div class="col-span-2">
							<p class="text-md">Sample File</p><n-button type="primary"
								class="mt-3 w-full border-t-blue-800 bg-blue-100" dashed>
								<template #icon>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path fill="currentColor"
											d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
									</svg>

								</template>
								Download Sample
							</n-button>

						</div>
					</div>
				</n-tab-pane>
			</n-tabs>
		</div>

	</div>
</template>
