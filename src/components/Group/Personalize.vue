<script setup lang="tsx">
import { ref } from "vue";
import {
	NButton,
	NColorPicker,
	NCheckbox,
	NIcon,
	NCollapseItem,
	NCollapse,
	NSpace,
	NInput,
	NUpload,
	NDataTable
} from "naive-ui"

// Methods
const handleAddBackground = () => {
	// Logic to open image selection dialog (use a file input or library)
};

const handleSubmit = () => {
	// Form submission logic (e.g., API call)
};

const file = ref<any>(null)


const createColumns = () => {
	return [
		{
			title: "Sno.",
			key: "key",
			width: 75,

			render: (_: any, index: any) => {
				return `${index + 1}`;
			}
		},
		{ title: "Name", key: "lead_id", width: 250, },
		{ title: "Description", key: "company_id.name", width: 220, },
		{ title: "Contact", key: "contact_person_id.contact_numbers[0].value", width: 150, },
		{ title: "Address", key: "company_id.address", width: 100, },
		{ title: "Website", key: "website", width: 100, },
		{ title: "Logo", key: "logo", width: 100, },
		{ title: "Category", key: "group_lead_type_id.name", width: 100, },
		{
			title: "Action",
			key: "assign",
			width: 100,
			render: (row: any) => (
				<div class="grid gap-x-2">
					<div>
						<NIcon size="24" class={'cursor-pointer hover:scale-125 transition duration-400 ease-in-out'}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#d82f2f" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
							</svg>
						</NIcon>
					</div>
				</div>
			)
		}
	]
}

const columns = createColumns()

const props = defineProps<{
	groupData: any
}>();

const data = ref([
	{
		id: 54,
		lead_id: "Mohit",
		company_id: { id: 2, name: "HDFC", address: "MUMBAI" },
		contact_person_id: {
			id: 2,
			name: "AAJAD",
			contact_numbers: [{ value: "7340284603", label: "work" }]
		},
		group_lead_type_id: { id: 5, name: "Package" },
		website: "http://hdfc.com",
		logo: "http://hdfc.com/logo.png"
	},
	{
		id: 55,
		lead_id: "Mohit",
		company_id: { id: 3, name: "ICICI", address: "DELHI" },
		contact_person_id: {
			id: 3,
			name: "RAHUL",
			contact_numbers: [{ value: "9123456789", label: "work" }]
		},
		group_lead_type_id: { id: 5, name: "Package" },
		website: "http://icici.com",
		logo: "http://icici.com/logo.png"
	},

])
</script>

<template>
	<div class="grid grid-cols-3 gap-x-4">
		<div class="w-64">
			<label class="block mb-2">Choose Color</label>
			<NColorPicker v-model:value="groupData.app_footer_color" />
		</div>

		<div class="grid grid-cols-2 gap-x-2">
			<div class="relative w-full h-full overflow-hidden rounded-3xl">
				<img src="@/assets/images/loginSlider-1.jpg"
					class="absolute rounded-lg top-0 h-full w-full object-cover z-10" />


				<div :class="`absolute bottom-2 rounded-b-2xl z-20 w-full `"
					:style="{ background: groupData.app_footer_color }">
					<div class="flex justify-center items-center mb-3 ">
						<div class="m-auto absolute rounded-full p-3"
							:style="{ background: groupData.app_footer_color }">
							<NIcon class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
									<path fill="white"
										d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
								</svg>
							</NIcon>
						</div>
					</div>

					<div class="p-3.5">
						<div class="grid grid-cols-3 gap-x-4 p-2 rounded-lg border border-white-500">
							<div class=" flex justify-center items-center flex-col">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
										viewBox="0 0 24 24">
										<path fill="white"
											d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Location</p>
								<p class="text-center my-1 text-[11px] text-white">Thailand</p>

							</div>
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
										viewBox="0 0 32 32">
										<path fill="white"
											d="M16 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m7 14a7 7 0 1 1-14 0a7 7 0 0 1 14 0m6 1a1 1 0 0 0 0-2h-2a1 1 0 1 0 0 2zm-13 9a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M5 17a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm.294-11.706a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414m1.414 21.414a1 1 0 0 1-1.414-1.414l2-2a1 1 0 1 1 1.414 1.414zm20-21.414a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414m-1.414 21.414a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 1 0-1.414 1.414z" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Weather</p>
								<p class="text-center my-1 text-[11px] text-white">30℃</p>

							</div>
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
										viewBox="0 0 256 256">
										<path fill="white"
											d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Time</p>
								<p class="text-center my-1 text-[11px] text-white">11:30</p>

							</div>

						</div>
					</div>
					<div class="grid grid-cols-2 px-4">
						<div
							class="flex justify-center items-center m-2 p-1.5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-md">
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em"
										viewBox="0 0 576 512">
										<path fill="white"
											d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64H365.7L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49-171.6H112l-43.2 57.6c-3 4-7.8 6.4-12.8 6.4H14c-7.8 0-14-6.3-14-14c0-1.3.2-2.6.5-3.9L32 256L.5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14h42c5 0 9.8 2.4 12.8 6.4L112 192h102.9l-49-171.6c-3-10.2 4.7-20.4 15.3-20.4h56.2c11.5 0 22.1 6.2 27.8 16.1L365.7 192z" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">My Plan</p>
							</div>
						</div>
						<div
							class="flex justify-center items-center m-2 p-1.5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-md">
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
										viewBox="0 0 24 24">
										<path fill="white"
											d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818zm0-3.273H7.091V9.273h9.818zM14.727 6h6l-6-6z" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Travel Docs</p>
							</div>
						</div>
						<div
							class="flex justify-center items-center m-2 p-1.5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-md">
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em"
										viewBox="0 0 24 24">
										<path fill="white"
											d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Important Contacts</p>
							</div>
						</div>
						<div
							class="flex justify-center items-center m-2 p-1.5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-md">
							<div class=" flex justify-center items-center flex-col ">
								<NIcon class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
										viewBox="0 0 24 24">
										<path fill="white"
											d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
									</svg>
								</NIcon>
								<p class="text-center m-auto text-[9px] text-white">Hotels</p>
							</div>
						</div>

					</div>
					<div class="bottom-0 grid grid-cols-4 mb-4">
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
									<path fill="white"
										d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" />
									<path fill="white"
										d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97" />
								</svg>
							</NIcon>
							<!--							<p class="text-center m-auto text-sm text-white">Home</p>-->
						</div>
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="white"
										d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Chat</p>-->
						</div>
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
									<path fill="white"
										d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Notification</p>-->
						</div>
						<div class="flex flex-col items-center justify-center mr-4">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Menu</p>-->
						</div>
					</div>

				</div>
				<img src="@/assets/images/frame2.png" class="relative w-full object-cover z-30" />
			</div>
			<div class="relative w-full h-full overflow-hidden rounded-3xl">
				<img src="@/assets/images/loginSlider-1.jpg"
					class="absolute rounded-lg top-0 h-full w-full object-cover z-10" />
				<img src="@/assets/images/logo.png" class=" absolute rounded-lg z-10 w-10 top-12 left-[37%]" />
				<div :class="`absolute bottom-2 rounded-b-2xl z-20 w-full `"
					:style="{ background: groupData.app_footer_color }">
					<div class="flex justify-center items-center mb-3 ">
						<div class="m-auto absolute rounded-full p-3"
							:style="{ background: groupData.app_footer_color }">
							<NIcon class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
									<path fill="white"
										d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
								</svg>
							</NIcon>
						</div>
					</div>
					<div class="bottom-0 grid grid-cols-4 mb-4">
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
									<path fill="white"
										d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" />
									<path fill="white"
										d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97" />
								</svg>
							</NIcon>
							<!--							<p class="text-center m-auto text-sm text-white">Home</p>-->
						</div>
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="white"
										d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Chat</p>-->
						</div>
						<div class="flex flex-col items-center justify-center m-auto">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
									<path fill="white"
										d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Notification</p>-->
						</div>
						<div class="flex flex-col items-center justify-center mr-4">
							<NIcon class="m-auto p-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
								</svg>
							</NIcon>
							<!--							<p class="text-center text-xs text-white mt-0">Menu</p>-->
						</div>
					</div>

				</div>
				<img src="@/assets/images/frame2.png" class="relative w-full object-cover z-30" />
			</div>
		</div>

		<div class="ml-8">
			<h2 class="text-lg font-medium mb-4">Extra Features</h2>
			<div class="grid">
				<NCheckbox v-model:checked="groupData.app_silent_notifications">Silent Notification</NCheckbox>
				<NCheckbox v-model:checked="groupData.app_chat">Chat</NCheckbox>
			</div>
			<div class="w-64 mt-8">
				<label class="block mb-2">Background Image (9:16 ratio)</label>
				<NButton @click="handleAddBackground" type="info" dashed>Add Background</NButton>
			</div>
		</div>
	</div>

	<div class="bg-[#d1ecf1] my-4 py-3 mx-4 px-4 rounded-md">
		<n-collapse>
			<n-collapse-item name="1">
				<template #header>
					<h4 class="text-[#3d7a95]">Non-Member List -
						How it works?</h4>
				</template>
				<div>
					<span>
						NB : Any if you do not see a master set of documents then ask your agency admin to create the
						same. You can also
						add custom documents here in the list then drag them to right hand side to make them available
						for the tour.
					</span>
				</div>
			</n-collapse-item>
		</n-collapse>
	</div>

	<div>
		<div class="grid grid-cols-4 gap-x-4">
			<div class="p-5 col-span-1">
				<p class="text-md">Non member list</p>
				<NUpload :default-file-list="file ? [file] : []" class="w-100">

					<n-button type="success" class="mt-3 w-full border-t-green-800 bg-green-100" dashed>
						<template #icon>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
								<path fill="#23AA59" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
							</svg>
						</template>
						Upload Sheet
					</n-button>
				</NUpload>


			</div>
			<div class="p-5 col-span-2">
				<p class="text-md">Button Title</p>
				<n-space vertical class="mt-3">
					<n-input placeholder="non member list">

					</n-input>
				</n-space>

			</div>

		</div>
		<NCheckbox class="p-5 text-lg">Share contacts to app</NCheckbox>




		<NDataTable :columns="columns" :data="data" :bordered="true" class="p-5" />

		<div class="bg-[#d1ecf1] my-4 py-3 mx-4 px-4 rounded-md">
			<n-collapse>
				<n-collapse-item name="1">
					<template #header>
						<h4 class="text-[#3d7a95]">Embed Button -
							How it works?</h4>
					</template>
					<div>
						<span>
							NB : Any if you do not see a master set of documents then ask your agency admin to create
							the
							same. You can also add custom documents here in the list then drag them to right hand side
							to
							make them available for the tour.
						</span>
					</div>
				</n-collapse-item>
			</n-collapse>
		</div>
		<div class="grid grid-cols-3 gap-4 mx-4">
			<div class="flex flex-col gap-y-1">
				<h4>Instruction Text</h4>
				<NInput v-model:value="groupData.embed_instruction_text" placeholder="Instruction Text" />
			</div>
			<div class="flex flex-col gap-y-1">
				<h4>Button Text</h4>
				<NInput v-model:value="groupData.embed_button_text" placeholder="Button Text" />
			</div>
			<div class="flex flex-col gap-y-1">
				<h4>Paste Link</h4>
				<NInput v-model:value="groupData.embed_paste_link" placeholder="Paste Link" />
			</div>
		</div>
		<n-button class="m-5" type="primary">
			<n-icon>
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
					<path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
				</svg>
			</n-icon>
			Add Button</n-button>
	</div>

	<div class="mt-4 flex justify-end">
		<n-button type="primary">Group Activation</n-button>
	</div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
