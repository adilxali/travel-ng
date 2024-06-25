<script setup lang="ts">
import { ref } from 'vue';
import Editor from 'primevue/editor';
const props = defineProps<{
    mail_format?: any
}>();
</script>
<template>
    <div class="grid grid-cols-2 gap-4">
        <div class=" mb-3">
            <h4>Welcome Mail</h4>
            <Editor v-model="mail_format.welcome_mail" editorStyle="height: 320px" />
        </div>
        <div class="mb-3">
            <h4>Inclusions:</h4>
            <Editor v-model="mail_format.tour_details.inclusions" editorStyle="height: 320px" />
        </div>
        <div class="mb-3"> 
            <h4>Exclusions:</h4>
            <Editor v-model="mail_format.tour_details.exclusions" editorStyle="height: 320px" />
        </div>
        <div class="mb-3">
            <h4>T&C :</h4>
            <Editor v-model="mail_format.terms" editorStyle="height: 320px" />
        </div>
    </div>
</template>
