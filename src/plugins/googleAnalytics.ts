import VueGtag from 'vue-gtag'

const id = process.env.GOOGLE_ANALYTICS_ID
export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV !== 'development') {
    nuxtApp.vueApp.use(VueGtag, {
      config: {id},
    }, nuxtApp.$router)
  }

})
