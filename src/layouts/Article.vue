<template>
  <div id="article">
    <ContentDoc :path="getSlugFromPath($route.path)" v-slot="{doc}">
      <h1>{{doc.title}}</h1>
      <Badge variant="primary">{{doc.category}}</Badge>
      <span>{{doc.created}}</span>
      <p style="margin-top: 20px">{{doc.description}}</p>
      <img :src="doc.cover" id="cover"/>
      <div id="content">
        <ContentRenderer  :value="doc" />
      </div>
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
#article
  margin: 0 auto
  width: 90%
  max-width: 800px
  padding-top: 80px
  #cover
    width: 100%
    max-width: 800px
    border-radius: 15px
    margin: 10px 0px
  #content
    max-width: 100%
  footer
    width: 100%
    border-top: 1px rgba(255,255,255,0.2) solid
    padding-top: 10px
    margin-bottom: 50px
  pre
    background: #eae8e1 !important
    filter: invert(1)
    border-radius: 5px
    code
      background: transparent
      color: initial
  code
    background: rgba(235, 152, 0, 0.1)
    color: rgb(235, 152, 0)
    padding: 2px
</style>
