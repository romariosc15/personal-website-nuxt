<template>
    <header class="flex flex-row py-4 items-center">
        <img class="object-cover w-14" src="@/assets/images/logo-rs.png" alt="App logo">
        <ul class="ml-auto space-x-6 text-sm text-white font-medium">
            <li class="inline-block">
                <ButtonLink to="/" text="Home" :cls="`px-5 py-2.5 ${isButtonActive('index')}`" icon="fa-solid fa-home"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/about" text="About" :cls="`px-5 py-2.5 ${isButtonActive('about')}`" icon="fa-solid fa-user"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/resume" text="Resume" :cls="`px-5 py-2.5 ${isButtonActive('resume')}`" icon="fa-solid fa-file-lines"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/work" text="Work" :cls="`px-5 py-2.5 ${isButtonActive('work')}`" icon="fa-solid fa-laptop-code"/>
            </li>
        </ul>
    </header>
</template>

<script setup>
    const isButtonActive = (current) => {
        const route = useRoute()
        return route.name === current ? 'bg-red-500 text-white' : ''
    }
</script>