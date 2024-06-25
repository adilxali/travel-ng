const meta = document.createElement("meta")
meta.name = "Travelexic"
document.head.appendChild(meta)

import { createApp } from "vue"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import axios from "axios"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import PrimeVue from 'primevue/config';
import Lara from '@/assets/Lara';
import wind from '@/assets/wind';
import App from "@/App.vue"
import router from "@/router"
import { type Locales, type MessageSchema, getI18NConf } from "@/lang/config"
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/flag.css'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const i18n = createI18n<MessageSchema, Locales>(getI18NConf())

const app = createApp(App)
app.use(pinia)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});
app.use(VueSweetalert2);
app.use(i18n)
app.use(router)

app.mount("#app")
