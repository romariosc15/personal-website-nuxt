<template>
    <div :class="`${backgroundColor ? backgroundColor : getBackgroundColor()} rounded-md ${props.cls}`">
        <slot />
    </div>
</template>

<script setup>
    const props = defineProps({
        cls: {
            type: String,
            required: false,
            default: 'p-4',
        },
        backgroundColor: {
            type: String,
            required: false,
            default: '',
        }
    })
    let selector = Math.floor(Math.random() * 5)
    const getBackgroundColor = () => {
        if(selector === 0) return 'bg-sky-500'
        if(selector === 1) return 'bg-teal-500'
        if(selector === 2) return 'bg-pink-500'
        if(selector === 3) return 'bg-purple-500'
        if(selector === 4) return 'bg-orange-500'
    }
</script>