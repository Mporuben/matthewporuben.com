<template>
  <div id="articles">
    <div id="title">
      <h1>Articles</h1>
      <a href="/blog">More articles ></a>
    </div>
    <Articles-grid :numberOfPosts="2"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticlesGrid from "~/components/ArticlesGrid.vue";

export default Vue.extend({
  components: {
    ArticlesGrid,
  },

})
</script>


<style scoped lang="sass">
#articles
  max-width: 1200px
  margin: 0 auto
  padding: 20px
  margin-bottom: 100px
  #title
    margin-bottom: 20px
    margin-left: 5px
</style>
