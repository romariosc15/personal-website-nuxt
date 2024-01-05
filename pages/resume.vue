<template>
  <div>
    <NavigationNavbar />
    <div class="bg-slate-700 px-4 py-6 md:p-8 lg:p-12 rounded-lg shadow-lg mt-10">
      <div class="flex flex-row items-center space-x-6">
        <h1 class="text-3xl lg:text-4xl font-bold text-title text-white">
          {{ $t('resume.title') }}
        </h1>
        <div class="bg-yellow-500 w-24 lg:w-40 h-1 rounded-lg" />
      </div>
      <div class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-6 text-white">
        <div>
          <h2 class="text-xl lg:text-2xl font-medium">
            <font-awesome-icon
              icon="fa-solid fa-graduation-cap"
              class="mr-2"
            /> {{ $t('resume.education') }}
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in education"
              :key="item.id"
            >
              <div>
                <span class="text-xs xl:text-sm">{{ item.period }}</span>
                <h3 class="text-lg xl:text-xl font-medium">
                  {{ item.career }}
                </h3>
                <p class="text-sm xl:text-base">
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
            /> {{ $t('resume.experience') }}
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in experience"
              :key="item.id"
            >
              <div>
                <span class="text-xs xl:text-sm">{{ item.period }}</span>
                <h3 class="text-lg xl:text-xl font-medium">
                  {{ item.position }}
                </h3>
                <p class="text-sm xl:text-base">
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
            /> {{ $t('resume.certifications') }}
          </h2>
          <div class="mt-4 gap-4 lg:gap-6 grid md:grid-cols-2 lg:grid-cols-1">
            <ContainerCard
              v-for="item in certifications"
              :key="item.id"
            >
              <div>
                <span class="text-xs xl:text-sm">{{ item.period }}</span>
                <h3 class="text-lg xl:text-xl font-medium">
                  {{ item.topic }}
                </h3>
                <p class="text-sm xl:text-base">
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
    entity: 'UNAM Moquegua',
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
    position: 'Full-Stack Developer',
    location: 'Remote',
  },
];
const certifications = [
  {
    id: 201,
    entity: 'SCRUMstudy',
    period: 'July 2021',
    topic: 'Scrum Fundamentals',
  },
  {
    id: 201,
    topic: 'Javascript Developer I',
    entity: 'Salesforce',
    period: 'Jun 2021',
  },
];
</script>
