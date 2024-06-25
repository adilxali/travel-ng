<template>
    
        <Icon  v-if="userRole != 'super-admin'"  :size="20">
				<Iconify :icon="Task" class="hover"></Iconify>
				
			</Icon>
    
</template>

<script setup lang="ts">
import { Icon as Iconify } from "@iconify/vue"
import Icon from "@/components/common/Icon.vue"
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"
const authStore = useAuthStore()

const { userRole } = storeToRefs(authStore)

const Task = "hugeicons:task-add-01"
</script>
