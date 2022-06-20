<template>
  <div id="articles">
    <client-only>
      <router-link :to="'/blog/'+article.slug"  v-for="(article, i) in articles" :key="article.slug">
        <div class="articleCard">
          <div class="previewImage" :style="images[i]"></div>
          <div class="content">
            <h2 class="mt-2">{{article.title}}</h2>
            <p class="mt-2">{{article.description}}</p>
            <footer>
              <div>
                <badge>{{article.category}}</badge>
              </div>
              <p>{{article.createdAt}}</p>
            </footer>
          </div>
        </div>
      </router-link>
    </client-only>
    <h2 v-if="articles.length == 0">No articles found</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {formatDateDDMMYYYY as formatDate} from "@/plugins/utils";
import Badge from "~/plugins/preview/Badge.vue";

export default Vue.extend({
  components: {
    Badge
  },

  props: {
    fulltextSearch: {
      type: String,
      required: false
    },
    selectedCategories: {
      type: Array,
      required: false,
      default: () => []
    },
    numberOfPosts: {
      type: Number,
      required: false
    }
  },

  computed:{
    images() {
      return this.articles.map((artc) => ({backgroundImage: `url('${this.$img(artc.cover, { width: '450px' })}')` }) )
    }
  },

  data(){return {
    articles: []
  }},

  mounted() {
    this.fetchArticles()
  },

  methods: {
    async fetchArticles() {
      const fields = ['title', 'description', 'slug', 'cover', 'category', 'updatedAt', 'createdAt']
      let content = this.$content('blog/articles')
      if(this.selectedCategories.length) {
        content = content.where({category: {$contains: this.selectedCategories}})
      }
      if(this.fulltextSearch) {
        content = content.search('title', this.fulltextSearch)
      }
      this.articles = this.formatDateInArticles(await content.only(fields).fetch())
    },

    formatDateInArticles(articles) {
      return articles.map((article) => ({...article, createdAt: formatDate(article.createdAt)}) )
    }

  },
  watch: {
    selectedCategories:{
      deep: true,
      handler() { this.fetchArticles() }
    },
    fulltextSearch(){this.fetchArticles()}
  }

})
</script>

<style lang="sass" scoped>
a
  text-decoration: none
  *
    text-decoration: none
#articles
  display: flex
  width: 100%
  flex-direction: column
  .articleCard
    margin-bottom: 20px
    width: 100%
    background: #394053
    border-radius: 15px
    padding: 20px
    color: white
    display: flex
    .previewImage
      width: 300px
      height: 250px
      flex: 1
      background: white
      background-position: center
      background-size: cover
      border-radius: 15px
    .content
      padding-left: 20px
      flex: 2
      display: flex
      justify-content: space-between
      align-items: flex-start
      flex-direction: column
      footer
        border-top: solid rgba(255,255,255, 0.3) 2px
        padding-top: 10px
        width: 100%
        display: flex
        justify-content: space-between
    @media only screen and (max-width: 700px)
      flex-direction: column
      .previewImage
        flex: none
        width: 100%
      .content
        flex: none

</style>
