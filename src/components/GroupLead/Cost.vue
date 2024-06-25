<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { NButton, NSwitch, NInput, NModal, NDivider, NInputNumber } from "naive-ui"
interface Cost {
	title: string
	rate: number | null
	quantity: number | null
	remarks: string
	price: number
}

interface Category {
	category_name: string
	total_amount: number
	markup_percent: boolean
	markup_value: number
	costs: Cost[]
}
const props = defineProps<({
	categories: Category[]
})>();

const newCategoryName = ref<string>("")
const newCost = ref<Cost>({
	title: "",
	rate: null,
	quantity: null,
	remarks: "",
	price: 0
})

const showAddCategoryModal = ref<boolean>(false)
const showAddCostModal = ref<boolean>(false)
const currentCategoryIndex = ref<number | null>(null)

const addCategory = () => {
	if (newCategoryName.value.trim() !== "") {
		props.categories.push({
			category_name: newCategoryName.value,
			total_amount: 0,
			markup_percent: false,
			markup_value: 0,
			costs: []
		})
		newCategoryName.value = ""
		showAddCategoryModal.value = false
	}
}

const totalCat = (index: any) => {
	const category = props.categories[index]
	return category.costs.reduce((sum: any, cost: any) => sum + cost.price, 0)
}

const updateCategoryTotals = (index: number) => {
	const category = props.categories[index]
	const totalAmount = category.costs.reduce((sum: any, cost: any) => sum + cost.price, 0)
	category.total_amount = totalAmount
	category.total_amount = category.markup_percent
		? totalAmount + (totalAmount * category.markup_value) / 100
		: totalAmount + category.markup_value
}

const addCost = () => {
	if (currentCategoryIndex.value !== null) {
		const cost = { ...newCost.value, price: (newCost.value.rate || 0) * (newCost.value.quantity || 0) }
		props.categories[currentCategoryIndex.value].costs.push(cost)
		newCost.value = { title: "", rate: null, quantity: null, remarks: "", price: 0 }
		updateCategoryTotals(currentCategoryIndex.value)
		showAddCostModal.value = false
	}
}

const calculatePrice = (cost: Cost) => {
	cost.price = (cost.rate || 0) * (cost.quantity || 0)
}

const price = computed(() => {
	if (newCost.value.rate !== null && newCost.value.quantity !== null) {
		return newCost.value.rate * newCost.value.quantity
	} else {
		return 0 // Or handle the null case differently
	}
})

watch(
	() => props.categories.map(category => category.markup_percent),
	(newPercentValues, oldPercentValues) => {
		for (let i = 0; i < newPercentValues.length; i++) {
			if (newPercentValues[i] !== oldPercentValues[i]) {
				updateCategoryTotals(i)
			}
		}
	}
)

watch(
	newCost,
	newValue => {
		calculatePrice(newValue)
	},
	{ deep: true }
)
</script>

<template>
	<div class="flex justify-between mb-4">
		<n-button type="success" @click="showAddCategoryModal = true">+ Add Category</n-button>
	</div>
	<div v-for="(category, index) in categories" :key="index" class="grid mb-6">
		<div class="flex justify-between items-end mb-3">
			<span class="text-blue-600">Category: {{ category.category_name }}</span>
			<n-button type="success" @click="currentCategoryIndex = index,
				showAddCostModal = true
				">
				+ Add Cost
			</n-button>
		</div>
		<div v-for="(cost, costIndex) in category.costs" :key="costIndex" class="grid grid-cols-7 gap-4 mb-4">
			<n-input v-model:value="cost.title" label="Title" placeholder="Title" class="col-span-2" />
			<NInputNumber v-model:value="cost.rate" label="Rate" placeholder="Rate" class="col-span-1"
				@input="calculatePrice(cost)" />
			<NInputNumber v-model:value="cost.quantity" label="Qty." placeholder="Qty." class="col-span-1"
				@input="calculatePrice(cost)" />
			<n-input v-model:value="cost.remarks" label="Remarks" placeholder="Remarks" class="col-span-2" />
			<NInputNumber v-model:value="cost.price" label="Price" placeholder="Price" class="col-span-1"
				:disabled="true" :show-button="false" />
		</div>
		<div v-if="category.costs.length > 0" class="grid  justify-items-end gap-4 mb-4">
			<div class="col-span-1">
				<h5>Total Amount</h5>
				<NInputNumber :value="totalCat(index)" label="Total Amount" placeholder="Total Amount" :disabled="true"
					:show-button="false" />
			</div>
		</div>
		<div v-if="category.costs.length > 0" class="flex items-center justify-end mb-4">
			<span class="mr-2">Fixed</span>

			<n-switch v-model:value="category.markup_percent" @input="updateCategoryTotals(index)" />
			<span class="ml-2">Percent</span>
			<n-input-number v-model:value="category.markup_value" class="ml-4 w-24" :min="0"
				@update:value="updateCategoryTotals(index)" :show-button="false" />
			<span v-if="category.markup_percent" class="ml-2">%</span>
			<div class="grid grid-cols- gap-4 ml-4">

				<NInputNumber v-model:value="category.total_amount" label="Selling Price" placeholder="Selling Price"
					:disabled="true" :show-button="false" />
			</div>
		</div>

		<n-divider />
	</div>

	<!-- Add Category Modal -->
	<n-modal v-model:show="showAddCategoryModal" title="Add Category" preset="dialog">
		<n-input v-model:value="newCategoryName" placeholder="Category Name" class="mb-4" />
		<div class="flex justify-end">
			<n-button @click="addCategory">Add</n-button>
		</div>
	</n-modal>

	<!-- Add Cost Modal -->
	<n-modal v-model:show="showAddCostModal" title="Add Cost" preset="dialog" class="w-full">
		<div class="grid grid-cols-2 gap-4 mb-4">
			<n-input v-model:value="newCost.title" label="Title" placeholder="Title" class="col-span-2" />
			<NInputNumber v-model:value="newCost.rate" label="Rate" placeholder="Rate" />
			<NInputNumber v-model:value="newCost.quantity" label="Qty." placeholder="Qty." />
			<n-input v-model:value="newCost.remarks" label="Remarks" placeholder="Remarks" class="col-span-2" />
		</div>
		<div class="flex justify-between">
			<h4>Total Price: {{ price }}</h4>
			<n-button @click="addCost">Add</n-button>
		</div>
	</n-modal>
</template>
