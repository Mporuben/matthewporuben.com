<template>
  <button :class="variant" @click="click" v-bind="$attrs">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%">
      <div>
        <slot></slot>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
  import {defineEmits} from "@vue/runtime-core";
  const props = defineProps({
    variant: {type: String}
  })
  const emit = defineEmits(['input']);

  const click = (e) => { emit('input', e) }
</script>

<style lang="sass" scoped>
button
  border: none
  padding: 5px 15px
  border-radius: 5px
  cursor: pointer
  display: flex
  align-content: center
  justify-content: center
  text-align: center
  &:disabled
    opacity: 0.8
  background: var(--navy-light)
  font-size: 1em
.accent
  background: #eb9800
  color: white

</style>
