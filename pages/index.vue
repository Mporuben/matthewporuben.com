<template>
  <div id="home">
    <div id="banner" class="mb-4">
      <div id="content">
        <p id="title">Matthew Poruben</p>
        <h2>Digital Creator</h2>
        <div id="socialButtons" class="mt-4">
          <a href="https://github.com/Mporuben">
            <b-button class="mr-4 border-0 shadow-lg" variant="dark">
              <img alt="github" class="socilIcon" src="@/assets/icons/logo-github.svg">
            </b-button>
          </a>
          <a href="https://www.instagram.com/matthewporuben/">
            <b-button class="mr-4 border-0 shadow-lg" variant="dark">
              <img alt="instagram" class="socilIcon" src="@/assets/icons/logo-instagram.svg">
            </b-button>
          </a>
          <a href="https://twitter.com/matthewporuben">
            <b-button class="mr-4 border-0 shadow-lg" variant="dark">
              <img alt="twitter" class="socilIcon" src="@/assets/icons/logo-twitter.svg">
            </b-button>
          </a>
          <a href="https://www.linkedin.com/in/matthew-porueben/">
            <b-button class="mr-4 border-0 shadow-lg" variant="dark">
              <img alt="linkedin" class="socilIcon" src="@/assets/icons/logo-linkedin.svg">
            </b-button>
          </a>
        </div>
      </div>
      <div id="sideBanner" class="shadow"><p>Emphasize</p><p>Empower</p> <p>Build</p></div>
    </div>

    <div id="descContainer" class="mb-5">
      <div id="desc" class="shadow-lg">
        <div id="photo"></div>
        <div id="text">
          <p>
            Hi my name is Matt and I'm a software engineer from Slovakia. I love using my creativity
            for creating software and developing new technological / art experience. My dream is that
            one day thousands of people will find joy in my creations, regardless if its just a line
            of code in your alarm app or a application for company size of Google.
          </p>
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

  Vue.component('story-step', storyStep)

  export default Vue.extend({
    components: {
      storyStep
    },

    data(){return {
      storyContent: '',
    }},


    async mounted() {
      this.storyContent = await this.$content('story').fetch()
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
    #socialButtons
      .socilIcon
        width: 50px
        height: 50px
        @media only screen and (max-width: 800px)
          width: 40px
          height: 40px
  #sideBanner
    z-index: 30
    width: 80%
    height: 200px
    position: absolute
    bottom: 10vh
    left: 0px
    border-radius: 0px 100px 100px 0px
    background: var(--primary)
    display: flex
    align-items: center
    justify-content: flex-end
    padding-right: 100px
    padding-top: 20px
    @media only screen and (max-width: 700px)
      height: 100px
      width: 90%
      padding-right: 50px
    p
      padding: 0px 20px
      color: var(--dark)
      font-size: 1.8em
      @media only screen and (max-width: 700px)
        padding: 0px 5px
        font-size: 1.2em
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
        background-image: url('../assets/images/me.jpg')
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
