<template>
  <div id="about">
    <div id="content">
      <nuxt-content :document="content"></nuxt-content>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  asyncData ({ $content, params }) {
    //@ts-ignore
    return $content('about').fetch().then((content) => ({content}))
  },


  data() { return {
    content: ''
  }},

})
</script>

<style scoped lang="sass">
 #about
   display: flex
   justify-content: center
   padding-top: 100px
   #content
    width: 90%
    max-width: 700px
    padding-bottom: 50px
</style>
