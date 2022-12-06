import Unocss from 'unocss/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  ssr: false,

  // app
  app: {
    head: {
      title: 'Nuxt 3 Snowowl Starter Template',
      titleTemplate: '%s - Nuxt 3 Snowowl Starter Template',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Snowowl Starter Template',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@unocss/nuxt'],
  css: ['~/assets/normalize.css', '~/assets/main.css',],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#vite
  vite: {
    plugins: [
      // https://github.com/antfu/unocss
      // see unocss.config.js for config
      // see nuxt.config.ts "css" for css loading
      Unocss({ 'configFile': 'unocss.config.js' }),
    ],
  },
})
