<template>
  <div>
    <Header/>
    <div id="page">
      <div id="content" :style="contentStyle">
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
  },

  computed: {
    isContentSlim(){
      const slimRoutes = ['/about']
      return slimRoutes.includes(this.$route.path)
    },

    contentStyle() {
      return { 'max-width': this.isContentSlim ? '700px' : '' }
    }
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
    padding-bottom: 50px
</style>
