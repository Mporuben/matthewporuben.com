<template>
  <div id="about">
    <div id="content">
      <nuxt-content :document="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  data() { return {
    content: ''
  }},

  async mounted() {
    this.content = await this.$content('about').fetch()
  }

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
</style>
