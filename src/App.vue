<template>
	<Provider>
		<component
			:is="layoutComponent"
			:class="[`theme-${themeName}`, `layout-${layoutComponentName}`, themeName, { 'opacity-0': loading }]"
		>
			<RouterView v-slot="{ Component }">
				<transition :name="`router-${routerTransition}`" mode="out-in" appear>
					<component
						:is="Component"
						:key="forceRefresh"
						:class="[`theme-${themeName}`, `layout-${layoutComponentName}`, themeName]"
					/>
				</transition>
			</RouterView>
		</component>
		<SplashScreen :show="loading" />
	</Provider>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref, watch, type Component } from "vue"
import { useMainStore } from "@/stores/main"
import { useAuthStore } from "@/stores/auth"
import { useThemeStore } from "@/stores/theme"
import VerticalNav from "@/app-layouts/VerticalNav/index.vue"
import HorizontalNav from "@/app-layouts/HorizontalNav/index.vue"
import Blank from "@/app-layouts/Blank/index.vue"
import Provider from "@/app-layouts/common/Provider.vue"
import SplashScreen from "@/app-layouts/common/SplashScreen.vue"
import { Layout, RouterTransition, type ThemeName } from "@/types/theme.d"
import { type RouteLocationNormalized, useRouter, useRoute } from "vue-router"
import "@/assets/scss/index.scss"

const router = useRouter()
const loading = ref(true)

const layoutComponents = {
	VerticalNav,
	HorizontalNav,
	Blank
}

const themeStore = useThemeStore()
const mainStore = useMainStore()
const authStore = useAuthStore()

const forceLayout = ref<Layout | null>(null)
const layout = computed<Layout>(() => themeStore.layout)
const forceRefresh = computed<number>(() => mainStore.forceRefresh)
const layoutComponentName = computed<Layout>(() => forceLayout.value || layout.value)
const layoutComponent = computed<Component>(() => layoutComponents[layoutComponentName.value])
const routerTransition = computed<RouterTransition>(() => themeStore.routerTransition)
const themeName = computed<ThemeName>(() => themeStore.themeName)
const isLogged = computed(() => authStore.isLogged)

function checkForcedLayout(route: RouteLocationNormalized) {
	if (route.meta?.forceLayout) {
		forceLayout.value = route.meta.forceLayout
	} else {
		forceLayout.value = null
	}
}

watch(layoutComponentName, () => {
	loading.value = false
})

router.afterEach(route => {
	checkForcedLayout(route)
})

onBeforeMount(() => {
	checkForcedLayout(useRoute())

	setTimeout(() => {
		loading.value = false
	}, 500)
})
</script>
