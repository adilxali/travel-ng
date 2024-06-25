<script setup lang="tsx">
import { reactive, ref, onMounted, watch, onUnmounted } from "vue"
import {
	NIcon,
	NInput,
	NButton,
	useMessage,
	NDataTable,
	useDialog,
	NSelect,
	NPagination,
	NTimePicker,
	NCard,
	NUpload
} from "naive-ui"
import Model from "@/app-layouts/common/Model.vue"
import axios from "@/utils/axios"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import { useMasterStore } from "@/stores/master"
const deleteConfirmation = ref<string | null>(null)
import { storeToRefs } from "pinia"
const isEditing = ref(false)
const dialog = useDialog()
const message = useMessage()
const visible = ref(false)
const editId = ref<any>(null)
const store = useMasterStore()

const selectedState = ref(null)

const file = ref<any>(null)

const country = ref<number>(137)

const { hotels, countries, states, cities, page, pageCount, pageSize, itemCount, from, loading } = storeToRefs(store)

const {
	fetchHotels,
	fetchAllCountry,
	fetchAllStateOfCountry,
	cityByState,
	cityById,
	createHotel,
	updateHotel,
	deleteHotel,
	$reset,
	abortAPI
} = store

const hotelInfo = reactive({
	title: "",
	description: "",
	contact_no: "",
	accommodation_address: "",
	featured_image: null as any,
	website_address: "",

	check_in_time: null as any,
	check_out_time: null as any,
	latitude: "",
	longitude: "",
	city_id: null as number | null | undefined
})

const controller = new AbortController()

const createColumns = ({ edit, removeItem }: { edit: (id: number) => void; removeItem: (id: number) => void }) => {
	return [
		{
			title: "#",
			key: "key",
			width: 20,
			render: (_: any, index: number) => {
				return `${index + from.value}`
			}
		},
		{
			title: "Name",
			key: "title",
			width: 150
		},
		{
			title: "Description",
			key: "description",
			width: 210,
			render: (row: any) => (
				<div class=" ">
					{row.description.length > 80 ? row.description.substring(0, 80) : row.description}...
				</div>
			)
		},
		{
			title: "Contact No.",
			key: "contact_no",
			width: 100
		},
		{
			title: "Address",
			key: "accommodation_address",
			width: 140
		},
		{
			title: "Actions",
			key: "actions",
			width: 10,
			render: (row: any) => (
				<div class="flex justify-between">
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
	edit: async (id: number) => {
		openModel()
		isEditing.value = true
		const selectedHotel = hotels.value.find((hotel: any) => hotel.id === id)
		if (selectedHotel) {
			if (selectedHotel.city.id) {
				await cityById(selectedHotel.city.id)
			}
			editId.value = selectedHotel.id
			hotelInfo.title = selectedHotel.title // Assuming title corresponds to name
			hotelInfo.contact_no = selectedHotel.contact_no // Assuming contact_no exists
			hotelInfo.accommodation_address = selectedHotel.accommodation_address // Assuming address exists
			hotelInfo.featured_image = selectedHotel.featured_image // Assuming featured_image exists
			hotelInfo.check_in_time = selectedHotel.check_in_time // Assuming check_in_time exists
			hotelInfo.check_out_time = selectedHotel.check_out_time // Assuming check_out_time exists
			hotelInfo.latitude = selectedHotel.latitude
			hotelInfo.longitude = selectedHotel.longitude
			hotelInfo.description = selectedHotel.description
			hotelInfo.city_id = selectedHotel.city.id
			console.log("city id", selectedHotel.city.id)
		}

		console.log("Edit", id)
	},
	removeItem: (id: number) => {
		dialog.warning({
			title: "Confirm",
			content: () => (
				<div>
					<p class="text-red-600 mb-3">Are you sure you want to delete this country?</p>
					<NInput v-model:value={deleteConfirmation.value} placeholder="Type 'delete' to confirm" />
				</div>
			),
			positiveText: "Confirm",
			negativeText: "Cancel",
			onPositiveClick: () => {
				if (deleteConfirmation.value === "delete") {
					deleteHotel(id)
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

async function openModel() {
	;(visible.value = true), await fetchAllCountry()
	await fetchAllStateOfCountry(country)
}

function close() {
	//reset hotelInfo
	editId.value = null
	hotelInfo.title = ""
	hotelInfo.accommodation_address = ""
	hotelInfo.contact_no = ""
	hotelInfo.latitude = ""
	hotelInfo.longitude = ""
	hotelInfo.featured_image = ""
	hotelInfo.featured_image = ""
	hotelInfo.description = ""
	hotelInfo.check_in_time = null
	hotelInfo.check_out_time = null
	hotelInfo.city_id = null
	country.value = 137
	visible.value = false
	isEditing.value = false
}

const handleUpload = async (options: any) => {
	if (hotelInfo.featured_image) {
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

		const response = await axios.post("/upload-accommodation-image", formData, {
			headers: { "Content-Type": "multipart/form-data" }
		})

		if (response.status === 200) {
			// Check if response.data.url is defined
			if (response.data.data) {
				hotelInfo.featured_image = response.data.data.url
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
	hotelInfo.featured_image = null
	file.value = null
}

async function submitForm() {
	if (!hotelInfo.title) {
		message.error(`Please fill in the Hotel Name.`)
		return // Stop submission if a field is empty
	}

	if (!hotelInfo.city_id) {
		message.error(`Please Select the Hotel City.`)
		return
	}
	if (isEditing.value) {
		updateHotel(editId.value, hotelInfo, close)
	} else {
		createHotel(hotelInfo, close)
	}
}

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

watch(page, async () => {
	await fetchHotels()
})

watch(pageSize, async () => {
	page.value = 1
	await fetchHotels()
})

onMounted(async () => {
	await fetchHotels()
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
			
			<h5 class="p-text-secondary block mb-5" v-if="isEditing">Update Hotel information.</h5>
			<h5 class="p-text-secondary block mb-5" v-else>Add New Hotel.</h5>
			<div class="grid mb-3">
				<label for="hotel" class="font-semibold w-6rem">Hotel Name</label>
				<NInput
					id="hotel"
					v-model:value="hotelInfo.title"
					class="flex-auto"
					placeholder="Hotel Name"
					autocomplete="off"
				/>
			</div>

			<div class="grid mb-3">
				<div>
					<n-upload
						v-if="!hotelInfo.featured_image"
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
							:src="`${hotelInfo.featured_image}`"
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
			</div>

			<div class="grid mb-3">
				<label for="address" class="font-semibold w-6rem">Address</label>
				<NInput
					id="address"
					type="textarea"
					v-model:value="hotelInfo.accommodation_address"
					placeholder="Address"
					class="flex-auto"
					autocomplete="off"
					rows="4"
				/>
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
					<label for="state" class="font-semibold w-6rem">State</label>
					<NSelect
						id="state"
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
						v-model:value="hotelInfo.city_id"
						label-field="name"
						value-field="id"
						:options="cities"
						filterable
						autocomplete="off"
					/>
				</div>
				<div class="grid mb-3">
					<label for="contact_no" class="font-semibold w-6rem">Contact No</label>
					<NInput
						id="contact_no"
						v-model:value="hotelInfo.contact_no"
						class="flex-auto"
						placeholder="Contact No"
						autocomplete="off"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="Latitude" class="font-semibold w-6rem">Latitude</label>
					<NInput
						id="Latitude"
						v-model:value="hotelInfo.latitude"
						class="flex-auto"
						placeholder="Latitude"
						autocomplete="off"
					/>
				</div>
				<div class="grid mb-3">
					<label for="longitude" class="font-semibold w-6rem">Longitude</label>
					<NInput
						id="longitude"
						v-model:value="hotelInfo.longitude"
						class="flex-auto"
						placeholder="Longitude"
						autocomplete="off"
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="check_in_time" class="font-semibold w-6rem">Check In Time</label>
					
					<n-time-picker
						v-model:formatted-value="hotelInfo.check_in_time"
						value-format="HH:mm:ss"
						style="width: 100%"
						time-zone="Asia/Kolkata"
                        class="flex-auto"
						placeholder="Check In Time"
						:actions="['now', 'clear']"
					/>
				</div>
				<div class="grid mb-3">
					<label for="check_out_time" class="font-semibold w-6rem">Check out Time</label>
				
                    <n-time-picker
						v-model:formatted-value="hotelInfo.check_out_time"
						value-format="HH:mm:ss"
						style="width: 100%"
						time-zone="Asia/Kolkata"
                        class="flex-auto"
						placeholder="Check Out Time"
						:actions="['now', 'clear']"
					/>
				</div>
			</div>

			<div class="grid mb-3">
				<label for="description" class="font-semibold w-6rem">Description</label>
				<NInput
					type="textarea"
					placeholder="Description"
					id="description"
					v-model:value="hotelInfo.description"
					class="flex-auto"
					rows="4"
					autocomplete="off"
				/>
			</div>

			<div class="w-full flex justify-end gap-2">
				<NButton @click="close">Cancel</NButton>
				<NButton type="primary" @click="submitForm" :disabled="loading">
					{{ isEditing ? "Update Country" : "Create Country" }}
				</NButton>
			</div>
		</Model>
		<div class="flex justify-between items-center mb-3">
			<h1>Accommodation</h1>
			<NButton type="primary" @click="openModel">Add Hotel</NButton>
		</div>
		<MainPanel>
			<n-data-table :columns="columns" :data="hotels" :loading="loading" :bordered="true" :single-line="false" />
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
