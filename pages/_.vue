<template>
    <nuxt-content :document="content"></nuxt-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  layout: 'centered',

  asyncData ({ $content, params }) {
    //@ts-ignore
    console.log(params)
    return $content(`pages/${params.page || 'index'}`).fetch().then((content) => {return ({content})})
  },


  data() { return {
    content: ''
  }},

})
</script>

<style scoped lang="sass">
</style>
