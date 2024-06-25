<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NButton, NCard, NDatePicker, NDivider, NInput, NRadioGroup, NRadioButton, NInputNumber, NSpace, NIcon, NCheckbox } from 'naive-ui';
import Icon from '../common/Icon.vue';

const props = defineProps<{
	queryDetails: any;
}>();


onMounted(() => {
	console.log('queryDetails', props.queryDetails);
	if (!props.queryDetails.pre_registration_required) {

		props.queryDetails.pre_registration_required = false
	}
	if (!props.queryDetails.registration_required) {

		props.queryDetails.registration_required = false
	
	}
	if (!props.queryDetails.attendance_required) {

		props.queryDetails.attendance_required = false
	}
}
);
</script>

<template>
	<div>
		<p class="ms-2 my-3 text-lg text-[#555]">Event Registration</p>
		<div>
			<div class="flex items-center my-2 p-5 bg-white border rounded-md text-lg">
				<n-space align="center" justify="space-between">
					<n-checkbox class="text-lg" v-model:checked="queryDetails.pre_registration_required"
						inline>Pre-registration
						required</n-checkbox>
					<n-checkbox class="text-lg" v-model:checked="queryDetails.registration_required" inline>Registration
						required</n-checkbox>
					<n-checkbox class="text-lg" v-model:checked="queryDetails.attendance_required" inline>Attendance
						required</n-checkbox>
				</n-space>
			</div>
		</div>
	</div>
</template>
