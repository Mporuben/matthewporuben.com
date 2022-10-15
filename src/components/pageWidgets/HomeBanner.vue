<template>
  <div id="banner">
    <div id="content">
      <p id="title">Matthew Poruben</p>
      <h2>FE team lead</h2>
      <ContactButtons/>
    </div>
    <div id="photo"></div>
  </div>
</template>

<script lang="ts" setup>
import ContactButtons from "@/components/ContactButtons.vue";
</script>

<style scoped lang="sass">
#banner
  width: 100vw
  height: 100vh
  display: flex
  justify-content: space-around
  align-items: center
  #photo
    width: 400px
    height: 90%
    position: relative
    top: -70px
    border-radius: 0px 0px 100px 100px
    background-image: url("/images/IMG_0396.jpeg")
    background-size: cover
    background-position: center
  #content
    margin: 0px 220px 100px 0px
    @media only screen and (max-width: 800px)
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
