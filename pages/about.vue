<template>
  <div>
    <NavigationNavbar />
    <div class="bg-slate-700 shadow-lg mt-10 rounded-lg">
      <div class="flex flex-row items-center gap-6 px-4 md:px-12 lg:px-24 xl:px-12 pt-6 md:pt-12 xl:pt-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
          {{ $t('about.title') }}
        </h1>
        <div class="bg-yellow-500 w-24 lg:w-40 h-1 rounded-lg" />
      </div>
      <div class="xl:grid xl:grid-cols-3 items-center lg:gap-8 px-4 md:px-12 lg:px-24 xl:px-12 pb-6 md:pb-12 xl:pb-12 mt-6 lg:mt-10">
        <div>
          <img
            class="rounded-xl object-cover w-full md:w-3/4 lg:w-3/5 xl:w-full mx-auto"
            src="@/assets/images/index.jpg"
            alt="Profile picture"
          >
        </div>
        <div class="col-span-2 space-y-6">
          <div class="mt-6 lg:mt-8 xl:mt-0">
            <h2 class="text-xl lg:text-2xl font-semibold text-white">
              {{ $t('about.whoAmI') }}
            </h2>
            <p class="text-sm lg:text-base text-gray-200 mt-4">
              {{ $t('about.aboutDescription') }}
            </p>
          </div>
          <div>
            <h2 class="text-xl lg:text-2xl font-semibold text-white">
              {{ $t('about.personalInfo') }}
            </h2>
            <div class="mt-4 flex flex-col lg:flex-row flex-wrap gap-6">
              <div class="flex flex-row items-center gap-4">
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  size="xl"
                  class="text-yellow-500"
                />
                <div>
                  <p class="text-xs lg:text-sm text-white">
                    {{ $t('about.email') }}
                  </p>
                  <a
                    class="text-sm lg:text-base font-medium text-gray-200 transition-colors hover:text-red-500"
                    href="mailto:romariosc15@outlook.com"
                  >romariosc15@outlook.com</a>
                </div>
              </div>
              <div class="flex flex-row items-center gap-4">
                <font-awesome-icon
                  icon="fa-brands fa-linkedin-in"
                  size="xl"
                  class="text-yellow-500"
                />
                <div>
                  <p class="text-xs lg:text-sm text-white">
                    LinkedIn
                  </p>
                  <a
                    class="text-sm lg:text-base font-medium text-gray-200 transition-colors hover:text-red-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/romariosarmiento/"
                  >Romario Sarmiento</a>
                </div>
              </div>
              <div class="flex flex-row items-center gap-4">
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  size="xl"
                  class="text-yellow-500"
                />
                <div>
                  <p class="text-xs lg:text-sm text-white">
                    {{ $t('about.location') }}
                  </p>
                  <h6 class="text-sm lg:text-base font-medium text-gray-200">
                    Ilo, Peru
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 py-6 md:p-12 lg:px-24 lg:py-12 xl:p-12 bg-slate-600 rounded-b-lg">
        <div class="flex flex-row items-center gap-6">
          <h2 class="text-3xl lg:text-4xl text-white font-bold">
            <font-awesome-icon
              icon="fa-solid fa-graduation-cap"
              class="mr-2 !hidden md:!inline-block"
            /> {{ $t('about.skills') }}
          </h2>
          <div class="bg-yellow-500 w-24 lg:w-40 h-1 rounded-lg" />
        </div>
        <div class="flex flex-row flex-wrap gap-4 text-sm mt-6 lg:mt-10 text-white font-medium">
          <ContainerCard
            v-for="item in skills"
            :key="item"
            cls="px-4 py-2"
          >
            {{ item }}
          </ContainerCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = ['JavaScript', 'TypeScript', 'Git', 'React', 'Next.js', 'Vue', 'Nuxt', 'Jest', 'Node.js', 'Express', 'C#', 'SQL', 'REST API', 'Docker', 'Contentful CMS', 'Figma', 'Postman', 'Scrum'];
</script>