




export default {

  target: 'static',

  // server: {
  //   host: '192.168.100.159'
  // },

  /*
  ** Headers of the page
  */

  build: {
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    }
  },


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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/theme/bootstrapTheme.scss',
    '@/assets/theme/generalRules.sass',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    {
      bootstrapCSS: false,
      bootstrapVueCSS: false,
      directivePlugins: ['VBScrollspyPlugin'],
      components: [
        'BLink',
        'BRow',
        'BCol',
        'BContainer',
        'BJumbotron',
        'BImg',
        'BImgLazy',
        'BNavbar',
        'BNavbarNav',
        'BNavbarBrand',
        'BNavbarToggle'
      ]
    }
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {}
  }
}
