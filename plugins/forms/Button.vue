<template>
  <button :class="variant" @click="click"><slot></slot></button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    variant: {type: String}
  },


  methods: {
    click(e) {
      this.$emit('input', e)
    }
  }
})
</script>

<style lang="sass" scoped>
button
  border: none
  padding: 5px
  border-radius: 5px

.dark
  background: #232733
</style>
