<template >
  <client-only>
    <div id="story">
      <h1>My Story</h1>
      <StorySteps />
      <div v-for="(step, i) of storyContent.steps" :key="`${step.title}_${i}`" class="story" :style="storyOrientation(i)">
        <div id="spacer" />
        <div id="yearBorder">
          <div id="year">
            <span>{{step.date}}</span>
          </div>
        </div>
        <card id="card">
          <h2>{{ step.title }}</h2>
          <p>{{step.description}}</p>
          <badge v-if="step.role">{{step.role}}</badge>
        </card>
      </div>
    </div>
  </client-only>
</template>


<script lang="ts">
  import Vue from 'vue'
  import Badge from '@/plugins/preview/Badge.vue'
  import Card from '@/plugins/preview/Card.vue'

  export default Vue.extend({
    components: {
      Card,
      Badge
    },

    async asyncData ({ $content, params }) {
      const storyContent = await $content('components/story').fetch()
      //@ts-ignore
      return { storyContent }
    },

    data(){return {
      storyContent: {},
    }},

    methods: {
      storyOrientation(i) {
        return (i % 2 == 0) ? {'flex-direction': 'row-reverse', 'text-align': 'right'} : {'text-align': 'left'}
      }
    }

  })
</script>


<style scoped lang="sass">
#story
  margin: 150px auto
  max-width: 900px
  text-align: center
  .story
    display: flex
    justify-content: space-between

    #spacer
      width: 40%
      @media only screen and (max-width: 800px)
        width: 0%

    #yearBorder
      padding: 5px
      border: solid 5px var(--primary)
      border-radius: 50%
      width: 120px
      height: 120px
      margin: 0px 20px
      @media only screen and (max-width: 800px)
        width: 100px
        height:  100px
        font-size: 0.8em
        margin: 0px 10px
      @media only screen and (max-width: 800px)
        width: 80px
        height:  80px
        font-size: 0.6em
        margin: 0px 6px

      #year
        height: 100%
        width: 100%
        background: var(--primary)
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center
        line-height: 0
    #card
      background: #394053
      width: 40%
      border-radius: 20px
      @media only screen and (max-width: 800px)
        width: 70%
</style>
