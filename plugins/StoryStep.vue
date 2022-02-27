<template >
  <div id="story" :style="storyOrientation">
    <div id="spacer" />
    <div id="yearBorder">
      <div id="year">
        <span>{{story.date}}</span>
      </div>
    </div>
    <b-card id="card" :title="story.title" >
      <b-card-text>
        <p>{{story.description}}</p>
      </b-card-text>
    </b-card>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  import { BCard, BCardText} from "bootstrap-vue";

  export default Vue.extend({
    components: {
      BCard,
      BCardText,
    },

    props: {
      index: {
        required: true,
        type: Number
      },
      story:{
        required: true,
        type: Object
      },
    },

    computed: {
      storyOrientation() {
        return (this.index%2 == 0) ? {'flex-direction': 'row-reverse'} : {}
      }


    }

  })
</script>


<style scoped lang="sass">
#story
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
