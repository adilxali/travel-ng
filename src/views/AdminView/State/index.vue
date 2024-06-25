<script setup lang="tsx">
import { reactive, ref, computed, onMounted, onUnmounted, watch } from "vue"
import { storeToRefs } from "pinia"
import Model from "@/app-layouts/common/Model.vue"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import {
	NForm,
	NFormItem,
	NButton,
	NInput,
	useMessage,
	NDataTable,
	useDialog,
	NSpace,
	NPagination,
	type FormInst,
	type FormRules,
	type FormValidationError,
	NSelect,
	NIcon,
	type SelectOption
} from "naive-ui"

import { useMasterStore } from "@/stores/master"
const selectedCountry = ref<any>(null)
const isEditing = ref<boolean>(false)
const dialog = useDialog()
const message = useMessage()
const visible = ref<boolean>(false)
const deleteConfirmation = ref<string | null>(null)
const editId = ref<any>(null)
const store = useMasterStore()
const { countries, states, page, pageCount, pageSize, itemCount, loading } = storeToRefs(store)

const formRef = ref<FormInst | null>(null)

const { fetchAllCountry, fetchStateByCountryId, updateState, createState, deleteState, $reset } = store

const stateInfo = reactive({
	name: "",
	currency: "",
	state_code: "",
	latitude: "",
	longitude: "",
	timezone: "",
	description: "",
	country_id: null as any
})
const createColumns = ({ edit, removeItem }: { edit: (id: number) => void; removeItem: (id: number) => void }) => {
	return [
		{
			title: "#",
			key: "key",
			width: 50,
			render: (_: any, index: number) => {
				return `${index + 1}`
			}
		},
		{
			title: "Name",
			key: "name",
			width: 120
		},

		{
			title: "Country",
			key: "country.name",
			width: 100
		},
		{
			title: "State Code",
			key: "state_code",
			width: 75
		},
		{
			title: "Actions",
			key: "actions",
			width: 25,
			render: (row: any) => (
				<div class="grid grid-cols-2 gap-x-2">
					<div onClick={() => edit(row.id)}>
						<NIcon size="22" class={"cursor-pointer hover:scale-125 transition duration-400 ease-in-out"}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<g fill="none" fill-rule="evenodd">
									<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
									<path
										fill="#1e51a4"
										d="m14.535 12.225l4.242 4.243l-4.243 4.243a1 1 0 0 1-.707.293H11a1 1 0 0 1-1-1v-2.829a1 1 0 0 1 .293-.707zM17 2a2 2 0 0 1 1.995 1.85L19 4v4.02a4.996 4.996 0 0 0-4.27 1.192l-.196.185l-5.656 5.657a3 3 0 0 0-.872 1.923l-.007.198v2.829a3 3 0 0 0 .11.804l.06.192H5a2 2 0 0 1-1.995-1.85L3 19V4a2 2 0 0 1 1.85-1.995L5 2zm3.191 8.811a3 3 0 0 1 0 4.243L15.95 10.81a3 3 0 0 1 4.242 0ZM11 6H7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2"
									/>
								</g>
							</svg>
						</NIcon>
					</div>
					<div onClick={() => removeItem(row.id)}>
						<NIcon size="24" class={"cursor-pointer hover:scale-125 transition duration-400 ease-in-out"}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									fill="#d82f2f"
									d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
								/>
							</svg>
						</NIcon>
					</div>
				</div>
			)
		}
	]
}

const columns = createColumns({
	edit: (id: number) => {
		visible.value = true
		isEditing.value = true
		const selectedCountry = states.value.find((country: any) => country.id === id)
		if (selectedCountry) {
			editId.value = selectedCountry.id
			stateInfo.name = selectedCountry.name
			stateInfo.currency = selectedCountry.currency
			stateInfo.state_code = selectedCountry.state_code
			stateInfo.latitude = selectedCountry.latitude
			stateInfo.longitude = selectedCountry.longitude
			stateInfo.timezone = selectedCountry.timezone
			stateInfo.description = selectedCountry.description
			stateInfo.country_id = selectedCountry.country.id
		}

		console.log("Edit", id)
	},
	removeItem: (id: number) => {
		dialog.warning({
			title: "Confirm",
			content: () => (
				<div>
					<p class="text-red-600 mb-3">Are you sure you want to delete this state?</p>
					<NInput v-model:value={deleteConfirmation.value} placeholder="Type 'delete' to confirm" />
				</div>
			),
			positiveText: "Confirm",
			negativeText: "Cancel",

			onPositiveClick: () => {
				if (deleteConfirmation.value === "delete") {
					deleteState(id)
					message.success("Sure")
					deleteConfirmation.value = null
				} else {
					message.error("Please verify that you want to Delete")
					return false
				}
			},
			onNegativeClick: () => {
				message.error("Not Sure")
				deleteConfirmation.value = null
			}
		})
	}
})

function close() {
	//reset stateInfo
	editId.value = null
	stateInfo.name = ""
	stateInfo.currency = ""
	stateInfo.state_code = ""
	stateInfo.latitude = ""
	stateInfo.longitude = ""
	stateInfo.timezone = ""
	stateInfo.description = ""
	stateInfo.country_id = null as any
	visible.value = false
	isEditing.value = false
}

const setCountry = (value: any, option: SelectOption) => {
	stateInfo.country_id = option.id
}
const rules: FormRules = {
	name: {
		required: true,
		message: "State Name is required",
		trigger: ["input", "blur"]
	},
	country: {
		required: true,
		validator(rule, value) {
			return !!value // Ensure both object and ID exist
		},
		message: "Country is required",
		trigger: ["input", "blur"]
	}
}

async function submitForm() {
	if (!stateInfo.name) {
		message.error("Please Enter the State Name")
		return false
	}

	if (!stateInfo.country_id) {
		message.error("Please Select Country")
		return false
	}

	if (isEditing.value) {
		updateState(editId.value, stateInfo, close)
	} else {
		createState(stateInfo, close)
	}
}

watch(selectedCountry, async () => {
	page.value = 1
	await fetchStateByCountryId(selectedCountry, page, pageSize)
})
watch(page, async () => {
	await fetchStateByCountryId(selectedCountry, page, pageSize)
})
watch(pageSize, async () => {
	page.value = 1
	await fetchStateByCountryId(selectedCountry, page, pageSize)
})

onMounted(async () => {
	await fetchStateByCountryId(selectedCountry)
	await fetchAllCountry()
})

onUnmounted(() => {
	$reset()
})
</script>
<template>
	<div>
		<Model :show="visible" @close="close()">
			<h5 class="p-text-secondary block mb-5" v-if="isEditing">Update State information.</h5>
			<h5 class="p-text-secondary block mb-5" v-else>Add New State.</h5>
			<n-form :model="stateInfo" label-placement="top" ref="formRef" :rules="rules">
				<n-form-item path="name" label="State Name" :required="true">
					<n-input v-model:value="stateInfo.name" class="flex-auto" autocomplete="off" required />
				</n-form-item>

				<div class="grid grid-cols-2 gap-x-2">
					<n-form-item path="country" label="Country" :required="true">
						<n-select
							v-model:value="stateInfo.country_id"
							label-field="name"
							value-field="id"
							filterable
							placeholder="Please select a country"
							:options="countries"
							@update:value="setCountry"
							:disabled="loading"
						/>
					</n-form-item>

					<n-form-item label="State Code">
						<n-input v-model:value="stateInfo.state_code" class="flex-auto" autocomplete="off" />
					</n-form-item>
				</div>

				<div class="grid grid-cols-2 gap-x-2">
					<n-form-item label="Latitude">
						<n-input v-model:value="stateInfo.latitude" class="flex-auto" autocomplete="off" />
					</n-form-item>

					<n-form-item label="Longitude">
						<n-input v-model:value="stateInfo.longitude" class="flex-auto" autocomplete="off" />
					</n-form-item>
				</div>

				<n-form-item label="Description">
					<n-input
						type="textarea"
						v-model:value="stateInfo.description"
						class="flex-auto"
						rows="5"
						autocomplete="off"
					/>
				</n-form-item>

				<n-space justify="end">
					<n-button @click="close">Cancel</n-button>
					<n-button type="primary" @click="submitForm">
						{{ isEditing ? "Update State" : "Create State" }}
					</n-button>
				</n-space>
			</n-form>
		</Model>
		<div class="flex justify-between items-center mb-3">
			<n-space vertical>
				<h1>States</h1>
			</n-space>

			<n-space vertical>
				<NButton type="primary" @click="visible = true">Add State</NButton>
			</n-space>
		</div>
		<div class="grid place-items-end mb-3">
			<n-space vertical>
				<n-select
					v-model:value="selectedCountry"
					label-field="name"
					value-field="id"
					filterable
					placeholder="Please select a country"
					:options="countries"
					bordered
					clearable
					:disabled="loading"
				/>
			</n-space>
		</div>
		<MainPanel>
			<n-data-table :columns="columns" :data="states" :loading="loading" bordered :single-line="false" />
			<div class="flex justify-between items-center mt-4">
				<p>
					Total Item is -
					<span class="font-bold text-[#1e51a4]">{{ itemCount }}</span>
				</p>

				<n-pagination
					v-model:page="page"
					v-model:page-size="pageSize"
					:page-count="pageCount"
					size="medium"
					show-size-picker
					:page-sizes="[10, 20, 30, 40]"
					:disabled="loading"
				></n-pagination>
			</div>
		</MainPanel>
	</div>
</template>
