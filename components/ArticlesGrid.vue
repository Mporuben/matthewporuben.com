<template>
  <div id="articles">
    <ContentList path="/_blog/articles" v-slot="{ list }">
      <router-link :to="getLink(article._path)"  v-for="(article, i) in list" :key="article.slug">
        <div class="articleCard">
          <div class="previewImage" ></div>
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
// import {computed} from "vue";


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


  const getLink = (filePath: string) => {
    const pathSplit = filePath.split('/')
    return `/blog/articles/${pathSplit[pathSplit.length-1]}`
  }


  // const images = computed(() =>  {
  //   return articles.map((artc) => ({backgroundImage: `url('${this.$img(artc.cover, { width: '450px' })}')` }) )
  // })
  // const articles = []


  // onMounted(() => {
  //   fetchArticles()
  // })

// const fetchArticles = async () => {
//   const fields = ['title', 'description', 'slug', 'cover', 'category', 'updatedAt', 'createdAt']
//   let content = this.$content('blog/articles')
//
//   if(props.selectedCategories.length) {
//     content = content.where({category: {$contains: props.selectedCategories}})
//   }
//   if(props.fulltextSearch) {
//     content = content.search('title', props.fulltextSearch)
//   }
//   this.articles = this.formatDateInArticles(await content.only(fields).fetch())
// }

const formatDateInArticles = (articles) =>  {
  return articles.map((article) => ({...article, createdAt: formatDate(article.createdAt)}) )
}

// watch(() => props.selectedCategories, fetchArticles,{deep: true})
// watch(() => props.fulltextSearch , fetchArticles)


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
