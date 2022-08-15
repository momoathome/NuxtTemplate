import { defineNuxtConfig } from 'nuxt'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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

  css: ['~/assets/normalize.css', '~/assets/main.css'],

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`
    transformers: [transformerVariantGroup()],

    // core options
    /* @unocss-include */

    shortcuts: [
      ['nav-item-link', 'no-underline transition py-2 px-4 text-xl text-dark-800 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white lg:( text-lg py-2.5 )'],
      ['dropDown-item', 'block px-4 py-2 w-30% md:w-75% lg:(w-full flex justify-center !px-0 !py-2 hover:bg-light-700/60 dark:hover:bg-gray-600 )'],
      ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition hover:( opacity-100 text-teal-600 ) text-dark-800 dark:text-light-900 !outline-none !border-none'],
      ['counter-btn', 'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-teal-600 rounded-md border-none hover:bg-teal-500 focus:( outline-none ring ring-teal-300 ring-opacity-80 )'],
      ['bar', 'block w-25px h-3px my-5px mx-auto transition bg-primary dark:bg-light-900'],
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
