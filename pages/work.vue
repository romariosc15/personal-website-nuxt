<template>
    <div class="bg-white p-12 rounded-lg shadow-lg mt-8">
        <div class="flex flex-row items-center space-x-6">
            <h1 class="text-4xl font-bold text-title text-blue-950">Portfolio</h1>
            <div class="bg-orange-400 w-40 h-0.5"></div>
        </div>
        <div class="mt-10 grid grid-cols-2 gap-6">
            <Card
                v-for="item in projects"
                :key="item.id"
            >
                <div>
                    <a class="overflow-hidden block" :href="item.productionUrl" target="_blank" rel="noopener noreferrer">
                        <img class="rounded-xl object-cover w-full h-[250px] scale-100 hover:scale-110 transition-transform transform" :src="item.image" alt="">
                    </a>
                    <div class="mt-4">
                        <h3 class="text-xl font-medium text-blue-950">{{ item.name }}</h3>
                        <p class="text-sm text-blue-950 mt-2">{{ item.description }}</p>
                        <div class="space-x-4 mt-4">
                            <a class="font-medium transition-colors hover:text-indigo-400" :href="item.repositoryUrl" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon icon="fa-brands fa-github" size="xl" />
                            </a>
                            <a class="font-medium transition-colors hover:text-indigo-400" :href="item.productionUrl" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup>
    const projects = [
        {
            id: 1,
            name: 'Enjoyb',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            repositoryUrl: 'https://github.com/romariosc15/enjoyb',
            productionUrl: 'https://enjoyb.vercel.app/',
            image: '/images/projects/enjoyb.png',
        },
        {
            id: 2,
            name: 'Enjoyb',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            repositoryUrl: 'https://github.com/romariosc15/enjoyb',
            productionUrl: 'https://enjoyb.vercel.app/',
            image: '/images/projects/enjoyb.png',
        },
        {
            id: 3,
            name: 'Enjoyb',
            description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            repositoryUrl: 'https://github.com/romariosc15/enjoyb',
            productionUrl: 'https://enjoyb.vercel.app/',
            image: '/images/projects/enjoyb.png',
        }
    ]
</script>