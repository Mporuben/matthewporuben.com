<template>
  <div>
    <Header/>
    <div id="page">
      <div id="content" :style="contentStyle">
          <ContentDoc :path="`/pages${$route.path}`"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

import {computed, ref} from 'vue'
import {useRoute} from "vue-router";

// const content = ref({})
const route = useRoute()


const isContentSlim = computed(() => {
  const slimRoutes = ['/about']
  return slimRoutes.includes(route.path)
})

const contentStyle = computed(() => ({ 'max-width': isContentSlim ? '700px' : '' }))

// asyncData ({ $content, params }) {
//   const applyRedirects = (path) => {
//     if(path.includes('blog/articles/')) {
//       return 'blog/articles'
//     }
//     return path
//   }
//
//   const documentPath = `/pages/${applyRedirects(params.pathMatch)}/index`
//   return $content(documentPath).fetch().then((content) => ({content}))
// },

</script>

<style scoped lang="sass">
#page
  display: flex
  justify-content: center
  padding-top: 100px
  #content
    width: 90%
    padding-bottom: 50px
</style>
