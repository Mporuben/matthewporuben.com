export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Personal website and blog of Matthew Poruben'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },
  },

  css: ['~/theme/main.sass'],

  components: [
    {
      path: '~/components/pages',
      global: true
    },
    {
      path: '~/components/reusable',
      global: true
    }
  ],

  // Nuxt modules
  modules: [
    '@nuxt/content',
    'nuxt-simple-sitemap'
  ],

  // Nuxt Content Config
  content: {
    documentDriven: true,
    highlight: {
      theme: {default: 'light-plus'}
    }
  },

  site: {
    url: 'https://matthewporuben.com',
  },

  experimental: {
    componentIslands: true // false or 'local+remote'
  },

})
