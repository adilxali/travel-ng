<script setup lang="tsx">
import { ref } from "vue"
import { NInput, NUpload, NButton, NIcon } from "naive-ui"

function addTag1() {}
function removeLastTag1() {}

const props = defineProps(["email", "isSending"])

const emit = defineEmits<{
	(e: "sendEmail"): void

}>()

const handleUpload = async (options: any) => {

  props.email.file  = options.file.file
	

}


</script>

<template>
	<div class="p-4 bg-white rounded shadow-md">
		<h5 class="font-semibold mb-2">Recipient</h5>

		<NInput v-model:value="email.email" placeholder="Recipient" class="mb-2" />
		<!-- <NInput v-model:value="tag" placeholder="Enter tag" class="mb-2" /> -->

		<h5 class="font-semibold mb-2">CC:</h5>

		<NInput
			ref="tagInputRef"
			@keydown.enter="addTag1"
			@keydown.188="addTag1"
			@keydown.delete="removeLastTag1"
			@blur="addTag1"
			@keyup.space="addTag1"
			class="mb-2"
		/>

		<h5 class="font-semibold mb-2">Subject:</h5>

		<NInput v-model:value="email.subject" placeholder="Recipient" class="mb-2" />

		<NInput v-model:value="email.body" type="textarea" placeholder="body" class="mb-2 h-32" />

		<div class="flex items-center mb-2">
			<NUpload
				:default-file-list="email.file ? [email.file] : []"
				:custom-request="handleUpload"
				@change="email.file = $event.file.file"
			>
				<NButton type="success" dashed>
					<template #icon>
						<NIcon>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
								<path
									fill="#23AA59"
									stroke="white"
									stroke-linecap="round"
									stroke-miterlimit="10"
									stroke-width="32"
									d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
								/>
							</svg>
						</NIcon>
					</template>
					Attach file
				</NButton>
			</NUpload>
		</div>

		<NButton type="success" class="bg-[#23AA59] hover:bg-green-600 mt-4" @click="$emit('sendEmail')" :disabled="isSending">
			<template #icon>
				<NIcon>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
						/>
					</svg>
				</NIcon>
			</template>
			Send E-mail
		</NButton>
	</div>
</template>
