import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
  // General 
  target: 'static',
  
  srcDir: './src',
  
  css: ['~/assets/theme/main.sass'],

  components: [{
    path: '~/components/pageWidgets',
    global: true
  }],

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
