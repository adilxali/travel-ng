<script setup lang="tsx">
import {
	NDataTable,
	NButton,
	NIcon,
	NSelect,
	NInputNumber,
	useMessage, NCard
} from "naive-ui"
import { computed, ref } from "vue"
import MainPanel from "@/app-layouts/common/MainPanel.vue"

const props = defineProps(['locations', 'transport'])

const loc = ref<any>(null)

const message = useMessage()

const transports = ref<any>({
	vehichle_type: '' as string,
	vehichle_quantity: 0 as number,
	days: 0 as number
},)



const tableData = computed(() => {
	return props.locations.flatMap((location: any) => {
		return location.transports.map((transport: any) => ({
			city_id: location.name,
			...transport
		}));
	});
});

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
		{ title: "Location", key: "city_id", width: 250, },
		{ title: "Type", key: "vehichle_type", width: 220, },
		{ title: "Quantity", key: "vehichle_quantity", width: 150, },
		{ title: "No. of Days", key: "days", width: 100, },
		{
			title: "Action",
			key: "assign",
			width: 100,
			render: (row: any, rowIndex: number) => (
				<div class="grid gap-x-2" onClick={() => deleteTransport(row, rowIndex)}>
					<div>
						<NIcon size="24" class="cursor-pointer hover:scale-125 transition duration-400 ease-in-out"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#d82f2f"
									d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
							</svg>
						</NIcon>
					</div>
				</div>
			)
		}
	]
}

const columns = createColumns()

const transportOptions = props.transport.map((option: any) => ({
	label: option,
	value: option // Set the lowercase string as the value
}));


const addTransport = () => {
	if (transports.value.vehichle_type == '') {
		message.error('Please Select The Vehicle Type.')
		return
	}
	if (transports.value.vehichle_quantity == 0) {
		message.error('Please Enter The Quantity.')
		return
	}
	if (transports.value.days == 0) {
		message.error('Please Enter The No. of Days.')
		return
	}

	let locat = props.locations.find((loca: any) => loca.city_id === loc.value);

	if (!locat) {
		message.error('Invalid location selected.');
		return;
	}

	if (!locat.transports) {
		locat.transports = [];
	}

	locat.transports.push({
		vehichle_type: transports.value.vehichle_type,
		vehichle_quantity: transports.value.vehichle_quantity,
		days: transports.value.days
	});

	transports.value = {
		vehichle_type: '',
		vehichle_quantity: 0,
		days: 0
	};

	loc.value = null;
	message.success('Transport Added Successfully.');

}

function deleteTransport(row: any, rowIndex: number) {
	const locationIndex = props.locations.findIndex((location: any) => location.city_id === row.city_id);
	console.log(locationIndex)
	if (locationIndex > -1) {
		props.locations[locationIndex].transports.splice(rowIndex, 1);
		message.success('Transport Deleted Successfully.');
	}
}

</script>
<template>
	<div>
		{{ locations.transports }}
		<n-card class="mt-5">
			<div class="grid grid-cols-12 gap-x-4">
				<div class="col-span-3">
					<p>Select Location:</p>
					<n-select placeholder="Select Location" v-model:value="loc" label-field="name" value-field="city_id"
						:options="locations" class="mt-2" />

				</div>
				<div class="col-span-3">
					<p>Select Vehicle type:</p>
					<n-select placeholder="Select Transportation" v-model:value="transports.vehichle_type"
						label-field="label" value-field="value" :options="transportOptions" class="mt-2" />

				</div>
				<div class="col-span-2">
					<p>Quantity</p>
					<n-input-number :show-button="false" v-model:value="transports.vehichle_quantity" class="mt-2" />

				</div>
				<div class="col-span-2">
					<p>No. of Days</p>
					<n-input-number :show-button="false" v-model:value="transports.days" class="mt-2" />

				</div>
				<div class="col-span-2 p-2">
					<n-button type="success" class="mt-5 " @click="addTransport">
						<n-icon size="30">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path
									d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
							</svg>
						</n-icon>
						Add Transport</n-button>

				</div>
			</div>

		</n-card>
		<p class="pt-3 mt-4">Transport History</p>
		<MainPanel>
			<NDataTable :columns="columns" :data="tableData" :bordered="true" />
		</MainPanel>
	</div>
</template>
