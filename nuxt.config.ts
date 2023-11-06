import LocaleModule from './locales/module'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    LocaleModule,
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix',
  },
  devtools: { enabled: true },
  pages: true,
  app: {
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
