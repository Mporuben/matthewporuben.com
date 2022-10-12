import {defineNuxtConfig} from "nuxt";

export default defineNuxtConfig({
  target: 'static',

  srcDir: './src',

  // Global CSS
  css: [
    '~/assets/theme/main.sass',
  ],

  components: [{
    path: '~/components/pageWidgets',
    global: true
  }],

  // Nuxt.js dev-modules
  buildModules: [
    '@nuxt/image-edge',
  ],

  //Nuxt.js modules
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
  ],

  //NUXT_CONTENT
  content: {
    documentDriven: true,
  },

  //NUXT_IMAGE
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
