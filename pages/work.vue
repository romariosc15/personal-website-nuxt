<template>
  <div class="bg-slate-700 p-4 lg:p-12 rounded-lg shadow-lg mt-8">
    <div class="flex flex-row items-center space-x-6">
      <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
        Portfolio
      </h1>
      <div class="bg-yellow-500 w-28 lg:w-40 h-1 rounded-lg" />
    </div>
    <div class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ContainerCard
        v-for="item in projects"
        :key="item.id"
        background-color="bg-slate-600"
      >
        <div>
          <a
            class="overflow-hidden block"
            :href="item.productionUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="rounded-xl object-cover w-full h-[250px] scale-100 hover:scale-110 transition-transform transform"
              :src="item.image"
              :alt="item.name"
            >
          </a>
          <div class="mt-4">
            <h3 class="text-2xl font-semibold text-white">
              {{ item.name }}
            </h3>
            <p class="text-base text-gray-200 mt-2">
              {{ item.description }}
            </p>
            <div class="space-x-4 mt-4">
              <a
                class="font-medium transition-colors hover:text-yellow-500"
                :href="item.repositoryUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  icon="fa-brands fa-github"
                  size="2xl"
                />
              </a>
              <a
                class="font-medium transition-colors hover:text-yellow-500"
                :href="item.productionUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-up-right-from-square"
                  size="xl"
                />
              </a>
            </div>
          </div>
        </div>
      </ContainerCard>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: 'Enjoyb',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    repositoryUrl: 'https://github.com/romariosc15/enjoyb',
    productionUrl: 'https://enjoyb.vercel.app/',
    image: '/images/projects/enjoyb.png',
  },
  {
    id: 2,
    name: 'Enjoyb',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    repositoryUrl: 'https://github.com/romariosc15/enjoyb',
    productionUrl: 'https://enjoyb.vercel.app/',
    image: '/images/projects/enjoyb.png',
  },
  {
    id: 3,
    name: 'Enjoyb',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    repositoryUrl: 'https://github.com/romariosc15/enjoyb',
    productionUrl: 'https://enjoyb.vercel.app/',
    image: '/images/projects/enjoyb.png',
  },
];
</script>
