<template>
  <div id="desc" class="shadow-lg">
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
  border-radius: 30px
  display: grid
  overflow: hidden
  #text

    width: 100%
    padding: 30px
    font-size: 1.3em
    display: flex
    align-items: center
    justify-content: center
    @media only screen and (max-width: 900px)
      font-size: 1.2em
</style>
