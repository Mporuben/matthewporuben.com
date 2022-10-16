<template>
  <div id="banner">
    <div id="content">
      <p id="title">Matthew Poruben</p>
      <h2>FE dev</h2>
      <ContactButtons/>
    </div>
    <div id="photo" :style="photoBackground"></div>
  </div>
</template>

<script lang="ts" setup>
import ContactButtons from "@/components/ContactButtons.vue";
import {useImage} from "#image/composables";

const img = useImage()

const photoBackground = computed(() => {
  return {
    backgroundImage: `url('/images/IMG_0396.webp')`
  }
})
</script>

<style scoped lang="sass">
#banner
  width: 100%
  height: 100vh
  display: flex
  justify-content: space-around
  align-items: center
  #photo
    width: 400px
    height: 100%
    max-height: 100vh
    position: relative
    top: -70px
    border-radius: 0px 0px 200px 200px
    box-shadow: 5px 5px 30px rgba(0,0,0,0.4)
    background-size: cover
    background-position: center
    @media only screen and (max-width: 800px)
      opacity: 0.4
      z-index: 80
      position: abosolute
  #content
    margin: 0px 220px 100px 0px
    @media only screen and (max-width: 800px)
      z-index: 90
      position: absolute  
      text-align: center
      margin: 0px
    #title
      font-size: 3em
      margin: 0px
      font-weight: bold
      @media only screen and (max-width: 800px)
        font-size: 2em
    h2
      margin-top: 0px
      color: var(--primary)
      @media only screen and (max-width: 800px)
        font-size: 1.5em
</style>
