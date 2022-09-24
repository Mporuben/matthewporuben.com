<template>
  <div id="articles">
    <ContentList path="/_blog/articles" v-slot="{ list }">
      <router-link :to="getLink(article._path)"  v-for="(article, i) in list" :key="article.slug">
        <div class="articleCard">
          <div class="previewImage" :style="getImage(article.cover)"></div>
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
      <h2 v-if="list.length == 0">No articles found</h2>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import {formatDateDDMMYYYY as formatDate} from "@/utils/utils";
import Badge from "~/components/preview/Badge.vue";
import {onMounted, watch} from "@vue/runtime-core";
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
    numberOfPosts: {
      type: Number,
      required: false
    }
  })

  const img = useImage()

  const getLink = (filePath: string) => {
    const pathSplit = filePath.split('/')
    return `/blog/articles/${pathSplit[pathSplit.length-1]}`
  }

  const getImage = (cover) => {
      return {backgroundImage: `url('${img(cover, { width: '450px' })}')` }
  }

  const formatDateInArticles = (articles) =>  {
    return articles.map((article) => ({...article, createdAt: formatDate(article.createdAt)}) )
  }
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
