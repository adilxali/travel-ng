<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
   
});

const emit = defineEmits(['update:show']);

const isVisible = ref(props.show);
const drawerRef = ref<HTMLDivElement | null>(null);
const handleOverlayClick = (event: MouseEvent) => {
    if (drawerRef.value && !drawerRef.value.contains(event.target as Node)) {
        closeDrawer();
        console.log("Click")
    }
};

onMounted(() => {
    if (isVisible.value) {
        document.addEventListener('click', handleOverlayClick);
    }
});

onUnmounted(() => {
    document.removeEventListener('click', handleOverlayClick);
});

watch(() => props.show, (newVal) => {
    isVisible.value = newVal;
});



const closeDrawer = () => {
    emit('update:show', false);
    console.log("Close")
};

watch(isVisible, (newVal) => {
    if (!newVal) {
        closeDrawer();
    }
});
</script>
<template>
    <Transition name="slide-fade">
        <div v-if="isVisible" class="fixed inset-0 z-50">
            <div @click="closeDrawer"
                class="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm">
            </div>
            <div ref="drawerRef" class="absolute bg-white shadow-lg  w-[70%] h-full right-0">
                <slot />
            </div>
        </div>
    </Transition>
</template>


<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.7s ease, opacity 0.9s ease;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.slide-fade-enter-from {
    transform: translateX(100%);
}

.slide-fade-leave-to {
    transform: translateX(100%);
}

.slide-fade-right-enter-from {
    transform: translateX(-100%);
}

.slide-fade-right-leave-to {
    transform: translateX(100%);
}

.slide-fade-top-enter-from {
    transform: translateY(-100%);
}

.slide-fade-top-leave-to {
    transform: translateY(100%);
}

.slide-fade-bottom-enter-from {
    transform: translateY(100%);
}

.slide-fade-bottom-leave-to {
    transform: translateY(-100%);
}
</style>