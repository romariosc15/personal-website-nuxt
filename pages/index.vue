<template>
    <div class="flex flex-col items-center justify-center h-full space-y-4">
        <div class="text-blue-950 text-center">
            <h1 class="text-4xl font-semibold text-title">Romario Sarmiento</h1>
            <p class="text-xl font-normal text-title">Front-end developer</p>
        </div>
        <div class="flex flex-row gap-4">
            <ButtonLink to="https://www.linkedin.com/in/romariosarmiento/" icon="fa-brands fa-linkedin-in" :external="true" cls="text-blue-600"/>
            <ButtonLink to="https://www.linkedin.com/in/romariosarmiento/" icon="fa-brands fa-github" :external="true" cls="text-black"/>
        </div>
        <div>
            <ButtonLink to="/cv.pdf" text="Download CV" icon="fa-solid fa-download" cls="text-blue-950 font-medium"/>
        </div>
    </div>
</template>