<script setup lang="ts">
import { computed } from "vue"
import { useThemeStore } from "@/stores/theme"
import { RouterTransition } from "@/types/theme.d"
const themeStore = useThemeStore()
const routerTransition = computed<RouterTransition>(() => themeStore.routerTransition)
</script>
<template>
    <div>
        <RouterView v-slot="{ Component }">
				<transition :name="`router-${routerTransition}`" mode="out-in" appear>
					<component
						:is="Component"
					/>
				</transition>
			</RouterView>
    </div>
</template>
