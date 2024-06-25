<script setup lang="tsx">
import {
	NDataTable,
	NButton,
	NIcon,
	NSelect,
	NInputNumber,
	NCard,
	useMessage
} from "naive-ui"
import { computed, ref } from "vue"
import MainPanel from "@/app-layouts/common/MainPanel.vue"

const props = defineProps(['locations', 'hubs'])

const visaDetail = ref<any>({

	hub: '',
	total_pax: 0
})

const message = useMessage()

const tableData = computed(() => {
	return props.locations.flatMap((location: any) => {
		if (location.visa) {
			return location.visa.map((hubs: any) => ({
				lead_id: location.name,
				...hubs
			}));
		}
		return []
	});
});

const createColumns = () => {
	return [
		{
			title: "Sno.",
			key: "key",
			width: 75,

			render: (_: any, index: any) => {
				return `${index + 1}`
			}
		},
		{ title: "Location", key: "lead_id", width: 250, },
		{ title: "Hub", key: "hub", width: 220, },
		{ title: "Paxs", key: "total_pax", width: 100, },
		{
			title: "Action",
			key: "assign",
			width: 100,
			render: (row: any, rowIndex: number) => (
				<div class="grid gap-x-2" onClick={() => deleteVisa(row, rowIndex)}>
					<NIcon size="24" class="cursor-pointer hover:scale-125 transition duration-400 ease-in-out"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path fill="#d82f2f"
								d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
						</svg>
					</NIcon>
				</div>
			)
		}
	]
}

const loc = ref<any>(null)

const columns = createColumns()

const hubOptions = computed(() => {
	return props.hubs.map((hub: any) => ({
		label: hub,
		value: hub
	}))
})

const addVisa = () => {
	if (visaDetail.value.hub == '') {
		message.error('Please select hub')
	}
	if (visaDetail.value.total_pax == 0) {
		message.error('Please enter pax')
	}

	let locat = props.locations.find((loca: any) => loca.country_id === loc.value);

	if (!locat) {
		message.error('Please select location')
		return;
	}
	if (!locat.visa) {
		locat.visa = []
	}
	locat.visa.push(visaDetail.value)
	visaDetail.value = {
		hub: '',
		total_pax: 0
	}
	loc.value = null
	message.success('Visa added successfully')
}

const deleteVisa = (row: any, rowIndex: number) => {
	let locat = props.locations.find((loca: any) => loca.city_id === loc.value);
	if (locat) {
		locat.visa.splice(rowIndex, 1)
		message.success('Visa deleted successfully')
	}
}

</script>
<template>
	<div>




		<n-card class="mt-5">
			<div class="grid grid-cols-10 gap-x-8">
				<div class="col-span-3">
					<p>Select Location:</p>
					<n-select v-model:value="loc" :options="locations" label-field="name" value-field="country_id"
						placeholder="Select Location" class="mt-2" />

				</div>
				<div class="col-span-3">
					<p>Select Hub:</p>
					<n-select v-model:value="visaDetail.hub" :options="hubOptions" placeholder="Select Hub"
						class="mt-2" />

				</div>

				<div class="col-span-2">
					<p>Pax</p>
					<n-input-number v-model:value="visaDetail.total_pax" :show-button="false" class="mt-2" />

				</div>
				<div class="col-span-2 p-2">
					<n-button type="success" class="mt-5 " @click="addVisa()">
						<n-icon size="30">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path
									d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
							</svg>
						</n-icon>
						Add Visa</n-button>

				</div>
			</div>

		</n-card>
		<p class="pt-3 mt-4">Visa History</p>
		<MainPanel>
			<NDataTable :columns="columns" :data="tableData" :bordered="true" />
		</MainPanel>
	</div>
</template>
