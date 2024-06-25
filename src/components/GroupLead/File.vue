<script setup lang="tsx">
import { NInput, NUpload, NButton, NIcon } from 'naive-ui';
const props = defineProps(["file", 'isSending'])

const emit = defineEmits<{
	(e: "upload"): void

}>()

const handleUpload = async (options: any) => {

  props.file.file  = options.file.file
	

}


</script>

<template>
  <div class="p-4 bg-white rounded shadow-md">
    
    <h5 class="font-semibold mb-2 mt-4">Description</h5>

    <NInput 
      v-model:value="file.body" 
      type="textarea" 
      placeholder="Description" 
      class="mb-2 h-32"
    />
     
    <div class="flex items-center mb-2">
      <NUpload
				:default-file-list="file.file ? [file.file] : []"
				:custom-request="handleUpload"
				@change="file.file = $event.file.file"
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
   
    <NButton type="success" class="bg-[#23AA59] hover:bg-green-600 mt-4" @click="$emit('upload')" :disabled="isSending">
        <template #icon>
            <NIcon><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg></NIcon>
        </template>
        Upload</NButton>
  </div>
</template>
