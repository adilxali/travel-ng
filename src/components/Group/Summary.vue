<script setup lang="ts">
import { ref, computed } from "vue"
import axios from "@/utils/tenants"
import { useTenantStore } from "@/stores/grouplead"
import { storeToRefs } from "pinia"
import {
	useMessage,
	NButton,
	NUpload,
	NDatePicker,
	NInput,
	NInputNumber,
	NSelect,
	type SelectOption
} from "naive-ui"
import Model from "@/app-layouts/common/Model.vue"
import moment from "moment"
const { fetchAllCities } = useTenantStore()
const { cities } = storeToRefs(useTenantStore())

const props = defineProps<{
	groupData: any
}>()

const file = ref<any>(null)

const message = useMessage()

const selectedLocation = ref({
	id: null as any,
	name: "" as any
})

const duration = ref<number>(0)

const loading = ref<boolean>(false)

const handleUpdate = (option: SelectOption) => {
	selectedLocation.value.id = option.id
	selectedLocation.value.name = option.name
}

const handleUpdateValue = (value: any, option: SelectOption) => {
	; (selectedLocation.value.id = option.id), (selectedLocation.value.name = option.name)
}


function addLocation() {
	if (!selectedLocation.value.name || !selectedLocation.value.id) {
		message.error("Please Select the Location")
		return false
	}
	if (!duration.value || duration.value === 0) {
		message.error("Please Enter the  Duration")
		return false
	}

	const initialTravelDate = moment(props.groupData.tour_date, "DD-MM-YYYY") // Parse once

	let previousEndDate = initialTravelDate.clone();


	if (selectedLocation.value && duration.value) {
		props.groupData.locations.push({
			city_id: selectedLocation.value.id, // Generate unique ID
			name: selectedLocation.value.name,
			date_to: null,
			date_from: null,
			total_night: duration.value,
			hotel:{},
			day_plans: Array.from({ length: duration.value + 1 }, (_, i) => ({
				day: i + 1,
				breakfast: true,
				lunch: false,
				dinner: true,
				places: [] as any[]
			}))
		})


		//if tour date is not set 

		props.groupData.locations.forEach((location: any) => {

			let duration = location.total_night || 0
			let startDate = previousEndDate
			let endDate = startDate.clone().add(duration, 'days')
			previousEndDate = endDate.clone()

			location.date_from = startDate.format("YYYY-MM-DD"),
				location.date_to = endDate.format("YYYY-MM-DD")

		})



		selectedLocation.value.id = null
		selectedLocation.value.name = ""
		duration.value = 1
		alert("Cleared")
		visible.value = false
	}
}

const handleSearch = (query: string) => {
	if (!query.length) {
		cities.value = []
		return
	}
	let timeoutId: NodeJS.Timeout | null = null
	// Clear any existing timeout
	if (timeoutId) {
		clearTimeout(timeoutId)
	}

	// Set a new timeout
	timeoutId = setTimeout(async () => {
		loading.value = true
		if (query.length > 3) {

			await fetchAllCities(query)

		}
		loading.value = false
	}, 1500) // Adjust delay as needed
}

const visible = ref<boolean>(false)

const deleteLocation = (index: number) => {
	props.groupData.locations.splice(index, 1)
}

const totalNights = computed(() => {
  const locations = props.groupData.locations;

  if (!locations.length) {
    return 0;
  }

  const totalNights = locations.reduce((total:any, location:any) => total + location.total_night, 0);

  // Directly update props within the computed (if necessary)
  props.groupData.total_nights = totalNights;
  props.groupData.total_days = totalNights + 1; 

  return totalNights;
});

const updateData = () => {
    let initialTravelDate = moment(props.groupData.tour_date, "YYYY-MM-DD");
    let previousEndDate = initialTravelDate.clone();

    props.groupData.locations.forEach((location: any) => {
        let duration = location.total_night || 0;
        let startDate = previousEndDate;
        let endDate = startDate.clone().add(duration, 'days');
        previousEndDate = endDate.clone();

        location.date_from = startDate.format("YYYY-MM-DD");
        location.date_to = endDate.format("YYYY-MM-DD");

        // Update day_plans, preserving existing places
        location.day_plans = location.day_plans.slice(0, duration + 1).map((plan:any, i:any) => ({
            ...plan, 
            day: i + 1, 
        }));

        // Add new empty days if needed
        if (duration + 1 > location.day_plans.length) {
            location.day_plans.push(
                ...Array.from({ length: (duration + 1) - location.day_plans.length }, (_, i) => ({
                    day: location.day_plans.length + i + 1,
                    breakfast: true,
                    lunch: false,
                    dinner: true,
                    places: [] as any[]
                }))
            );
        }
    });
};

const updateDate = (value: any) => {
	props.groupData.tour_date = value

	updateData()
}

const updateNight = () => {
	updateData()
}
const uploadLogo = async (options: any) => {
	if (props.groupData.group_logo) {
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
				props.groupData.group_logo = response.data.data.url
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
	props.groupData.group_logo = null
	file.value = null
}

</script>

<template>
	<div>
		<Model :show="visible" @close="visible = false">
			<div class="grid grid-cols-5 gap-x-4">
				<div class="col-span-3 w-full">
					<h5>Location</h5>
				</div>
				<div class="col-span-1">
					<h5>Duration</h5>
				</div>
			</div>
			<div class="grid grid-cols-5 gap-x-4">
				<div class="col-span-3 w-full">
					<NSelect v-model:value="selectedLocation.name" placeholder="Please select a Location"
						value-field="name" label-field="name" :options="cities" :loading="loading" label-value="name"
						clearable filterable remote @search="handleSearch" @update:value="handleUpdateValue" />
				</div>
				<div class="col-span-1">
					<NInputNumber v-model:value="duration" placeholder="Enter Duration" :show-button="false"
						class="w-full" />
				</div>
				<div class="">
					<n-button @click="addLocation" type="info" dashed>
						<template #icon>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
								<path fill="#1e51a4" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
							</svg>
						</template>
						Add Location
					</n-button>
				</div>
			</div>
		</Model>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<div class="mt-3">
					<h5>Tour Date</h5>
					<NDatePicker v-model:formatted-value="groupData.tour_date" value-format="yyyy-MM-dd" type="date"
						@update:formatted-value="(value: any) => updateDate(value)" />
				</div>
				<div class="mt-3">
					<n-button @click="visible = true" type="info" dashed>
						<template #icon>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
								<path fill="#1e51a4" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
							</svg>
						</template>
						Add Location
					</n-button>
				</div>
				<div class="mt-3">
					<template v-for="(location, index) in groupData.locations" :key="location.id">
						<h5 class="mt-2">Location {{ index + 1 }}</h5>
						<div class="grid grid-cols-6 justify-between gap-x-4">
							<NInput v-model:value="location.name" class="col-span-4" disabled />
							<NInputNumber v-model:value="location.total_night" class="col-span-1" @update:value="() => updateNight()"
								:show-button="false" />
							<n-button strong secondary type="error" @click="deleteLocation(index)">
								<template #icon>
									<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
										<path fill="#d82f2f"
											d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
									</svg>
								</template>
							</n-button>
						</div>
					</template>
				</div>
				<div class="mt-3">
					<h5>Duration</h5>
					<div class="grid grid-cols-2 gap-x-4">
						<div class="grid grid-cols-2 gap-x-2 w-full">
							<NInput placeholder="Nights" class="placeholder:italic placeholder:text-slate-400"
								disabled />
							<NInputNumber :value="totalNights" disabled :show-button="false" />
						</div>
						<div class="grid grid-cols-2 gap-x-2 w-full">
							<NInput placeholder="Days" disabled />
							<NInputNumber v-if="totalNights <= 0" :value="totalNights" disabled :show-button="false" />
							<NInputNumber v-else :value="totalNights + 1" disabled :show-button="false" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="mt-3">
					<h5>Group Name</h5>
					<NInput v-model:value="groupData.group_name" placeholder="Group Name" />
				</div>
				<div class="mt-3">
					<n-upload v-if="!groupData.group_logo" label="Logo" class="mt-2" :custom-request="uploadLogo" @change="file = $event.file.file" :max="1">
						<n-button type="info" dashed>
							<template #icon>
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
									<path fill="#1e51a4" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
								</svg>
							</template>
							Add Logo
						</n-button>
					</n-upload>
					<div v-else class="relative">
						<img :src="`${groupData.group_logo}`" alt="Group Logo"
							class="h-32 w-full aspect-square object-cover rounded-lg border" />
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
		</div>
	</div>
</template>
<style scoped>
.n-input__input-el {
	@apply placeholder:italic placeholder:text-slate-400;
}
</style>
