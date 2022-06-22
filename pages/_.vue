<template>
    <nuxt-content :document="content"></nuxt-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  asyncData ({ $content, params }) {
    const documentPath = `/pages/${params.pathMatch}/index`
    return $content(documentPath).fetch().then((content) => ({content}))
  },

  data() { return {
    content: ''
  }},

})
</script>

<style scoped lang="sass">
</style>
