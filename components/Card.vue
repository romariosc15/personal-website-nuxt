<template>
    <div :class="`${getBackgroundColor()} rounded-md p-4`">
        <slot />
    </div>
</template>

<script setup>
    let selector = Math.floor(Math.random() * 4)
    const getBackgroundColor = () => {
        if(selector === 0) return 'bg-rose-50'
        if(selector === 1) return 'bg-blue-50'
        if(selector === 2) return 'bg-violet-50'
        if(selector === 3) return 'bg-amber-50'
    }
</script>