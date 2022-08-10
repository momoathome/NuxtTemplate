import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3 Snowowl Starter Template',
      titleTemplate: '%s - Nuxt 3 Snowowl Starter Template',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Snowowl Starter Template',
        },
      ],
      link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@unocss/nuxt'],

  css: ['@unocss/reset/normalize.css', '~/assets/main.css'],

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`

    // core options
    shortcuts: [
      [
        'nav-item',
        'py-3 border-b-1 border-b-gray-400 w-30% self-center lg:border-none lg:w-auto lg:px-4 lg:py-0',
      ],
      [
        'nav-item-link',
        'no-underline transition text-dark-800 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white',
      ],
      [
        'icon-btn',
        'inline-block cursor-pointer select-none opacity-75 transition hover:opacity-100 hover:text-teal-600 dark:text-light-900 text-dark-800 !outline-none !border-none',
      ],
      [
        'counter-btn',
        'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-teal-600 rounded-md border-none hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80',
      ],
      [
        'bar',
        'block w-25px h-3px my-5px mx-auto transition bg-primary dark:bg-light-900',
      ],
    ],

    rules: [],
    theme: {
      colors: {
        primary: '#0C0F18',
      },
    },
  },

  // auto import components
  components: true,
})
