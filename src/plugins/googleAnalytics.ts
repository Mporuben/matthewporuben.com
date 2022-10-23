import VueGtag from 'vue-gtag'

const id = process.env.GOOGLE_ANALYTICS_ID
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {id},
  }, nuxtApp.$router)
})
