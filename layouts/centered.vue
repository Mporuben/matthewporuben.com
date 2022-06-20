<template>
  <div>
    <Header/>
    <div id="page">
      <div id="content">
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from "~/plugins/Header.vue";
import Footer from "~/plugins/Footer.vue";

export default Vue.extend({
  components: {
    Header,
    Footer,
  }
})
</script>

<style scoped lang="sass">
#page
  display: flex
  justify-content: center
  padding-top: 100px
  #content
    width: 90%
    max-width: 700px
    padding-bottom: 50px
</style>
