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
  border-radius: 15px
  cursor: pointer
  display: flex
  align-content: center
  justify-content: center
  background: var(--navy-light)
</style>
