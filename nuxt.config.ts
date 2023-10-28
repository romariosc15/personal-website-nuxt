// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  pages: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/css/transitions.css', '@/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
})
