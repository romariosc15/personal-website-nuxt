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
          Front-end developer
        </p>
        <div class="bg-yellow-500 w-20 h-1 ml-auto mr-auto mt-3 rounded-lg" />
      </div>
      <div class="flex flex-row gap-4">
        <NavigationButtonLink
          to="https://www.linkedin.com/in/romariosarmiento/"
          icon="fa-brands fa-linkedin-in"
          :external="true"
          cls="text-xl text-white px-3.5 py-2.5"
        />
        <NavigationButtonLink
          to="https://github.com/romariosc15"
          icon="fa-brands fa-github"
          :external="true"
          cls="text-xl text-white px-3.5 py-2.5"
        />
      </div>
      <div>
        <NavigationButtonLink
          to="https://drive.google.com/file/d/1853-ZefTNo52pOmyNsmBaRn_1mfFy0QC/view?usp=sharing"
          text="Download CV"
          icon="fa-solid fa-download"
          :external="true"
          cls="text-white text-base lg:text-lg font-semibold px-6 py-3"
        />
      </div>
    </div>
  </div>
</template>