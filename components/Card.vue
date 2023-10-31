<template>
    <div :class="`${getBackgroundColor()} rounded-md ${props.cls}`">
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
    })
    let selector = Math.floor(Math.random() * 5)
    const getBackgroundColor = () => {
        if(selector === 0) return 'bg-rose-100'
        if(selector === 1) return 'bg-cyan-100'
        if(selector === 2) return 'bg-lime-100'
        if(selector === 3) return 'bg-amber-100'
        if(selector === 4) return 'bg-orange-100'
    }
</script>