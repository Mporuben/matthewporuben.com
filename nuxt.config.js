import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
  // General 
  target: 'static',
  
  srcDir: './src',
  
  css: ['~/theme/main.sass'],

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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

  // Nuxt dev-modules
  buildModules: [
    '@nuxt/image-edge',
  ],

  // Nuxt modules
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
  ],


  // Nuxt Content Config
  content: {
    documentDriven: true,
  },

  // Nuxt Image Config
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  }
})
