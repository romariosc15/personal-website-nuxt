<template>
    <div class="flex flex-col items-center justify-center gap-4 min-h-[90vh]">
        <div class="mb-4">
            <img class="rounded-full object-cover w-[300px] h-[300px]" src="@/assets/images/index.jpg" alt="">
        </div>
        <div class="text-blue-950 text-center">
            <h1 class="text-4xl font-semibold text-title">Romario Sarmiento</h1>
            <p class="text-xl font-normal text-title">Front-end developer</p>
        </div>
        <div class="flex flex-row gap-4">
            <ButtonLink to="https://www.linkedin.com/in/romariosarmiento/" icon="fa-brands fa-linkedin-in" :external="true" cls="text-blue-600 px-2 py-2"/>
            <ButtonLink to="https://github.com/romariosc15" icon="fa-brands fa-github" :external="true" cls="text-black px-2 py-2"/>
        </div>
        <div>
            <ButtonLink to="https://drive.google.com/file/d/1xkIDgcsmdEJt6che2mpz2GL2uWav4e6D/view?usp=sharing" text="Download CV" icon="fa-solid fa-download" :external="true" cls="text-blue-950 font-medium px-5 py-2"/>
        </div>
    </div>
</template>