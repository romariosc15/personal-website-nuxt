<template>
  <div>
    <NavigationNavbar />
    <div class="bg-slate-700 shadow-lg mt-8 rounded-lg">
      <div class="flex flex-row items-center space-x-6 px-4 lg:px-12 pt-6 lg:pt-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
          About me
        </h1>
        <div class="bg-yellow-500 w-28 lg:w-40 h-1 rounded-lg" />
      </div>
      <div class="mt-6 lg:mt-10">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8 space-y-4 px-4 lg:px-12 pb-6 lg:pb-12">
          <div>
            <img
              class="rounded-xl object-cover w-full min-h-[300px]"
              src="@/assets/images/index.jpg"
              alt="Profile picture"
            >
          </div>
          <div class="col-span-2 space-y-6">
            <div>
              <h2 class="text-2xl font-semibold text-white">
                Who am I?
              </h2>
              <p class=" text-gray-200 mt-4">
                I'm front-end developer from Ilo, Peru, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
              </p>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-white">
                Personal info
              </h2>
              <div class="mt-4 flex flex-col lg:flex-row flex-wrap gap-6">
                <div class="flex flex-row items-center gap-4">
                  <font-awesome-icon
                    icon="fa-solid fa-envelope"
                    size="xl"
                    class="text-yellow-500"
                  />
                  <div>
                    <p class="text-sm text-white">
                      E-mail
                    </p>
                    <a
                      class="font-medium text-gray-200 transition-colors hover:text-red-500"
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
                    <p class="text-sm text-white">
                      LinkedIn
                    </p>
                    <a
                      class="font-medium text-gray-200 transition-colors hover:text-red-500"
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
                    <p class="text-sm text-white">
                      Location
                    </p>
                    <h6 class="font-medium text-gray-200">
                      Ilo, Peru
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 lg:p-12 bg-slate-600 rounded-b-lg">
          <div class="flex flex-row items-center space-x-6">
            <h2 class="text-3xl lg:text-4xl text-white font-bold">
              <font-awesome-icon
                icon="fa-solid fa-graduation-cap"
                class="mr-2"
              /> Skills
            </h2>
            <div class="bg-yellow-500 w-28 h-1 rounded-lg" />
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
  </div>
</template>

<script setup>
const skills = ['JavaScript', 'TypeScript', 'Git', 'React', 'Next.js', 'Vue', 'Nuxt', 'Jest', 'Node.js', 'Express', 'C#', 'SQL', 'REST API', 'Docker', 'Contentful CMS', 'Figma', 'Postman', 'Scrum'];
</script>