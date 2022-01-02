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

export default Vue.extend( {

  data() {return {
    content: {}
  }},

  async mounted() {
    this.content = (await this.$content('blog/articles').where({slug: this.$route.params.slug}).fetch())[0]
    console.log(this.content)
  },

  computed: {
    created() {
      return this.content.createdAt ? formatDate(this.content.createdAt): ''
    },
    updated() {
      return this.content.updatedAt?  formatDate(this.content.updatedAt): ''
    }
  }
})
</script>

<style lang="sass" scoped>
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
</style>
