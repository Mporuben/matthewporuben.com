<template>
  <div id="desc" class="shadow-lg">
    <div id="photo" :style="descriptionStyleImage"></div>
    <div id="text">
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'

const descriptionStyleImage = computed(() =>
  ({
    backgroundImage: `url('/images/me.webp')`
  })
)
</script>

<style lang="sass" scoped>
#desc
  width: 100%
  background: #394053
  max-width: 1200px
  height: 400px
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
    background-size: cover
    background-position: center
  #text
    padding: 30px
    font-size: 1.1em
    display: flex
    align-items: center
    justify-content: center
    @media only screen and (max-width: 900px)
      font-size: 1.2em
</style>
