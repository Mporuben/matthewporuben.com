<template>
  <div id="articles">
    <ContentQuery
      path="/blog/articles"
      v-slot="{ data }"
      :limit="limit"
      :only="['title', 'description', 'cover', '_path', 'category', 'createdAt']"
    >
        <div class="articleCard" v-for="(article) in data" :key="article.slug">
          <div class="previewImage" :style="{backgroundImage: `url('${article.cover}')`}" >
          </div>
          <div class="content">
            <h2>{{article.title}}</h2>
            <p class="description">{{article.description}}</p>
            <router-link :to="article._path">Continue reading</router-link>
            <footer>
              <div>
                <badge>{{article.category}}</badge>
              </div>
              <span>{{article.createdAt}}</span>
            </footer>
          </div>
        </div>
      <h2 v-if="data.length == 0">No articles found</h2>
    </ContentQuery>
  </div>
</template>

<script lang="ts" setup>
import Badge from "~/components/reusable/Badge.vue";


const props = defineProps({
  limit: {
    type: Number,
    required: false
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
    margin-bottom: 30px
    width: 100%
    color: white
    display: flex
    .previewImage
      flex: 2
      border-radius: 15px
      background-size: cover
      background-position: center
      width: 50%
    .content
      padding-left: 20px
      flex: 2
      display: flex
      justify-content: space-between
      align-items: flex-start
      flex-direction: column
      .description
        display: -webkit-box
        max-width: 100%
        -webkit-line-clamp: 6
        -webkit-box-orient: vertical
        overflow: hidden
      footer
        border-top: solid rgba(255,255,255, 0.1) 2px
        padding-top: 10px
        width: 100%
        display: flex
        justify-content: space-between
        align-items: flex-start
    @media only screen and (max-width: 700px)
      flex-direction: column
      .previewImage
        flex: none
        width: 100%
        height: 300px
      .content
        flex: none

</style>
