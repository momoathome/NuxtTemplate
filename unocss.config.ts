import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // presetMini,
  // transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
/* @unocss-include */

export default defineConfig({
  shortcuts: [
    [
      'nav-item-link',
      'no-underline transition py-2 px-4 text-lg font-bold text-dark-800 hover:text-teal-600 dark:text-gray-400 dark:hover:text-base_light lg:( text-1rem py-2.5 )',
    ],
    [
      'dropDown-item',
      'nav-item-link block w-30% md:w-75% lg:( w-full flex justify-center !px-0 !py-1 hover:bg-light-700/60 dark:hover:bg-gray-600 )',
    ],
    [
      'icon-btn',
      'cursor-pointer select-none p-0 m-0 opacity-80 transition transition-duration-200 hover:( opacity-100 text-teal-600 ) text-dark-800 dark:text-base_light !outline-none !border-none',
    ],
    [
      'counter-btn',
      'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize cursor-pointer transition-colors transform bg-teal-600 rounded-md border-none hover:bg-teal-500 focus:( outline-none ring ring-teal-300 ring-opacity-80 )',
    ],
    ['bar', 'block w-25px h-3px my-5px mx-auto transition bg-base dark:bg-base_light'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'bunny', // default provider
      fonts: {
        sans: [
          {
            name: 'Open Sans',
            italic: false,
          },
        ],
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
  preflights: [],

  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        // @ts-ignore
        if (theme.colors[c]) {
          // @ts-ignore prettier-ignore
          return { color: theme.colors[c] }
        }
      },
    ],
  ],
  theme: {
    colors: {
      base: 'rgb(var(--base))',
      base_light: 'rgb(var(--base-light))',
    },
  },
})
