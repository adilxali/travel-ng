<script setup lang="ts">
import { ref, computed } from "vue";
import {NSpin} from 'naive-ui'
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  loading:{
    type:Boolean,
    default:false
  }
});
defineEmits(["close"]);
const isLoading = computed(()=> props.loading)

</script>

<template>
  <div>
    <Transition name="modal-fade" mode="out-in">
      <div v-if="show" class="fixed w-full inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-50"></div>
        <div
          class="min-w-96 max-w-4xl max-h-[90svh] overflow-y-auto bg-gray-100 rounded-lg p-8 relative dark:bg-[#1d1f25]"
        >
          <button @click="$emit('close')" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 peer" fill="red" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
            <n-spin size="large" />
          </div>

          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
