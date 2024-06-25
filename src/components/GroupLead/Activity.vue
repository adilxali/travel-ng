<script setup lang="tsx">
import { ref } from 'vue';
import { NInput, NButton, NButtonGroup, NDatePicker, NIcon, NTag } from 'naive-ui';
import { Icon as Iconify } from "@iconify/vue"

const phoneIcon ="ic:baseline-phone"
const meetingIcon = "mdi:users"
const lunchIcon = "fluent:food-16-filled"

const buttonTypes = [
  { type: 'phone', icon: phoneIcon },
  { type: 'meeting', icon: meetingIcon },
  { type: 'lunch', icon: lunchIcon },
];

defineProps(['activity', 'isSending'])

const emit = defineEmits<{
    (e: 'send'): void
}>()

</script>

<template>
  <div class="p-4 ">
    <h5 class=" font-semibold mb-2">Title</h5>



    <NInput v-model:value="activity.title" :placeholder="`Enter ${activity.type}`" class="mb-4" />

    <div class="mx-auto flex gap-2 mb-4">
			<NTag
				v-for="item in buttonTypes"
				:key="item.type"
				:type="activity.type === item.type ? 'info' : 'default'"
				class="cursor-pointer"
				@click="activity.type = item.type"
			>
				<template #icon>
					
                    <Iconify :icon="item.icon " />
                    
				</template>
				{{ item.type.toLocaleUpperCase() }}
			</NTag>
		</div>
        <h5 class=" font-semibold mb-2">Schedule</h5>
        <div class="flex mb-4 gap-4">
          <NDatePicker v-model:formatted-value="activity.schedule_from" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Start Date" />
          <NDatePicker v-model:formatted-value="activity.schedule_to" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="End Date" />
        </div>
        
        <h5 class=" font-semibold mb-2">Location</h5>
        <NInput v-model:value="activity.location" placeholder="Enter Location" class="mb-4" />
        
        <h5 class=" font-semibold mb-2">Description</h5>
    <NInput
      v-model:value="activity.comment"
      type="textarea"
      placeholder="Enter Description"
      class="mb-4"
      rows="6"
    />

    <NButton type="success"
    :disabled="isSending"
      class="bg-[#23AA59] hover:bg-green-600" @click="$emit('send')">
        <template #icon>
            <NIcon><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg></NIcon>
        </template>
        Send
    </NButton>
    
  </div>
</template>
