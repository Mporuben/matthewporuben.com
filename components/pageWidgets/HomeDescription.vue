<template>
  <div id="descContainer" class="mb-5">
    <div id="desc" class="shadow-lg">
<!--      <div id="photo" :style="descriptionStyleImage"></div>-->
      <div id="text">
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue'

// const descriptionStyleImage = computed(() =>  {
//   const imgUrl = this.$img('/images/me.webp', { width: '700px' })
//   return {
//     backgroundImage: `url('${imgUrl}')`
//   }
// })

</script>

<style lang="sass" scoped>

#descContainer
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  #desc
    background: var(--dark)
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
