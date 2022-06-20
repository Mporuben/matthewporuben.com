<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass" scoped>
.badge
  background:  rgb(235, 152, 0)
  width: fit-content
  border-radius: 5px
  font-size: 0.85em
  padding: 2px 5px
</style>
