export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-kql'],

  compatibilityDate: '2024-09-23',

  runtimeConfig: {
    public: {
      siteUrl: '',
    },
  },

  kql: {
    auth: 'bearer',
  },

  nitro: {
    prerender: {
      // Prerender the index page
      routes: ['/'],
    },
  },
})
