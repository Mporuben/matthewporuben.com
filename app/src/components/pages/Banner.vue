<template>
  <div id="banner">
    <div id="content">
      <p id="title">Hi I am Matt</p>
      <p id="bio">
        <slot></slot>
      </p>
    </div>
    <div id="photo" :style="photoBackground"></div>
  </div>
</template>

<script lang="ts" setup>
const photoBackground = computed(() => {
  return {
    backgroundImage: `url('/images/IMG_0396.jpeg')`
  }
})
</script>

<style scoped lang="sass">
#banner
  width: 100%
  height: 80vh
  margin-top: -80px
  display: flex
  justify-content: space-around
  align-items: center
  #photo
    width: 450px
    height: 90%
    top: -10%
    max-width: 100%
    position: relative
    max-height: 100vh
    border-radius: 0px 0px 200px 200px
    box-shadow: 5px 5px 30px rgba(0,0,0,0.4)
    background-size: cover
    background-position: center
    @media only screen and (max-width: 900px)
      opacity: 0.2
      z-index: 80
      position: absolute
  #content
    width: 80%
    margin: 0px 220px 100px 0px
    @media only screen and (max-width: 900px)
      z-index: 90
      position: absolute  
      text-align: center
      margin: 0px
      display: flex
      flex-direction: column
      align-items: center
    #title
      font-size: 3em
      margin: 0px
      font-weight: bold
      @media only screen and (max-width: 1000px)
        font-size: 2em
    #bio
      font-size: 1.1em
</style>
