<template>
  <Listbox
    v-model="selectedItem"
    @update:model-value="onUpdate"
  >
    <div class="relative">
      <ListboxButton
        :class="`transition-colors ${props.cls ? props.cls : 'bg-white'} relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm hover:cursor-pointer`"
      >
        <span class="block truncate">{{ selectedItem.name }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
          />
        </span>
      </ListboxButton>
  
      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="item in props.options"
            :key="item.name"
            :value="item"
            as="template"
          >
            <li
              class="cursor-default hover:cursor-pointer hover:bg-yellow-100 px-4 py-2"
            >
              {{ item.name }}
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
  
<script setup>
import {
Listbox,
ListboxButton,
ListboxOptions,
ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    nameProperty: {
        type: String,
        required: false,
        default: '',
    },
    idProperty: {
        type: String,
        required: false,
        default: '',
    },
    cls: {
        type: String,
        required: false,
        default: '',
    },
});

const emits = defineEmits({
    'update:modelValue': (newValue) => newValue,
})

const onUpdate = (newValue) => {
    emits('update:modelValue', newValue)
}

const selectedItem = ref(props.modelValue)
</script>