export default defineNuxtConfig({


  css: ['~/theme/main.sass'],

  srcDir: './src',

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

  components: [
    {
      path: '~/components/pageWidgets',
      global: true
    }
  ],

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // Nuxt modules
  modules: [
    '@nuxt/content',
  ],

  // Nuxt Content Config
  content: {
    documentDriven: true,
  },

})
