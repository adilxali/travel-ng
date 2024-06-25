<script setup lang="tsx">
import { ref } from 'vue';
import { NInput, NButton } from 'naive-ui';

const model  = defineModel<string>()

defineProps(['isSending'])

const emit = defineEmits<{
    (e: 'saveNote'): void
}>()

</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-semibold mb-2">Notes</h2>
    <NInput
      v-model:value="model"
      type="textarea"
      placeholder="Create note for yourself"
      class="border border-dashed border-gray-300 p-3 mb-4 rounded resize-y h-32"
    />
    <NButton
      type="success"
      class="bg-[#23AA59] hover:bg-green-600"
      @click="emit('saveNote')"
      :disabled="isSending"
    >
      <template #icon>
        <n-icon><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ffffff" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/></svg></n-icon>
      </template>
      Save
    </NButton>
    
  </div>
</template>
