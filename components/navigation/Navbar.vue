<template>
  <header class="flex flex-row py-4 items-center justify-between lg:justify-normal">
    <img
      class="object-cover w-12 lg:w-14"
      src="@/assets/images/logo-rs.png"
      alt="App logo"
    >
    <ul class="hidden lg:block ml-auto space-x-6 text-sm text-white font-medium">
      <li
        v-for="route in routes"
        :key="route.name"
        class="inline-block"
      >
        <NavigationButtonLink
          :to="route.url"
          :text="route.name"
          :cls="`px-5 py-2.5 ${isButtonActive(route.componentName)}`"
          :icon="route.icon"
        />
      </li>
    </ul>
    <Menu
      as="div"
      class="relative inline-block text-left"
    >
      <div>
        <MenuButton class="block lg:hidden text-gray-200">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            size="xl"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem
              v-for="route in routes"
              :key="route.name"
              v-slot="{ active }"
            >
              <NuxtLink
                :to="route.url"
                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
              >
                <font-awesome-icon
                  class="w-4 h-4 mr-1"
                  :icon="route.icon"
                /> {{ route.name }}
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script setup>
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';
const isButtonActive = (current) => {
  const route = useRoute();
  return route.name === current.toLowerCase() ? 'bg-red-500 text-white' : '';
};
const routes = [
  {name: 'Home', icon: 'fa-solid fa-home', url: '/', componentName: 'index'},
  {name: 'About', icon: 'fa-solid fa-user', url: '/about', componentName: 'about'},
  {name: 'Resume', icon: 'fa-solid fa-file-lines', url: '/resume', componentName: 'resume'},
  {name: 'Work', icon: 'fa-solid fa-laptop-code', url: '/work', componentName: 'work'},
];
</script>
