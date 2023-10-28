<template>
    <header class="flex flex-row py-4 items-center">
        <h1 class="text-3xl font-bold text-blue-950">ROMARIO</h1>
        <ul class="ml-auto space-x-4 text-sm text-blue-950">
            <li class="inline-block">
                <ButtonLink to="/" text="Home" icon="fa-solid fa-home"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/about" text="About" icon="fa-solid fa-user"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/resume" text="Resume" icon="fa-solid fa-file-lines"/>
            </li>
            <li class="inline-block">
                <ButtonLink to="/work" text="Work" icon="fa-solid fa-laptop-code"/>
            </li>
        </ul>
    </header>
</template>