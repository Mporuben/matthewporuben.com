<template>
  <div id="article">
    <ContentDoc :path="getSlugFromPath($route.path)" v-slot="{doc}">

      <h1>{{doc.title}}</h1>
      <badge variant="primary">{{doc.category}}</badge>
      <span>{{doc.created}}</span>
      <p style="margin-top: 20px">{{doc.description}}</p>

      <nuxt-img :src="doc.cover" alt="cover" class="cover" sizes="lg:800px"  format="webp"/>
      <ContentRenderer :value="doc" />
      <footer>
        <span><b>created:</b> {{doc.created}}</span>
        <br/>
        <span><b>updated:</b> {{doc.updated}}</span>
      </footer>
    </ContentDoc>
  </div>
</template>

<script lang="ts" setup>
  import {formatDateDDMMYYYY as formatDate} from "@/utils/utils";
  import Badge from "~/components/preview/Badge.vue";
  import {useRoute} from "vue-router";

  const getSlugFromPath = (path) => {
    const pathSplit = path.split('/')
    return `/blog/articles/${pathSplit[pathSplit.length-1]}`
  }

  //
  // const created = computed(() =>  content.value.createdAt ? formatDate(content.value.createdAt): '')
  //
  //
  // const updated = computed(() => content.value.updatedAt ? formatDate(content.value.updatedAt): '')

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
    border-top: 1px white solid
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
