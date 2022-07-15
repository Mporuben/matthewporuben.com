<template>
  <button :class="variant" @click="click"><slot></slot></button>
</template>

<script lang="ts" setup>
  import {defineEmits} from "@vue/runtime-core";


  const props = defineProps({
    variant: {type: String}
  })
  const emit = defineEmits(['input']);



  const click = (e) =>  {
    emit('input', e)
  }
</script>

<style lang="sass" scoped>
button
  border: none
  padding: 5px
  border-radius: 5px

.dark
  background: #232733
</style>
