<template>
  <div>
    <Header/>
    <div id="page">
      <div id="content" :style="contentStyle">
          <ContentDoc :path="getRoute($route)"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

import {computed} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()

const isContentSlim = computed(() => {
  const slimRoutes = ['/about']
  return slimRoutes.includes(route.path)
})

const getRoute = (_route) => {
  if(_route.path.includes('/blog/articles')) {
    return '/pages/blog/articles'
  }
  return `/pages${_route.path}`
}

const contentStyle = computed(() => ({ 'max-width': isContentSlim ? '700px' : '' }))

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
