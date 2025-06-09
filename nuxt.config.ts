// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  plugins: [
    '~/plugins/vuetify.ts'
  ],
  components: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ]
})