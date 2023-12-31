import LocaleModule from './locales/module'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    LocaleModule,
    '@nuxtjs/i18n',
    'nuxt-vitest',
    '@nuxtjs/robots',
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix',
  },
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@/assets/css/transitions.css',
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  }
})
