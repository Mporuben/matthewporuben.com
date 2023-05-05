<template>
  <div id="home-articles">
    <div id="title">
      <h2>Blog</h2>
      <div style="display: flex">
      </div>
    </div>
    <articles-grid :limit="1"/>
    <router-link to="/blog"><div id="all-articles">All articles > </div></router-link>
  </div>
</template>

<script lang="ts" setup>
import ArticlesGrid from "~/components/ArticlesGrid.vue";
import Badge from "~/components/preview/Badge.vue";
</script>

<style scoped lang="sass">
#home-articles
  max-width: 1200px
  width: 90%
  margin: 0 auto
  margin-top: 100px
  #title
    h2
      font-size: 3em
      line-height: 0px
      color: var(--primary)
    h3
      font-size: 1.5em
    margin-bottom: 20px
    margin-left: 5px
  #all-articles
    display: flex
    justify-content: center
    padding: 5px
    color: white
</style>
