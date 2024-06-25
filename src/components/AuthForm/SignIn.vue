<script lang="ts" setup>
import { ref } from "vue"
import { useStorage } from '@vueuse/core'
import { useToast } from "@/composables/useToast"
import type { LoginPayload } from "@/types/auth.d"
import { NSpin } from "naive-ui"
import {
	type FormInst,
	type FormValidationError,
	type FormRules,
	NForm,
	NFormItem,
	NInput,
	NButton,
	NCheckbox
} from "naive-ui"
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import axios from "@/utils/axios"
const router = useRouter()
const formRef = ref<FormInst | null>(null)
const error = ref<string | null>(null)
const model = ref<LoginPayload>({
	email: "admin@example.com",
	password: "password"
})

const emit = defineEmits<{
	(e: "forgot-password"): void
}>()

const rules: FormRules = {
	email: [
		{
			required: true,
			trigger: ["blur", 'input'],
			message: "Email is required"
		}
	],
	password: [
		{
			required: true,
			trigger: ["blur", 'input'],
			message: "Password is required"
		}
	]
}

const authStore = useAuthStore()
const { loading } = storeToRefs(authStore)

async function signIn(e: Event) {
  try {
    e.preventDefault();
    const validationResult = await formRef.value?.validate();

    if (validationResult?.warnings && validationResult.warnings.flat().length > 0) {
      // Handle validation warnings (e.g., display messages)
      validationResult.warnings.flat().forEach((warning:any) => {
        useToast("warning", warning.message, ""); 
      });
      return;
    }

    loading.value = true;
    const credentials = model.value;

    const response = await axios.post("/login", credentials);
    const { user, security: { accessToken: token }  } = response.data.data;
	const {message, success} = response.data;

    if (success) {
      authStore.setLogged(user, user.type, token); // Assuming setLogged exists in authStore
      useStorage("token", token);
      useToast("success", message, "");
      router.push("/");
    }
  } catch (err: any) {
    if (err.response && err.response.status === 403) {
      // Special handling for 403 Forbidden errors
      useToast("error", "Forbidden access. Logging you out...", "");
      // Logout logic (call your authentication logout function)
      // ... then redirect to login 
      router.push("/login");  
    } else {
      useToast("error", err.response.message || "An error occurred", "");
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
	<n-form ref="formRef" :model="model" :rules="rules">
		<n-form-item path="email" label="Email">
			<n-input v-model:value="model.email" @keydown.enter="signIn" placeholder="Example@email.com" size="large"
				autocomplete="on" />
		</n-form-item>
		<n-form-item path="password" label="Password">
			<n-input v-model:value="model.password" type="password" show-password-on="click"
				placeholder="At least 8 characters" @keydown.enter="signIn" autocomplete="on" size="large" />
		</n-form-item>
		<div class="flex flex-col items-end gap-6">
			<div class="flex justify-between w-full">
				<n-checkbox size="large">Remember me</n-checkbox>

			</div>
			<div class="w-full">
				<n-button v-if="loading" type="primary" class="!w-full" size="large" disabled><n-spin :size="40" />Sign
					in</n-button>
				<n-button v-else type="primary" @click="signIn" class="!w-full" size="large">Sign in</n-button>
			</div>
		</div>
	</n-form>


</template>
