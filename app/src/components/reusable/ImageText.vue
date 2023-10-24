<template>
  <div class="wrapper">
    <div class="text">
      <slot></slot>
    </div>
    <img :src="props.image" :alt="imageAlt" style='width: 300px;border-radius: 20px' />
  </div>
</template>


<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
})
</script>

<style lang="sass">
.wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .text
    min-width: 300px
    max-width: 50%
</style>
