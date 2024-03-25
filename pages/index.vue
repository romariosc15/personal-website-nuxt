<template>
  <div>
    <NavigationNavbar />
    <div class="flex flex-col items-center justify-center gap-4 min-h-[85vh]">
      <div class="mb-4">
        <img
          class="rounded-full object-cover w-[250px] lg:w-[300px] h-[250px] lg:h-[300px]"
          src="@/assets/images/index.jpg"
          alt="Profile picture"
        >
      </div>
      <div class="text-center">
        <h1 class="text-red-400 text-3xl lg:text-4xl font-bold text-title">
          Romario Sarmiento
        </h1>
        <p class="text-white text-xl lg:text-2xl font-medium text-title">
          Full-stack developer
        </p>
        <div class="bg-yellow-500 w-20 h-1 ml-auto mr-auto mt-4 mb-1 rounded-lg" />
      </div>
      <div class="flex flex-row gap-4">
        <NuxtLink
          aria-label="Open Romario's LinkedIn profile"
          to="https://www.linkedin.com/in/romariosarmiento/"
          target="_blank"
          rel="noopener noreferrer"
          :class="`text-white text-lg lg:text-xl py-3 px-3.5 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex flex-row items-center`"
        >
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
          />
        </NuxtLink>
        <NuxtLink
          aria-label="Open Romario's GitHub repository"
          to="https://github.com/romariosc15"
          target="_blank"
          rel="noopener noreferrer"
          :class="`text-white text-lg lg:text-xl py-3 px-3.5 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex flex-row items-center`"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
          />
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://drive.google.com/file/d/1MwKp9nMbgITAzfTaGjI6_PmrAiBKqeX6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          :class="`text-white text-base lg:text-lg font-semibold px-6 py-3 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex flex-row items-center`"
        >
          <font-awesome-icon
            class="mr-2"
            icon="fa-solid fa-download"
          /> {{ $t('home.downloadCv') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>