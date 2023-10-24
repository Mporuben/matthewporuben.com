<template >
  <div id="story">
    <ContentQuery path="/components/story">
      <div v-for="(step, i) of story" :key="`${step.title}_${i}`" class="story" :style="storyOrientation(i)">
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
    </ContentQuery>
  </div>
</template>

<script lang="ts" setup>
  import Badge from '~/components/reusable/Badge.vue'
  import Card from '~/components/reusable/Card.vue'
  import {computed} from "@vue/reactivity";

  const props = defineProps({
    story: {
      type: String,
      default: '[]'
    }
  })

  //@ts-ignore
  const story = computed(() => JSON.parse(props.story))

  const storyOrientation = (i: number) =>
    ({'text-align': 'left'})

</script>

<style scoped lang="sass">
#story
  margin: 50px auto
  max-width: 900px
  text-align: left
  .story
    display: grid
    grid-template-columns: auto auto
    column-gap: 10px
    margin-bottom: 20px
    justify-content: flex-start
    #yearBorder
      padding: 5px
      border: solid 5px var(--primary)
      border-radius: 50%
      width: 120px
      height: 120px
      @media only screen and (max-width: 800px)
        width: 80px
        height:  80px
        font-size: 0.6em
        margin: 0px 6px
      #year
        height: 100%
        background: var(--primary)
        color: var(--dark)
        font-weight: bold
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center
        line-height: 0
    #card
      width: 100%
      background: #394053
      border-radius: 20px

</style>
