<template>
    <div class="bg-white p-12 rounded-lg shadow-lg mt-8">
        <div class="flex flex-row items-center space-x-6">
            <h1 class="text-4xl font-bold text-title text-blue-950">Resume</h1>
            <div class="bg-rose-500 w-40 h-0.5"></div>
        </div>
        <div class="mt-6 grid grid-cols-3 gap-6 text-blue-950">
            <div>
                <h2 class="text-2xl font-medium">
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="mr-2" /> Education
                </h2>
                <div class="mt-4 space-y-6">
                    <Card
                        v-for="item in education"
                        :key="item.id"
                    >
                        <div>
                            <span class="text-sm">{{ item.period }}</span>
                            <h3 class="text-xl font-medium">{{ item.career }}</h3>
                            <p>{{ `${item.entity} - ${item.location}` }}</p>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-medium">
                    <font-awesome-icon icon="fa-solid fa-briefcase" class="mr-2" /> Experience
                </h2>
                <div class="mt-4 space-y-6">
                    <Card
                        v-for="item in experience"
                        :key="item.id"
                    >
                        <div>
                            <span class="text-sm">{{ item.period }}</span>
                            <h3 class="text-xl font-medium">{{ item.position }}</h3>
                            <p>{{ `${item.company} - ${item.location}` }}</p>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-medium">
                    <font-awesome-icon icon="fa-solid fa-award" class="mr-2" /> Certifications
                </h2>
                <div class="mt-4 space-y-6">
                    <Card
                        v-for="item in certifications"
                        :key="item.id"
                    >
                        <div>
                            <span class="text-sm">{{ item.period }}</span>
                            <h3 class="text-xl font-medium">{{ item.topic }}</h3>
                            <p>{{ `${item.entity}` }}</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const education = [
        {
            id: 1,
            entity: 'Universidad Nacional de Moquegua',
            period: '2015 - 2019',
            career: 'Systems engineering',
            location: 'Ilo'
        }
    ]
    const experience = [
        {
            id: 101,
            company: 'Intive',
            period: 'December 2022 - Present',
            position: 'Software Engineer',
            location: 'Remote'
        },
        {
            id: 102,
            company: 'Globant',
            period: 'November 2021 - November 2022',
            position: 'Web UI Developer',
            location: 'Remote'
        },
        {
            id: 103,
            company: 'Oktana',
            period: 'September 2020 - Octubre 2021',
            position: 'Software Engineer',
            location: 'Remote'
        },
    ]
    const certifications = [
        {
            id: 201,
            entity: 'SCRUMstudy',
            period: 'July 2021',
            topic: 'Scrum Fundamentals Certified',
        },
        {
            id: 201,
            topic: 'Certified Javascript Developer I',
            entity: 'Salesforce',
            period: 'Jun 2021',
        },
    ]
</script>