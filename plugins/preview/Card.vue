<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass" scoped>
.card
  background: #394053
  padding: 20px
  border-radius: 20px
</style>
