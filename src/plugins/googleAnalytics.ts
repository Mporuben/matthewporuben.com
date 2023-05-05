import VueGtag from 'vue-gtag'




const id: string | undefined = process.env.GOOGLE_ANALYTICS_ID
export default defineNuxtPlugin((nuxtApp: any) => {
  if (process.env.NODE_ENV !== 'development' && id) {
    nuxtApp.vueApp.use(VueGtag, {
      config: {id},
    }, nuxtApp.$router)
  }
})
