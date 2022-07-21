<template>
  <div id="banner" class="mb-4">
    <div id="content">
      <p id="title">Matthew Poruben</p>
      <h2>Emphasize - Empower - Build</h2>
      <h4>
        <a style="margin-right: 20px" href="#articles">Articles</a>
        <a style="margin-right: 20px" href="#descContainer">Me</a>
        <a style="margin-right: 20px" href="#story">Story</a>
      </h4>
      <ContactButtons/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContactButtons from "@/components/ContactButtons.vue";
</script>

<style scoped lang="sass">
#banner
  width: 100%
  height: 100vh
  padding-top: 50px
  display: flex
  justify-content: center
  align-items: center
  #content
    margin: 0px 200px 100px 0px
    @media only screen and (max-width: 800px)
      text-align: center
      margin: 0px
    #title
      font-size: 4em
      @media only screen and (max-width: 800px)
        font-size: 2em
    h2
      @media only screen and (max-width: 800px)
        font-size: 1.5em
</style>
