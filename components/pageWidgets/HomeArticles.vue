<template>
  <div id="home-articles">
    <div id="title">
      <h2>Blog</h2>
      <h3>I’m writing articles about coding </h3>
      <div style="display: flex">
        <div style="background: rgba(255,255,255,0.1); display: flex; border-radius: 5px; padding: 5px">
          All articles
          <badge style="margin-left: 5px">10</badge>
        </div>
      </div>
    </div>
    <articles-grid :limit="1"/>
  </div>
</template>

<script lang="ts" setup>
import ArticlesGrid from "~/components/ArticlesGrid.vue";
import Badge from "~/components/preview/Badge.vue";
</script>

<style scoped lang="sass">
#home-articles
  max-width: 1200px
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
</style>
