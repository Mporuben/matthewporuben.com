<template>
  <div id="descContainer">
    <div id="desc" class="shadow-lg">
      <div id="photo" :style="descriptionStyleImage"></div>
      <div id="text">
          <div>
            <slot></slot>
          </div>
      </div>
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
#descContainer
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  #desc
    background: #394053
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
</style>
