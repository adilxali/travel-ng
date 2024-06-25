<template>
    <div class="page-auth max-h-screen overflow-hidden">


        <div class="flex wrapper justify-center items-center max-h-screen" v-if="!isLogged">
            <div class="image-box max-w-[60%] basis-1/2" v-if="align === 'right'">
                <swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :pagination="{
            clickable: true,
        }" :navigation="true" :modules="modules" class="mySwiper">

                    <swiper-slide>
                        <img class="swiper-image" src="@/assets/images/loginSlider-1.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiper-image" src="@/assets/images/loginSlider-2.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiper-image" src="@/assets/images/loginSlider-3.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiper-image" src="@/assets/images/loginSlider-4.jpg" alt="" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="min-h-screen max-h-screen form-box max-w-[40%] basis-1/2 flex flex-col items-center justify-end" :class="{ centered: align === 'center' }">
            
                <AuthForm :type="type" />
            <div class="mt-10">
                <Footer/>
            </div>
        </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AuthForm from "@/components/AuthForm/index.vue"
import Settings, { type Align } from "@/components/AuthForm/Settings.vue"
import Footer from "./Footer.vue"
import { ref, computed, onBeforeMount, toRefs } from "vue"
import { useRoute } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import type { FormType } from "@/components/AuthForm/index.vue"
import 'swiper/css';
const props = defineProps<{
    formType?: FormType
}>()
const { formType } = toRefs(props)

const modules = ref([Autoplay, Pagination, Navigation])

const route = useRoute()
const align = ref<Align>("right")
const activeColor = ref("")
const type = ref<FormType | undefined>(formType.value || undefined)

const authStore = useAuthStore()
const isLogged = computed(() => authStore.isLogged)

onBeforeMount(() => {
    if (route.query.step) {
        const step = route.query.step as FormType
        type.value = step
    }
})
</script>

<style lang="scss" scoped>
@import "./main.scss";

.swiper-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* or object-fit: contain; depending on your preference */
}

.mySwiper {
    width: 100%;
    height: 100%;
}
</style>
