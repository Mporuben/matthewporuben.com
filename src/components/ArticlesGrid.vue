<template>
  <div id="articles">
    <ContentQuery path="/blog/articles" v-slot="{ data }" :limit="limit">
        <div class="articleCard" v-for="(article) in data" :key="article.slug">
          <div class="previewImage" :style="getImage(article.cover)"></div>
          <div class="content">
            <h2>{{article.title}}</h2>
            <p class="description">{{article.description}}</p>
            <router-link :to="getLink(article._path)">Continue reading</router-link>
            <footer>
              <div>
                <badge>{{article.category}}</badge>
              </div>
              <span>{{article.createdAt}}22.12.2022</span>
            </footer>
          </div>
        </div>
      <h2 v-if="data.length == 0">No articles found</h2>
    </ContentQuery>
  </div>
</template>

<script lang="ts" setup>
import {formatDateDDMMYYYY as formatDate} from "@/utils/utils";
import Badge from "~/components/preview/Badge.vue";
import {useImage} from "#image/composables";

  const props = defineProps({
    fulltextSearch: {
      type: String,
      required: false
    },
    selectedCategories: {
      type: Array,
      required: false,
      default: () => []
    },
    limit: {
      type: Number,
      required: false
    }
  })

  const img = useImage()

  const getLink = (filePath: string) => {
    const pathSplit = filePath.split('/')
    return `/blog/articles/${pathSplit[pathSplit.length-1]}`
  }

  const getImage = (cover) => ({backgroundImage: `url('${img(cover, { width: '450px' })}')` })

  const formatDateInArticles = (articles) =>
    articles.map((article) => ({...article, createdAt: formatDate(article.createdAt)}) )
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
      height: 368px
      flex: 2
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
      .description
        display: -webkit-box
        max-width: 100%
        -webkit-line-clamp: 6
        -webkit-box-orient: vertical
        overflow: hidden
      footer
        border-top: solid rgba(255,255,255, 0.3) 2px
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
      .content
        flex: none

</style>
