<template>
  <div>
    <NavigationNavbar />  
    <div class="bg-slate-700 px-4 py-6 md:p-8 lg:p-12 rounded-lg shadow-lg mt-10">
      <div class="flex flex-row items-center space-x-6">
        <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
          {{ $t('work.title') }}
        </h1>
        <div class="bg-yellow-500 w-24 lg:w-40 h-1 rounded-lg" />
      </div>
      <div class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-8 lg:px-0">
        <ContainerCard
          v-for="item in projects"
          :key="item.id"
          background-color="bg-slate-600 p-6 md:p-8 lg:p-6"
        >
          <div>
            <a
              class="overflow-hidden block"
              :href="item.productionUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="rounded-xl object-cover w-full h-[200px] lg:[175px] xl:h-[250px] scale-100 hover:scale-105 transition-transform transform"
                :src="item.image"
                :alt="item.name"
              >
            </a>
            <div class="mt-4">
              <h3 class="text-xl xl:text-2xl font-semibold text-white">
                {{ item.name }}
              </h3>
              <p class="text-sm xl:text-base text-gray-200 mt-2">
                {{ item.description[locale] }}
              </p>
              <div class="space-x-4 xl:space-x-6 mt-4 text-sm md:text-base xl:text-lg">
                <a
                  class="font-medium transition-colors hover:text-yellow-500 duration-300"
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
                  class="font-medium transition-colors hover:text-yellow-500 duration-300"
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
  </div>
</template>

<script setup>
const { locale } = useI18n()
const projects = [
  {
    id: 1,
    name: 'Enjoyb',
    description: {
      'en': `Application developed in Next.js and integrated with Contentful API to manage and post job opportunities.`,
      'es': `Aplicación desarrollada en Next.js e integrada con Contentful API para gestionar y publicar oportunidades de trabajo.`
    },
    repositoryUrl: 'https://github.com/romariosc15/enjoyb',
    productionUrl: 'https://enjoyb.vercel.app/',
    image: '/images/projects/enjoyb.png',
  },
  {
    id: 2,
    name: 'Country quiz',
    description: {
      'en': `Application created with Vue 3 to generate quizzes with random questions about countries.`,
      'es': `Aplicación creada con Vue 3 para generar cuestionarios con preguntas aleatorias sobre países.`
    },
    repositoryUrl: 'https://github.com/romariosc15/country-quiz',
    productionUrl: 'https://country-quiz-sigma-three.vercel.app/',
    image: '/images/projects/country-quiz.png',
  },
];
</script>
