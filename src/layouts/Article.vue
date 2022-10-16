<template>
  <div id="article">
    <ContentDoc :path="getSlugFromPath($route.path)" v-slot="{doc}">
      <h1>{{doc.title}}</h1>
      <Badge variant="primary">{{doc.category}}</Badge>
      <span>{{doc.created}}</span>
      <p style="margin-top: 20px">{{doc.description}}</p>
      <img :src="doc.cover" style="width: 720px; border-radius: 20px"/>
      <ContentRenderer :value="doc" />
      <footer>
        <span><b>created:</b> {{doc.createdAt}}</span>
      </footer>
    </ContentDoc>
  </div>
</template>

<script lang="ts" setup>
import Badge from "~/components/preview/Badge.vue";

const getSlugFromPath = (path) => {
  const pathSplit = path.split('/')
  return `/blog/articles/${pathSplit[pathSplit.length-1]}`
}

</script>

<style lang="sass">

pre
  background: #eae8e1 !important
  filter: invert(1)
#article
  width: 90%
  max-width: 800px
  margin: 0 auto
  padding-top: 80px
  .cover
    width: 100%
    border-radius: 15px
    margin: 10px 0px
  footer
    width: 100%
    border-top: 1px rgba(255,255,255,0.2) solid
    padding-top: 10px
    margin-bottom: 50px
  pre
    border-radius: 5px
    code
      background: transparent
      color: initial
  code
    background: rgba(235, 152, 0, 0.1)
    color: rgb(235, 152, 0)
    padding: 2px
</style>
