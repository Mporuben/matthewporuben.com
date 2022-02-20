<template>
  <div id="home">
    <div id="banner" class="mb-4">
      <div id="content">
        <p id="title">Matthew Poruben</p>
        <h2>Emphasize - Empower - Build</h2>
        <h4>
          <a style="margin-right: 20px" href="#articles">Articles</a>
          <a style="margin-right: 20px" href="#descContainer">Me</a>
          <a style="margin-right: 20px" href="#story">Story</a>
        </h4>

        <ContactButtons/>
      </div>
    </div>


    <div id="articles">
      <div id="title">
        <h1>Articles</h1>
        <a href="/blog">More articles ></a>
      </div>
      <articles-grid/>
    </div>

    <div id="descContainer" class="mb-5">
      <div id="desc" class="shadow-lg">
        <div id="photo"></div>
        <div id="text">
          <p><nuxt-content :document="descriptionContent"/></p>
        </div>
      </div>
    </div>

    <div id="story">
      <h1>My Story</h1>
      <storyStep v-for="(step, i) of storyContent.steps" :key="step.title" :story="step" :index="i" />
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import storyStep from '@/plugins/storyStep.vue'
  import articlesGrid from "@/plugins/ArticlesGrid.vue";
  import {BButton} from "bootstrap-vue";

  import ContactButtons from '@/plugins/ContactButtons.vue'

  export default Vue.extend({
    components: {
      storyStep,
      articlesGrid,
      BButton,
      ContactButtons,
    },

    data(){return {
      storyContent: '',
      descriptionContent: ''
    }},

    async mounted() {
      this.storyContent = await this.$content('story').fetch()
      this.descriptionContent = await this.$content('homeDescription').fetch()
    }

  })
</script>

<style lang="sass" scoped>
  #banner
    width: 100%
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    #content
      margin: 0px 200px 100px 0px
      @media only screen and (max-width: 800px)
        text-align: center
        margin: 0px
      #title
        font-size: 4em
        @media only screen and (max-width: 800px)
          font-size: 2em
      h2
        @media only screen and (max-width: 800px)
          font-size: 1.5em

  #articles
    max-width: 1200px
    margin: 0 auto
    margin-bottom: 100px
    #title
      margin-bottom: 20px
      margin-left: 5px

  #descContainer
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    #desc
      background: var(--dark)
      max-width: 1200px
      width: 90%
      height: 500px
      border-radius: 30px
      display: grid
      overflow: hidden
      grid-template-columns: 400px auto
      @media only screen and (max-width: 900px)
        grid-template-columns: auto
        grid-template-rows: 500px auto
        height: auto
      #photo
        border-radius: 30px
        background-image: url('../assets/images/me.webp')
        background-size: cover
        background-position: center
      #text
        padding: 30px
        font-size: 1.5em
        display: flex
        align-items: center
        justify-content: center
        @media only screen and (max-width: 900px)
          font-size: 1.2em
  #story
    margin: 150px auto
    max-width: 900px
    text-align: center
</style>
