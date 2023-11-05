<template>
  <NuxtLink
    :to="props.to"
    :target="external ? '_blank' : null"
    rel="noopener noreferrer"
    :class="`${props.cls} rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex flex-row items-center`"
  >
    <font-awesome-icon
      v-if="props.icon"
      :class="`${props.text ? 'mr-2' : ''}`"
      :icon="props.icon"
    /> {{ props.text }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  external: {
    type: Boolean,
    required: false,
    default: false,
  },
  cls: {
    type: String,
    required: false,
    default: '',
  },
});
</script>
