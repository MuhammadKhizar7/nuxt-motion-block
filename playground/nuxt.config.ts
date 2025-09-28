export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '../src/module',
  ], devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-09-28',
  motionBlock: {
    prefix: 'M',
  },
})
