<template>
  <div id="blog">
    <articles-grid :fulltext-search="fulltext" :selected-categories="selectedCategories"/>
  </div>
</template>

<script lang="ts" setup>
  import {computed, ref} from 'vue'
  import ArticlesGrid from "@/components/ArticlesGrid.vue";

  const {data: categories} = await useAsyncData(async() => {
    const {categories} = await queryContent('blog', '_categories').findOne()
    return categories.map((category) => ({value: category.title, enabled: false}))
  })
  const fulltext = ref('')

  const selectedCategories = computed(() =>
    categories.value.reduce((acc, el) => el.enabled ? acc.concat([el.value]) : acc, []))
</script>

<style lang="sass" scoped>
#blog
  min-height: 80vh
  max-width: 1000px
  width: 90%
  margin: 0 auto
  display: flex
  margin-top: 10px
  @media only screen and (max-width: 900px)
    flex-wrap: wrap
  #sideBar
    width: 300px
    height: 200px
    margin-right: 20px
    @media only screen and (max-width: 900px)
      margin-right: 0px
      width: 100%
    #sideCard
      padding: 20px
      border-radius: 15px
      background: #394053
</style>
