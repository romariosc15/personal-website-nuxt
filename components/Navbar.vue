<template>
    <header class="flex flex-row py-4 items-center">
        <img class="object-cover w-12" src="@/assets/images/logo-rs.png" alt="">
        <ul class="ml-auto space-x-6 text-sm text-blue-950 font-medium">
            <li class="inline-block">
                <ButtonLink to="/" text="Home" :cls="`px-4 py-2 ${isButtonActive('index')}`" icon="fa-solid fa-home"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/about" text="About" :cls="`px-4 py-2 ${isButtonActive('about')}`" icon="fa-solid fa-user"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/resume" text="Resume" :cls="`px-4 py-2 ${isButtonActive('resume')}`" icon="fa-solid fa-file-lines"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/work" text="Work" :cls="`px-4 py-2 ${isButtonActive('work')}`" icon="fa-solid fa-laptop-code"/>
            </li>
        </ul>
    </header>
</template>

<script setup>
    const isButtonActive = (current) => {
        const route = useRoute()
        return route.name === current ? 'bg-blue-950 text-white' : ''
    }
</script>