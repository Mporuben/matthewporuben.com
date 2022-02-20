<template>
  <div id="article">
    <h1>{{content.title}}</h1>
    <b-badge variant="primary">{{content.category}}</b-badge>
    <span>{{created}}</span>
    <p style="margin-top: 20px">{{content.description}}</p>
    <img :src="content.cover" alt="cover" style="width: 100%; border-radius: 15px; margin: 10px 0px">
    <nuxt-content :document="content"/>
    <footer>
      <span><b>created:</b> {{created}}</span>
      <br/>
      <span><b>updated:</b> {{updated}}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {formatDateDDMMYYYY as formatDate} from "@/plugins/utils";
import {BBadge} from "bootstrap-vue";

export default Vue.extend( {


  head() {
    return { title: this.title};
  },

  asyncData ({ $content, params }) {
    //@ts-ignore
    return $content(`blog/articles/${params.slug}`).fetch().then(({title}) => ({ title }))
  },

  components: {
    BBadge
  },

  data() {return {
    content: {}
  }},

  async mounted() {
    this.content = await this.$content(`blog/articles/${this.$route.params.slug}`).fetch()
  },

  computed: {
    created() {
      return this.content.createdAt ? formatDate(this.content.createdAt): ''
    },
    updated() {
      return this.content.updatedAt ? formatDate(this.content.updatedAt): ''
    }
  }
})
</script>

<style lang="sass" >

#article
  width: 90%
  max-width: 800px
  margin: 0 auto
  padding-top: 80px
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
