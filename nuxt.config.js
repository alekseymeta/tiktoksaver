export default {
  target: 'static',

  head: {
    title: 'tiktoknuxt',
    htmlAttrs: {
      lang: 'en',
      'data-theme': 'dracula'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: 'icon', type: 'shortcut icon', href: 'favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'icon', type: "image/png", sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: "image/png", sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      { rel: "mask-icon", href: "favicon/safari-pinned-tab.svg", color: "#5bbad5" },
      { name:"msapplication-TileColor", content:"#603cba" },
      { rel: 'stylesheet', type: 'text/css', href: 'css/full.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' }
    ]
  },

  css: [
    '~/assets/font/stylesheet.css'
  ],

  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: '🇺🇸  English',
          file: 'en.js'
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          name: '🇷🇺  Русский',
          file: 'ru.js'
        },
        {
          code: 'id',
          iso: 'id-ID',
          name: '🇮🇩  Bahasa Indonesia',
          file: 'id.js'
        }
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en',
      detectBrowserLanguage: {
        alwaysRedirect: true,
        fallbackLocale: 'en',
        onlyOnRoot: true
      }
    }
    ],
    ['@nuxtjs/yandex-metrika',
      {
        id: '',
        webvisor: true
      }
    ]
  ],

  build: {
  }
}
