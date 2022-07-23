export const i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'en.js',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'RU',
      file: 'ru.js',
    },
    {
      code: 'id',
      iso: 'id-ID',
      name: 'ID',
      file: 'id.js',
    },
  ],
  lazy: true,
  langDir: '/locales/',
  defaultLocale: 'en',
  detectBrowserLanguage: {
    alwaysRedirect: true,
    fallbackLocale: 'en',
    onlyOnRoot: true,
  },
}
