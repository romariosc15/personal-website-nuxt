<template>
    <div class="bg-white shadow-lg mt-8 rounded-lg">
        <div class="flex flex-row items-center space-x-6 px-12 pt-12">
            <h1 class="text-4xl font-bold text-title text-blue-950">About me</h1>
            <div class="bg-orange-400 w-40 h-0.5"></div>
        </div>
        <div class="mt-10">
            <div class="grid grid-cols-3 gap-8 px-12 pb-12">
                <div>
                    <img class="rounded-xl object-cover w-full min-h-[300px]" src="@/assets/images/index.jpg" alt="">
                </div>
                <div class="col-span-2 space-y-6">
                    <div>
                        <h2 class="text-2xl font-semibold text-blue-950">Who am I?</h2>
                        <p class=" text-blue-950 mt-4">
                            I'm front-end developer from Ilo, Peru, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                        </p>
                    </div>
                    <div>
                        <h2 class="text-2xl font-semibold text-blue-950">Personal info</h2>
                        <div class="mt-4 flex flex-row gap-6">
                            <div class="flex flex-row items-center gap-4">
                                <font-awesome-icon icon="fa-solid fa-envelope" size="xl" class="text-blue-400" />
                                <div>
                                    <p class="text-sm text-gray-700">E-mail</p>
                                    <a class="font-medium transition-colors hover:text-indigo-400" href="mailto:romariosc15@outlook.com">romariosc15@outlook.com</a>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" size="xl" class="text-blue-600" />
                                <div>
                                    <p class="text-sm text-gray-700">LinkedIn</p>
                                    <a class="font-medium transition-colors hover:text-indigo-400" target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/romariosarmiento/">Romario Sarmiento</a>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4">
                                <font-awesome-icon icon="fa-solid fa-location-dot" size="xl" class="text-violet-400" />
                                <div>
                                    <p class="text-sm text-gray-700">Location</p>
                                    <h6 class="font-medium">Ilo, Peru</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-12 bg-gray-50 rounded-b-lg">
                <h2 class="text-2xl text-blue-950 font-semibold">
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="mr-2" /> Skills
                </h2>
                <div class="flex flex-row flex-wrap gap-4 text-sm mt-10">
                    <Card
                        cls="px-4 py-2"
                        v-for="item in skills"
                        :key="item"
                    >
                        {{ item }}
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const skills = ['JavaScript', 'TypeScript', 'Git', 'React', 'Next', 'Vue', 'Nuxt', 'Jest', 'Node.js', 'Express', 'C#', 'SQL', 'REST API', 'Docker', 'Contentful CMS', 'Figma', 'Postman', 'Scrum']
</script>