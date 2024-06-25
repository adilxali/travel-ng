<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from '@/utils/tenants';
import { NButton, NUpload, NDatePicker, NInput, NIcon, NInputNumber, useMessage } from 'naive-ui';

const props = defineProps<{
    quoteData: any
}>();

const loading = ref(false)
const message = useMessage()

const file = ref<any>(null)

const handleUpload = async (options: any) => {
	if (props.quoteData?.banner) {
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
		formData.append("banner_image", options.file.file)

		const response = await axios.post("/upload-quote-banner-image", formData, {
			headers: { "Content-Type": "multipart/form-data" }
		})

		if (response.status === 200) {
			// Check if response.data.url is defined
			if (response.data.data) {
				props.quoteData.banner = response.data.data.url
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
	props.quoteData.banner = ''
	file.value = null
}


const totalNights = computed(() => {
    return props.quoteData?.queryDetail?.locations.reduce((total: any, location: any) => {
        return total + location.total_night;
    }, 0);
});

const addCost = () => {
    props.quoteData.quotation_amount.push({
        type: '',
        cost: ''
    });
};

const deleteCost = (index: number) => {
    props.quoteData.quotation_amount.splice(index, 1);
};

</script>

<template>

    <div class="grid grid-cols-2 gap-4" v-if="quoteData">
        <div>

            <div>
                <div class="grid grid-cols-3 gap-x-2">
                    <h5 class="mb-1">Type</h5>
                    <h5 class="mb-1">Cost</h5>
                </div>
                <div class="grid grid-cols-3 gap-x-2 gap-y-1">
                    <template v-for="(item, index) in quoteData?.quotation_amount" :key="index" class="mb-2">
                        <NInput v-model:value="item.type" placeholder="Type" />
                        <NInput v-model:value="item.cost" placeholder="Cost" />
                        <div class="w-3/4">
                            <NButton quaternary @click="deleteCost(index)" :disabled="quoteData?.quotation_amount.length === 1">
                                <n-icon size="30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M19 11H5v2h14z" />
                                    </svg>
                                </n-icon>
                            </NButton>
                            <NButton quaternary @click="addCost">
                                <n-icon size="30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
                                    </svg>
                                </n-icon>
                            </NButton>

                        </div>
                    </template>
                </div>
            </div>
            <div class="mt-3">
                <h5>Tour Date</h5>
                <NDatePicker v-model:formatted-value="quoteData.travel_date" value-format="yyyy-MM-dd"
                    class="max-w-md" disabled />
            </div>
            <template v-if="quoteData?.quote_type_id !== 4">
                <div class="mt-3">
                    <template v-for="(location, index) in quoteData?.queryDetail.locations" :key="location.id">
                        <h5 class="mt-2">Location {{ index + 1 }} </h5>
                        <div class="grid grid-cols-6 justify-between gap-x-8">
                            <NInput v-if="location.name" v-model:value="location.name" class="col-span-4" disabled />
                            <NInput v-else v-model:value="location.city_id.name" class="col-span-4" disabled />
                            <NInputNumber v-model:value="location.total_night" class="col-span-1" disabled
                                :show-button="false" />
                        </div>
                    </template>

                </div>
                <div class="mt-3 max-w-md">
                    <h5>Duration</h5>
                    <div class="grid grid-cols-2 gap-x-4">
                        <div class="grid grid-cols-2 gap-x-2">
                            <NInput placeholder="Nights" class="placeholder:italic placeholder:text-slate-400"
                                disabled />
                            <NInputNumber :value="totalNights" disabled :show-button="false" />
                        </div>
                        <div class="grid grid-cols-2 gap-x-2">
                            <NInput placeholder="Days" disabled />
                            <NInputNumber :value="totalNights + 1" disabled :show-button="false" />
                        </div>
                    </div>
                </div>
            </template>
            <div class="mt-3 " v-if="quoteData?.quote_type_id === 4">
                <template v-for="(location, index) in quoteData?.queryDetail.locations" :key="location.id">
                    <h5 class="mt-2">Location {{ index + 1 }} </h5>
                    <div class="grid grid-cols-5 justify-between gap-x-8">
                        <NInput v-model:value="location.name" class="col-span-4" disabled />
                    </div>
                </template>

            </div>
            <div class="mt-3 max-w-md">
                <div class="grid grid-cols-2 gap-x-4">
                    <div>
                        <h5>Company Name</h5>
                        <NInput :value="quoteData?.company_id.name" placeholder="Compnay Name"
                            class="placeholder:italic placeholder:text-slate-900" disabled />
                    </div>
                    <div>
                        <h5>Contact Person</h5>
                        <NInput :value="quoteData?.contact_person_id.name" placeholder="Contact Person" disabled />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h5>Banner</h5>
					<n-upload
						v-if="!quoteData.banner"
						label="Banner Image"
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
							:src="`${quoteData?.banner}`"
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
            <div>
                <div class="grid grid-cols-2">
                    <h5>No of PAX</h5>
                    <h5>Budget</h5>
                </div>
                <div class="grid grid-cols-2 gap-x-2">
                    <NInput placeholder="No of Pax" v-model:value="quoteData.number_of_travellers" />
                    <NInput placeholder="Budget" v-model:value="quoteData.estimated_budget" />

                </div>
            </div>
        </div>

    </div>


</template>
