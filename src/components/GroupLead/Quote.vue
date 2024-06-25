<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { NButton } from "naive-ui"

const router = useRouter();

const props = defineProps({
	lead: {
		type: Object,
		required: true,
	},
});

const gotoQuote = (id: any) => {
	router.push(`/editquotation/${id}`);
};

function calculateTotalNights(locations:any) {
      let total = 0
      locations.forEach((location:any) => {
        total += parseInt(location.total_night)
      })
      return total
    }

</script>
<template>
	<div>
		<div class="grid grid-cols-3 m-3">
			<router-link :to="`/createquotation/${lead.id}`">
				<NButton type="success" dashed class="bg-green-100">
					<template #icon>
						<NIcon>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
							</svg>
						</NIcon>
					</template>
					Create Quotation
				</NButton>
			</router-link>
		</div>
		<h5>All Quotes</h5>
		<div class="grid grid-cols-3 gap-x-2  gap-y-1.5">
			<div class="col-span-2 bg-[#f9f9f9] p-2  rounded-lg border border-[#e6e6e6] cursor-pointer mx-2 hover:shadow"
				v-for="(quote, index) in lead.quotes" :key="index" @click="gotoQuote(quote.id)">
				
				<div class="grid">
					<div class="flex  items-center space-x-3">
						<h5>Location:</h5>

						<p v-if="quote.quote_type_id.name === 'VISA'"><span
								v-for="(loc, index) in quote.queryDetail.locations" :key="index">   {{
									loc?.country_id?.name ? loc.country_id.name : '' }}  &nbsp; </span></p>
						<p v-else><span v-for="(loc, index) in quote.queryDetail.locations" :key="index">{{
							loc?.city_id?.name ?
								loc.city_id.name : '' }}</span></p>
					</div>
					<div class="flex  items-center space-x-3">
						<h5>Quote ID :</h5>
						<p>{{ quote.quote_id }}</p>
					</div>
					<div class="flex  items-center space-x-3">
						<h5>Quote Type :</h5>
						<p>{{ quote.quote_type_id.name }}</p>
					</div>
					<div v-if="quote.quote_type_id.name != 'VISA'" class="flex  items-center space-x-3">
						<h5>Nights :</h5>
						<p>{{calculateTotalNights(quote.queryDetail.locations)}}</p>
					</div>
					<div class="flex  items-center space-x-3">
						<h5>Est. Cost :</h5>
						<p>{{ parseInt(quote.estimated_budget).toFixed(2) }} INR</p>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>
