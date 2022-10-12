<template>
  <div id="descContainer">
    <div id="desc" class="shadow-lg">
      <div id="photo" :style="descriptionStyleImage"></div>
      <div id="text">
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useImage} from "#image/composables";

const img = useImage()

const descriptionStyleImage = computed(() =>
  ({
    backgroundImage: `url('${img('/images/me.webp', { width: 700 })}')`
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
      background: rgba(255,255,255, 0.4)
    #text
      padding: 30px
      font-size: 1.5em
      display: flex
      align-items: center
      justify-content: center
      @media only screen and (max-width: 900px)
        font-size: 1.2em
</style>
