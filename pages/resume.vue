<template>
  <div>
    <NavigationNavbar />
    <div class="bg-slate-700 p-4 lg:p-12 rounded-lg shadow-lg mt-8">
      <div class="flex flex-row items-center space-x-6">
        <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
          Resume
        </h1>
        <div class="bg-yellow-500 w-28 lg:w-40 h-1 rounded-lg" />
      </div>
      <div class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 text-white">
        <div>
          <h2 class="text-xl lg:text-2xl font-medium">
            <font-awesome-icon
              icon="fa-solid fa-graduation-cap"
              class="mr-2"
            /> Education
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in education"
              :key="item.id"
            >
              <div>
                <span class="text-xs lg:text-sm">{{ item.period }}</span>
                <h3 class="text-lg lg:text-xl font-semibold">
                  {{ item.career }}
                </h3>
                <p class="text-sm lg:text-base font-medium">
                  {{ `${item.entity} - ${item.location}` }}
                </p>
              </div>
            </ContainerCard>
          </div>
        </div>
        <div>
          <h2 class="text-xl lg:text-2xl font-medium">
            <font-awesome-icon
              icon="fa-solid fa-briefcase"
              class="mr-2"
            /> Experience
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in experience"
              :key="item.id"
            >
              <div>
                <span class="text-xs lg:text-sm">{{ item.period }}</span>
                <h3 class="text-lg lg:text-xl font-semibold">
                  {{ item.position }}
                </h3>
                <p class="text-sm lg:text-base font-medium">
                  {{ `${item.company} - ${item.location}` }}
                </p>
              </div>
            </ContainerCard>
          </div>
        </div>
        <div>
          <h2 class="text-xl lg:text-2xl font-medium">
            <font-awesome-icon
              icon="fa-solid fa-award"
              class="mr-2"
            /> Certifications
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in certifications"
              :key="item.id"
            >
              <div>
                <span class="text-xs lg:text-sm">{{ item.period }}</span>
                <h3 class="text-lg lg:text-xl font-semibold">
                  {{ item.topic }}
                </h3>
                <p class="text-sm lg:text-base font-medium">
                  {{ `${item.entity}` }}
                </p>
              </div>
            </ContainerCard>
          </div>
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
    period: 'March 2015 - December 2019',
    career: 'Systems engineering',
    location: 'Ilo',
  },
];
const experience = [
  {
    id: 101,
    company: 'Intive',
    period: 'December 2022 - Present',
    position: 'Software Engineer',
    location: 'Remote',
  },
  {
    id: 102,
    company: 'Globant',
    period: 'November 2021 - November 2022',
    position: 'Web UI Developer',
    location: 'Remote',
  },
  {
    id: 103,
    company: 'Oktana',
    period: 'September 2020 - Octubre 2021',
    position: 'Software Engineer',
    location: 'Remote',
  },
  {
    id: 104,
    company: 'Innovahora',
    period: 'September 2019 - August 2020',
    position: 'Full-Stack Web Developer',
    location: 'Remote',
  },
];
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
];
</script>
