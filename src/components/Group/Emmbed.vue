<script setup lang="ts">
import { ref } from "vue"
import { NInput } from "naive-ui"
const instructions = ref<string>("")
const button = ref<string>("")
const link = ref<string>("")
</script>
<template>
	<div class="grid row-span-3 gap-y-4 mx-4 mr-10">
		<div class="grid grid-rows-subgrid gap-y-1 row-span-2">
			<h4>Instruction Text</h4>
			<NInput v-model:value="instructions" placeholder="Instruction Text" />
		</div>
		<div class="grid grid-rows-subgrid gap-y-1 row-span-2">
			<h4>Button Text</h4>
			<NInput v-model:value="button" placeholder="Button Text" />
		</div>
		<div class="grid grid-rows-subgrid gap-y-1 row-span-2">
			<h4>Paste Link</h4>
			<NInput v-model:value="link" placeholder="Paste Link" />
		</div>
	</div>
</template>
