<template>
    <a v-if="external" :href="props.to" target="_blank" rel="noopener noreferrer" :class="`${props.cls} bg-white rounded-lg border border-blue-950 hover:bg-blue-950 hover:text-white transition-colors flex flex-row items-center`">
        <font-awesome-icon :class="`w-5 h-5 ${props.text ? 'mr-2' : ''}`" :icon="props.icon" /> {{ props.text }}
    </a>
    <NuxtLink v-else :to="props.to" :class="`${props.cls} bg-white rounded-lg border border-blue-950 hover:bg-blue-950 hover:text-white transition-colors flex flex-row items-center`">
        <font-awesome-icon :class="`w-5 h-5 ${props.text ? 'mr-2' : ''}`" :icon="props.icon" /> {{ props.text }}
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        to: String,
        text: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
        },
        external: {
            type: Boolean,
            required: false,
            default: false,
        },
        cls: {
            type: String,
            required: false,
        },
    })
</script>