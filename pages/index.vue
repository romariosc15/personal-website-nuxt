<template>
    <div class="flex flex-col items-center justify-center gap-4 min-h-[85vh]">
        <div class="mb-4">
            <img class="rounded-full object-cover w-[300px] h-[300px]" src="@/assets/images/index.jpg" alt="">
        </div>
        <div class="text-blue-950 text-center">
            <h1 class="text-4xl font-bold text-title">Romario Sarmiento</h1>
            <p class="text-xl font-normal text-title">Front-end developer</p>
            <div class="bg-orange-400 w-20 h-0.5 ml-auto mr-auto mt-3"></div>
        </div>
        <div class="flex flex-row gap-4">
            <ButtonLink to="https://www.linkedin.com/in/romariosarmiento/" icon="fa-brands fa-linkedin-in" :external="true" cls="text-xl text-blue-600 px-3 py-2" />
            <ButtonLink to="https://github.com/romariosc15" icon="fa-brands fa-github" :external="true" cls="text-xl text-black px-3 py-2" />
        </div>
        <div>
            <ButtonLink to="https://drive.google.com/file/d/1853-ZefTNo52pOmyNsmBaRn_1mfFy0QC/view?usp=sharing" text="Download CV" icon="fa-solid fa-download" :external="true" cls="text-blue-950 font-semibold px-5 py-2" />
        </div>
    </div>
</template>