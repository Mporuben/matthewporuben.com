<template>
  <div id="blog">
    <aside id="sideBar">
      <div id="sideCard" bg-variant="dark">
        <b-form-input placeholder="Search" v-model="fulltext"></b-form-input>
        <br/>
        <b-form-checkbox
          v-for="category of categories"
          :key="category.value"
          v-model="category.enabled"
          :unchecked-value="false"
          :value="true"
        >{{ category.value }}</b-form-checkbox>
      </div>
    </aside>
    <articles-grid :fulltext-search="fulltext" :selected-categories="selectedCategories"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticlesGrid from "@/plugins/ArticlesGrid.vue";
import {BFormInput, BFormCheckbox} from "bootstrap-vue";

export default Vue.extend({
  components: {
    BFormInput,
    BFormCheckbox,
    ArticlesGrid,
  },

  data(){ return {
    fulltext: '',
    categories: []
  }},

  async mounted() {
    const {categories} = await this.$content('blog/categories').only(['categories']).fetch()
    this.categories = categories.map((category) => ({value: category.title, enabled: false}))
  },

  computed:{
      selectedCategories() {
        return this.categories.reduce((acc, el) => el.enabled ? acc.concat([el.value]) : acc, [])
      }
  }
})
</script>

<style lang="sass" scoped>
  #blog
    width: 90%
    max-width: 1200px
    margin: 0 auto
    padding-top: 100px
    display: flex
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
