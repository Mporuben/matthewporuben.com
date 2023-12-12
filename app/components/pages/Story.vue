<template >
  <div id="story">
    <ContentQuery path="/components/story">
      <div v-for="(step, i) of story" :key="`${step.title}_${i}`" class="story" :style="storyOrientation(i)">
        <div id="year">
          <span>{{step.date}}</span>
        </div>
        <div id="card">
          <h2>{{ step.title }}</h2>
          <p>{{step.description}}</p>
          <badge v-if="step.role">{{step.role}}</badge>
        </div>
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
    grid-template-columns: 100px auto
    column-gap: 10px
    margin-bottom: 20px
    justify-content: flex-start
    #year
      padding-top: 20px
      height: 100%
      font-weight: bold
      display: flex
      justify-content: center
      border-right: 1px solid white
      align-items: center

</style>
