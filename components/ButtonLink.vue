<template>
    <NuxtLink 
        :to="props.to" :target="external ? '_blank' : null" rel="noopener noreferrer" 
        :class="`${props.cls} rounded-md border border-blue-950 hover:bg-blue-950 hover:text-white transition-colors flex flex-row items-center`"
    >
        <font-awesome-icon :class="`${props.text ? 'mr-2' : ''}`" :icon="props.icon" /> {{ props.text }}
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