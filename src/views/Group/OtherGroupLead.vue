<script setup lang="tsx">
import { ref, onMounted } from "vue"
import { NDataTable, NButton, NIcon, NSelect } from "naive-ui"
import axios from "@/utils/tenants"
import MainPanel from "@/app-layouts/common/MainPanel.vue"
import Model from "@/app-layouts/common/Model.vue"
const ref_no = ref<any>(null)
const visible = ref(false)

const selectedValue = ref(null)

const createColumns = ({ assign }: { assign: (id: number) => void }) => {
	return [
		{
			title: "Sno.",
			key: "key",
			width: 75,

			render: (_: any, index: any) => {
				return `${index + 1}`
			}
		},
		{ title: "Ref no.", key: "lead_id", width: 250, },
		{ title: "Organization name", key: "company_id.name", width: 220, },
		{ title: "Number of Pax", key: "number_of_travellers", width: 150, },
		{ title: "Query Type", key: "group_lead_type_id.name", width: 100, },
		{ title: "Budget", key: "estimated_budget", width: 100, },
		{
			title: "Assign",
			key: "assign",
			width: 100,
			render: (row: any) => (
				<div class="grid gap-x-2">
					<div onClick={() => assign(row.lead_id)}>
						<NIcon size="24" class={"cursor-pointer hover:scale-125 transition duration-400 ease-in-out"}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									fill="#1e51a4"
									d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h4.7q-.137-.766.366-1.383Q11.184 2 12 2q.835 0 1.338.617T13.685 4h4.7q.67 0 1.143.472q.472.472.472 1.144v5.95q-.263-.091-.504-.148q-.24-.056-.496-.112v-5.69q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h5.666q.036.28.093.521q.057.24.147.479zM5 18v1V5v6.306v-.075zm2.5-1.73h3.96q.055-.257.15-.497l.2-.504H7.5zm0-3.77h6.58q.493-.346.971-.586q.478-.241 1.026-.378V11.5H7.5zm0-3.77h9v-1h-9zM12 4.443q.325 0 .538-.212t.212-.538t-.213-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212m6 17.674q-1.671 0-2.835-1.165Q14 19.787 14 18.116t1.165-2.836T18 14.116t2.836 1.164T22 18.116q0 1.67-1.164 2.835Q19.67 22.116 18 22.116M17.616 21h.769v-2.5h2.5v-.77h-2.5v-2.5h-.77v2.5h-2.5v.77h2.5z"
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
	assign: (id: any) => {
		ref_no.value = id
		visible.value = true
	}
})

const options = ref([
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },

]);

function close() {
	ref_no.value = null
	visible.value = false
}

const leads = ref<any[]>([])

onMounted(async () => {
	try {
		const { data } = await axios.get("/common_group_leads")
		leads.value = data.data
	} catch (error: any) {
		console.log("Error")

	}
})

</script>
<template>
	<div>
		<Model :show="visible" @close="close()">
			<div class="w-96">
				<div class="text-lg font-semibold mb-2">{{ ref_no }}</div>
				<div class="text-gray-600 mb-4">Tour Manager</div>

				<NSelect v-model:value="selectedValue" :options="options" placeholder="Please Select" class="mb-4" />

				<NButton type="success">
					<template #icon>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
						</svg>
					</template>
					Assign
				</NButton>
			</div>
		</Model>
		<div class="flex justify-between items-center mb-3">
			<h3>Other Group Leads</h3>
		</div>
		<MainPanel>
			<!-- <NDataTable :columns="columns" :data="leads" :bordered="false" /> -->
			<NDataTable :columns="columns" :data="leads" :bordered="true" responsive />
		</MainPanel>
	</div>
</template>
