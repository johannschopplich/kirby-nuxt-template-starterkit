export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt-kql'],

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

  experimental: {
    typescriptBundlerResolution: true,
  },

  typescript: {
    // Recommended: type check in dev and on build
    // typeCheck: true,
    shim: false,
  },
})
