import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
  target: 'static',

  srcDir: './src',

  // Global CSS
  css: [
    '~/assets/theme/main.sass',
  ],

  // Nuxt.js dev-modules
  buildModules: [
    '@nuxt/image-edge',
  ],

  //Nuxt.js modules
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
  ],

  content: {
    documentDriven: true,
  },

  components: [{
    path: '~/components/pageWidgets',
    global: true
  }],

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
