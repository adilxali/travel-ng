<script setup lang="ts">
import { ref } from "vue";
import { useTitle } from "@vueuse/core";
import { useAuthStore } from "@/stores/auth"
const auth = useAuthStore()
const role = ref<string | null | undefined>(auth?.userRole)
useTitle("Dashboard");

</script>
<template>
    <div class="page" v-if="role === 'super-admin'">Hi, this is a Admin page.</div>
    <div class="page" v-else-if="role === 'user'">Hi, this is a User page.
    </div>

</template>
