<script setup lang="tsx">
import { reactive, ref, onMounted, watch, onUnmounted } from "vue"
import {
	NInput,
	NButton,
	useMessage,
	NDataTable,
	useDialog,
	NSpace,
	NPagination,
	type SelectOption,
	NCard,
	NIcon,
	NUpload,
	NSelect
} from "naive-ui"

import axios from "@/utils/axios"
import Model from "@/app-layouts/common/Model.vue"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import { useMasterStore } from "@/stores/master"
import { storeToRefs } from "pinia"
const isEditing = ref(false)
const dialog = useDialog()
const message = useMessage()
const visible = ref(false)
const editId = ref<any>(null)
const deleteConfirmation = ref<string | null>(null)
const store = useMasterStore()
const country = ref<number>(137)
const selectedState = ref(null)

const file = ref<any>(null)

const { places, page, pageCount, pageSize, countries, states, cities, placeCategory, loading, from } =
	storeToRefs(store)

const {
	fetchPlaces,
	updatePlace,
	fetchPlaceAllcategory,
	fetchAllCountry,
	fetchAllStateOfCountry,
	cityByState,
	createPlace,
	deletePlace,
	$reset,
	abortAPI
} = store

const placeInfo = reactive({
	title: "",
	address: "",
	latitude: "",
	longitude: "",
	description: "",
	contact_no: "",
	cities: [] as number[] | any[],
	categories: [] as number[] | any[],
	featured_image: null as any
})

const controller = new AbortController()

const createColumns = ({ edit, removeItem }: { edit: (id: number) => void; removeItem: (id: number) => void }) => {
	return [
		{
			title: "#",
			key: "key",
			width: 50,
			render: (_: any, index: number) => {
				return `${index + from.value}`
			}
		},
		{
			title: "Name",
			key: "title",
			width: 200
		},
		{
			title: "Description",
			key: "description",
			width: 150,
			render: (row: any) => (
				<div class="truncate">
					{row.description.length > 90 ? row.description.substring(0, 80) : row.description}
				</div>
			)
		},
		{
			title: "Address",
			key: "address",
			width: 200
		},

		{
			title: "Actions",
			key: "actions",
			width: 50,
			render: (row: any) => (
				<div class="flex justify-between gap-x-2">
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
		openModel()
		isEditing.value = true
		const selectedCountry = places.value.find((place: any) => place.id === id)
		if (selectedCountry) {
			editId.value = selectedCountry.id
			placeInfo.title = selectedCountry.title
			placeInfo.address = selectedCountry.address

			placeInfo.latitude = selectedCountry.latitude
			placeInfo.longitude = selectedCountry.longitude

			placeInfo.description = selectedCountry.description
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
					deletePlace(id)
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

async function submitForm() {
	if (!placeInfo.title) {
		message.error(`Please fill in the Place Name.`)
		return // Stop submission if a field is empty
	}
	if (!placeInfo.cities.length) {
		message.error(`Please Select the City.`)
		return // Stop submission if a field is empty
	}

	if (isEditing.value) {
		updatePlace(editId.value, placeInfo, close)
	} else {
		createPlace(placeInfo, close)
	}
}

watch(
	() => page.value,
	async () => {
		await fetchPlaces()
	}
)
watch(
	() => pageSize.value,
	async () => {
		page.value = 1
		await fetchPlaces()
	}
)

watch(country, async () => {
	await fetchAllStateOfCountry(country)
})

watch(
	() => selectedState.value,
	async () => {
		await cityByState(selectedState)
	},
	{
		deep: true
	}
)

async function openModel() {
	;(visible.value = true), await fetchAllCountry()
	console.log(country.value)
	await fetchAllStateOfCountry(country)
	await fetchPlaceAllcategory()
}

const handleUpload = async (options: any) => {
	if (placeInfo.featured_image) {
		message.error("You can only upload one image. Please remove existing image first.")
		return
	}
	if (options.file.file?.type.split("/")[0] !== "image") {
		message.error("File must be an image")
		return
	}
	loading.value = true
	try {
		const formData = new FormData()
		formData.append("featured_image", options.file.file)

		const response = await axios.post("/upload-place-image", formData, {
			headers: { "Content-Type": "multipart/form-data" }
		})

		if (response.status === 200) {
			// Check if response.data.url is defined
			if (response.data.data) {
				placeInfo.featured_image = response.data.data.url
			} else {
				console.error("URL not found in response:", response.data)
				message.error("An error occurred during upload. URL not found in response.")
			}
		} else {
			message.error("Upload failed. Please try again.")
		}
	} catch (error) {
		console.error("Error uploading file:", error)
		message.error("An error occurred during upload.")
	} finally {
		loading.value = false
	}
}

const removeImage = () => {
	placeInfo.featured_image = null
	file.value = null
}

function close() {
	//reset placeInfo
	editId.value = null
	placeInfo.title = ""
	placeInfo.address = ""
	placeInfo.latitude = ""
	placeInfo.longitude = ""
	placeInfo.description = ""
    placeInfo.featured_image = ""
	country.value = 137
	isEditing.value = false
	visible.value = false
}

onMounted(async () => {
	await fetchPlaces()
})

onUnmounted(() => {
	console.log("Unmounted")
	abortAPI
	$reset()
})
</script>
<template>
	<div>
		<Model :show="visible" @close="close()" :loading="loading">
			<h5 class="p-text-secondary block mb-5" v-if="isEditing">Update Place information.</h5>
			<h5 class="p-text-secondary block mb-5" v-else>Add New Place.</h5>
			<div class="grid mb-3">
				<label for="place" class="font-semibold w-6rem">Place Name</label>
				<NInput id="place" v-model:value="placeInfo.title" class="flex-auto" autocomplete="off" />
			</div>

			<div class="grid mb-3">
				<label for="contact_no" class="font-semibold w-6rem">Contact Number</label>
				<NInput
					id="contact_no"
					v-model:value="placeInfo.contact_no"
					placeholder="Contact Number"
					class="flex-auto"
					autocomplete="off"
				/>
                </div>
				<div class="grid mb-3">
					<label for="featured_image" class="font-semibold w-6rem">Featured Image</label>
					<n-upload
						v-if="!placeInfo.featured_image"
						label="Featured Image"
						:custom-request="handleUpload"
						@change="file = $event.file.file"
						:max="1"
					>
						<n-button
							size="tiny"
							dashed
							:class="[
								'bg-black',
								'text-white',
								'hover:bg-gray-200 !important',
								'hover:text-gray-800 !important'
							]"
						>
							Choose File
						</n-button>
						<template #loading>
							<div>Uploading...</div>
						</template>
					</n-upload>
					<div v-else class="relative">
						<img
							:src="`${placeInfo.featured_image}`"
							alt="Hotel Image"
							class="h-32 w-full object-cover rounded-lg"
						/>
						<button
							@click="removeImage"
							class="absolute top-2 right-2 text-red-500 rounded-full hover:scale-110 transition-all duration-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 peer"
								fill="	#FF0000"
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
					</div>
				
			</div>

			<div class="grid mb-3">
				<label for="timezone" class="font-semibold w-6rem">Address</label>
				<NInput id="timezone" v-model:value="placeInfo.address" class="flex-auto" autocomplete="off" />
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="Latitude" class="font-semibold w-6rem">Latitude</label>
					<NInput
						id="Latitude"
						v-model:value="placeInfo.latitude"
						plasceholder="Latitude"
						class="flex-auto"
						autocomplete="off"
					/>
				</div>
				<div class="grid mb-3">
					<label for="longitude" class="font-semibold w-6rem">Longitude</label>
					<NInput
						id="longitude"
						v-model:value="placeInfo.longitude"
						placeholder="Longitude"
						class="flex-auto"
						autocomplete="off"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="country" class="font-semibold w-6rem">Country</label>
					<NSelect
						id="country"
						v-model:value="country"
						label-field="name"
						value-field="id"
						:options="countries"
						flterable
						autocomplete="off"
					/>
				</div>

				<div class="grid mb-3">
					<label for="Latitude" class="font-semibold w-6rem">State</label>
					<NSelect
						id="city"
						v-model:value="selectedState"
						label-field="name"
						value-field="id"
						:options="states"
						filterable
						autocomplete="off"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="city" class="font-semibold w-6rem">City</label>
					<NSelect
						id="city"
						v-model:value="placeInfo.cities"
						label-field="name"
						value-field="id"
						:options="cities"
						filterable
						multiple
						autocomplete="off"
					/>
				</div>
				<div class="grid mb-3">
					<label for="city" class="font-semibold w-6rem">Category</label>
					<NSelect
						id="city"
						v-model:value="placeInfo.categories"
						label-field="title"
						value-field="id"
						:options="placeCategory"
						filterable
						multiple
						autocomplete="off"
					/>
				</div>
			</div>

			<div class="grid mb-3">
				<label for="description" class="font-semibold w-6rem">Description</label>
				<NInput
					type="textarea"
					id="description"
					v-model:value="placeInfo.description"
					class="flex-auto"
					rows="5"
					autocomplete="off"
				/>
			</div>

			<div class="w-full flex justify-end gap-2">
				<NButton @click="close">Cancel</NButton>
				<NButton type="primary" @click="submitForm" :disabled="loading">
					{{ isEditing ? "Update Place" : "Create Place" }}
				</NButton>
			</div>
		</Model>

		<div class="flex justify-between items-center mb-3">
			<h1>Places</h1>
			<NButton type="primary" @click="openModel">Add Place</NButton>
		</div>
		<MainPanel>
			<n-data-table :columns="columns" :data="places" :loading="loading" />
			<div class="flex justify-end mt-4">
				<n-space vertical>
					<n-pagination
						v-model:page="page"
						v-model:page-size="pageSize"
						:page-count="pageCount"
						size="medium"
						show-size-picker
						:page-sizes="[10, 20, 30, 40]"
						:disabled="loading"
					/>
				</n-space>
			</div>
		</MainPanel>
	</div>
</template>
