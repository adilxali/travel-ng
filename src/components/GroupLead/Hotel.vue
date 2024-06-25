<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue"
import { useQuoteStore } from "@/stores/quote";
import { storeToRefs } from "pinia";
import moment from "moment";
import axios from "@/utils/tenants";
import { NSelect, NInput, NTimePicker, NButton, type SelectOption, type SelectGroupOption, useMessage, NUpload, c } from "naive-ui"
import Model from "@/app-layouts/common/Model.vue"
const props = defineProps(["locations", "hotels"])

const locationIds = ref(Object.keys(props.hotels)) // Array of location IDs
const currentLocationIndex = ref(0)
const visible = ref<boolean>(false)
const file = ref<any>(null)

const store = useQuoteStore()

const { createHotel, fetchHotels } = store

const hotelInfo = reactive<any>({
	title: "",
	description: "",
	contact_no: "",
	accommodation_address: "",
	featured_image: null as any | string,
	website_address: "",

	check_in_time: null as any,
	check_out_time: null as any,
	latitude: "",
	longitude: "",
	city_id: null as number | null | undefined
})

const loading = ref<boolean>(false)

const message = useMessage()

const currentLocationId = computed(() => locationIds.value[currentLocationIndex.value])
const currentHotels = computed(() => props.hotels[currentLocationId.value])

// Methods for navigation
const goToPreviousLocation = () => {
	currentLocationIndex.value--
}

const goToNextLocation = () => {
	currentLocationIndex.value++
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

function close() {
	//reset hotelInfo
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
	visible.value = false
}


async function submitForm(id: any) {
	if (!hotelInfo.title) {
		message.error(`Please fill in the Hotel Name.`)
		return // Stop submission if a field is empty
	}
	hotelInfo.city_id = id;


	await createHotel(hotelInfo, close)
	await fetchHotels(id)

	//reset hotelInfo



}

const removeImage = () => {
	hotelInfo.featured_image = null
	file.value = null
}

const meal_plan = ref<any[]>([{
	value: "MAP",
	label: "MAP(with BF & D)"
},
{
	value: "CP",
	label: "CP(with BF)"
},
{
	value: "AP",
	label: "AP(All Meal)"
},
{
	value: "EP",
	label: "EP(No Meal)"
}
])


let duration = props.locations[currentLocationIndex.value].total_night
let startDate = moment(props.locations[currentLocationIndex.value].date_from, "YYYY-MM-DD")
let endDate = moment(props.locations[currentLocationIndex.value].date_to, "YYYY-MM-DD")
const hotelData = ref<any>({
	accommodation_id: null as null | number,
	days: props.locations[currentLocationIndex.value].total_night,
	daynights: props.locations[currentLocationIndex.value].total_night + 1,
	date_from: startDate.format("YYYY-MM-DD"),
	date_to: endDate.format("YYYY-MM-DD"),
	room_type: "" as string,
	check_in_time: null as any,
	check_out_time: null as any,
	special_instructions: "" as string,
	mealplan: "" as string,
	voucher_number: "" as string,
	hotel_email: "" as string,
	hotel_amount: null as number | null,
	quantity: null as null | number,
	room_sharing: "" as string
})

const addHotel = () => {
	if (!props.locations[currentLocationIndex.value].hotels) {
		props.locations[currentLocationIndex.value].hotels = [] as any[]
	}
	props.locations[currentLocationIndex.value].hotels.push(hotelData.value);
	hotelData.value = {
		accommodation_id: null,
		days: props.locations[currentLocationIndex.value].total_night,
		daynights: props.locations[currentLocationIndex.value].total_night + 1,
		date_from: startDate.format("YYYY-MM-DD"),
		date_to: endDate.format("YYYY-MM-DD"),
		room_type: "",
		check_in_time: null,
		check_out_time: null,
		special_instructions: "",
		mealplan: "",
		voucher_number: "",
		hotel_email: "",
		hotel_amount: null,
		quantity: null,
		room_sharing: ""
	}
}

</script>

<template>
	<div class="ml-2">

		<Model :show="visible" @close="close()">
			<h5 class="text-2xl p-text-secondary block mb-5 border-b pb-2">+ Add Hotel {{
				locations[currentLocationIndex].city_id }}</h5>
			<div class="grid mb-3">
				<label for="hotel" class="font-semibold w-6rem">Hotel Name</label>
				<NInput id="hotel" v-model:value="hotelInfo.title" class="flex-auto" placeholder="Hotel Name"
					autocomplete="off" />
			</div>

			<div class="grid mb-3">
				<div>
					<n-upload v-if="!hotelInfo.featured_image" label="Featured Image" :custom-request="handleUpload"
						@change="file = $event.file.file" :max="1">
						<n-button size="tiny" dashed :class="[
							'bg-black',
							'text-white',
							'hover:bg-gray-200 !important',
							'hover:text-gray-800 !important'
						]">
							Choose File
						</n-button>
						<template #loading>
							<div>Uploading...</div>
						</template>
					</n-upload>
					<div v-else class="relative">
						<img :src="`${hotelInfo.featured_image}`" alt="Hotel Image"
							class="h-32 w-full object-cover rounded-lg" />
						<button @click="removeImage"
							class="absolute top-2 right-2 text-red-500 rounded-full hover:scale-110 transition-all duration-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 peer" fill="	#FF0000"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class="grid mb-3">
				<label for="address" class="font-semibold w-6rem">Address</label>
				<NInput id="address" type="textarea" v-model:value="hotelInfo.accommodation_address"
					placeholder="Address" class="flex-auto" autocomplete="off" rows="4" />
			</div>

			<div>

				<div class="grid mb-3">
					<label for="contact_no" class="font-semibold w-6rem">Contact No</label>
					<NInput id="contact_no" v-model:value="hotelInfo.contact_no" class="flex-auto"
						placeholder="Contact No" autocomplete="off" />
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="Latitude" class="font-semibold w-6rem">Latitude</label>
					<NInput id="Latitude" v-model:value="hotelInfo.latitude" class="flex-auto" placeholder="Latitude"
						autocomplete="off" />
				</div>
				<div class="grid mb-3">
					<label for="longitude" class="font-semibold w-6rem">Longitude</label>
					<NInput id="longitude" v-model:value="hotelInfo.longitude" class="flex-auto" placeholder="Longitude"
						autocomplete="off" />
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-2">
				<div class="grid mb-3">
					<label for="check_in_time" class="font-semibold w-6rem">Check In Time</label>

					<n-time-picker v-model:formatted-value="hotelInfo.check_in_time" value-format="HH:mm:ss"
						style="width: 100%" time-zone="Asia/Kolkata" class="flex-auto" placeholder="Check In Time"
						:actions="['now', 'clear']" />
				</div>
				<div class="grid mb-3">
					<label for="check_out_time" class="font-semibold w-6rem">Check out Time</label>

					<n-time-picker v-model:formatted-value="hotelInfo.check_out_time" value-format="HH:mm:ss"
						style="width: 100%" time-zone="Asia/Kolkata" class="flex-auto" placeholder="Check Out Time"
						:actions="['now', 'clear']" />
				</div>
			</div>

			<div class="grid mb-3">
				<label for="description" class="font-semibold w-6rem">Description</label>
				<NInput type="textarea" placeholder="Description" id="description" v-model:value="hotelInfo.description"
					class="flex-auto" rows="4" autocomplete="off" />
			</div>

			<div class="w-full flex justify-end gap-2">
				<NButton @click="close()">Cancel</NButton>
				<NButton type="primary" @click="submitForm(locations[currentLocationIndex].city_id)">
					Add Activity
				</NButton>
			</div>
		</Model>



		<div class="flex items-center justify-between space-x-8 mb-4 mt-5">
			<div class="flex  space-x-8">
				<div class="flex space-x-2">
					<button v-for="(location, index) in locations" :key="location.id" class="rounded-full px-3 py-1"
						:class="currentLocationIndex === index ? 'bg-[#1e51a4] text-white' : 'bg-gray-200 text-gray-600'"
						@click="currentLocationIndex = index">
						{{ index + 1 }}
					</button>
				</div>

				<div class="flex space-x-2">
					<button class="rounded-md bg-[#e3e8f1] text-[#1E51A4] p-3"
						:class="currentLocationIndex === 0 ? ' cursor-not-allowed' : 'bg-gray-200 text-gray-600'"
						:disabled="currentLocationIndex === 0" @click="goToPreviousLocation">
						Previous
					</button>

					<div class="ml-auto flex items-center space-x-2 bg-[#e3e8f1] p-3 rounded-md">
						<span class="text-[#1E51A4]">{{ locations[currentLocationIndex].name }}</span>
						<span class="text-[#1E51A4]">|</span>
						<span class="text-[#1E51A4]">
							{{ locations[currentLocationIndex].date_from }} - {{ locations[currentLocationIndex].date_to
							}}
						</span>
					</div>
					<button class="rounded-md bg-[#e3e8f1] text-[#1E51A4] p-3"
						:disabled="currentLocationIndex === locations.length - 1"
						:class="currentLocationIndex === locations.length - 1 ? ' cursor-not-allowed' : ''"
						@click="goToNextLocation">
						Next
					</button>
				</div>
			</div>

			<NButton type="primary" @click="visible = true">+ Add New Hotel</NButton>
		</div>


		<div class="border border-gray-200 mb-3 p-5 rounded-md">
			<n-card>


				<div class="grid grid-cols-3 mt-4 gap-x-2">
					<n-select v-model:value="hotelData.accommodation_id" label-field="title" value-field="id"
						:options="currentHotels" placeholder="Select Hotel"
						:disabled="locations[currentLocationIndex]?.hotels?.length >= 2" />
					<div class="grid grid-cols-2 gap-x-2">
						<n-time-picker v-model:formatted-value="hotelData.check_in_time" format="hh:mm:ss" type="date"
							placeholder="Check in" :disabled="locations[currentLocationIndex]?.hotels?.length >= 2" />
						<n-time-picker v-model:formatted-value="hotelData.check_out_time" format="hh:mm:ss" type="date"
							placeholder="Check out" :disabled="locations[currentLocationIndex]?.hotels?.length > 2" />
					</div>
					<n-input v-model:value="hotelData.room_type" placeholder="Room Type"
						:disabled="locations[currentLocationIndex]?.hotels?.length > 2" />
				</div>
			</n-card>
			<div class="flex justify-end">
				<n-button type="primary" class="mt-4" @click="addHotel"
					:disabled="locations[currentLocationIndex]?.hotels?.length > 2">
					<n-icon size="30">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
						</svg>
					</n-icon>
					Add Hotel</n-button>
			</div>
		</div>

		<div class="mx-auto grid grid-cols-3 gap-x-10 gap-y-2">

			<div v-if="locations[currentLocationIndex].hotels">
				<div class="grid gap-x-4 gap-y-2" v-for="(htl, index) in locations[currentLocationIndex].hotels"
					:key="index">

					<div class="col-span-2 lg:col-span-1 overflow-hidden">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgw1QcpVM_ETgHLuSxL9GMVLXULvNq4ePDg&s"
							alt="Destination Image" class="w-full h-48 object-cover rounded-lg" />
					</div>
					<div class="bg-white p-4 rounded-lg shadow-md">
						<h3 class="text-lg font-semibold mb-2">Hotel</h3>
						<n-select v-model:value="htl.accommodation_id" label-field="title" value-field="id"
							:options="currentHotels" placeholder="Select Hotel" />

						<div class="grid grid-cols-2 gap-x-2 mt-2">
							<n-time-picker v-model:formatted-value="htl.check_in_time" format="hh:mm:ss" type="date"
								placeholder="Check in" />
							<n-time-picker v-model:formatted-value="htl.check_out_time" format="hh:mm:ss" type="date"
								placeholder="Check out" />
						</div>

						<n-input v-model:value="htl.room_sharing" placeholder="Room Type" class="mt-2" />
					</div>
				</div>
			</div>
			<div class="col-start-3">
				<div class="">
					<h3 class="text-lg font-semibold mb-2">Special Instructions</h3>
					<n-input v-model:value="locations[currentLocationIndex].special_instructions" type="textarea"
						placeholder="Please Select" :autosize="{ minRows: 3, maxRows: 5 }" />

					<h3 class="text-lg font-semibold mt-4 mb-2">Meal Plan</h3>
					<n-select v-model:value="locations[currentLocationIndex].meal_plan" placeholder="Meal Plan"
						:options="meal_plan" class="mt-2" />
				</div>
			</div>
		</div>

		<!-- <div class="mt-4 flex justify-end">
			<n-button type="primary">Day Plan ></n-button>
		</div> -->
	</div>
</template>
