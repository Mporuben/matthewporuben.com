export default {

  target: 'static',

  // Headers of the page
  head: {
    title: 'Matthew Poruben',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: "32x32" }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    '@/assets/theme/generalRules.sass',
  ],
  // Plugins to load before mounting the App

  plugins: [],
  // Nuxt.js dev-modules
  buildModules: [
    '@nuxt/image',
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID
    }]
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog/articles').fetch()
      return files.map(file =>  `blog/${file.slug}`)
    }
  },
  //Nuxt.js modules
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',

    // Doc: https://bootstrap-vue.js.org
    '@nuxt/image',
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  //  Build configuration
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: process.argv.includes("--analyse"),
    extend (config, ctx) {}
  }
}
