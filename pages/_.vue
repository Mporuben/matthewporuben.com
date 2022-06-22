<template>
    <nuxt-content :document="content"></nuxt-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  asyncData ({ $content, params }) {
    const applyRedirects = (path) => {
      if(path.includes('blog/articles/')) {
        return 'blog/articles'
      }
      return path
    }

    const documentPath = `/pages/${applyRedirects(params.pathMatch)}/index`
    console.log(documentPath)
    return $content(documentPath).fetch().then((content) => ({content}))
  },

  data() { return {
    content: ''
  }},

})
</script>

<style scoped lang="sass">
</style>
