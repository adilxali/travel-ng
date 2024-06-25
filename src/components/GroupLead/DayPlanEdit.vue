<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import { NCard, NSelect, NButton, NIcon, NInput, type SelectOption } from 'naive-ui';
import draggable from 'vuedraggable';


const props = defineProps<{
    location: any
    day: any
    placeId: any
    activities: any
    visible: boolean
    customTaskInput: any

}>()
const emit = defineEmits(['activity-selected', 'activity-removed', 'custom-task-added'])
</script>

<template>
    
        <div class="w-full">
          <NCard class="w-full">
            <div class="flex justify-between items-center mb-2">
              <h5>Day -{{ day.day }} ({{ location.name }})</h5>
            </div>

            <NSelect 
              label-field="title" 
              value-field="id" 
              :options="props.activities" 
              filterable 
              placeholder="Select activity"
              @update:value="(option: SelectOption) => emit('activity-selected',location.city_id, day.day, option)"
            />

          

            <draggable v-model="props.day.places" group="activity" item-key="id" tag="div" handle=".drag-handle">
              <template #item="{ element: places }">
                    <TransitionGroup tag="div" name="fade" class="flex items-center justify-between mt-2 border p-2 rounded-lg">
                  <span>{{ places.place_name.length > 20 ? places.place_name.substring  (0,20) : places.place_name }}</span>
                  <div>
                    <NButton 
                      strong 
                      secondary 
                      circle 
                      text
                      @click="emit('activity-removed',props.location.city_id, props.day.day,  places.place_id)"
                    >
                      <NIcon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#d82f2f" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg></NIcon>
                    </NButton>
                    <NIcon :size="24" class="cursor-move drag-handle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 19v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-8-4V9h2v2zm4 0V9h2v2zm4 0V9h2v2zM7 7V5h2v2zm4 0V5h2v2zm4 0V5h2v2z"/></svg></NIcon>
                  </div>
            </TransitionGroup>
              </template>
            </draggable>
          </NCard>
        </div>
</template>
<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(1px, 0);
}


</style>