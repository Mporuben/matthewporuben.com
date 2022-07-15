<template>
  <input :placeholder="placeholder" @input="update" :value="value" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {type: String},
    placeholder: {type: String}
  },

  methods: {
    update(e) {
      this.$emit('input', e.target.value)
    }
  }
})
</script>

<style lang="sass" scoped>
  input
    border: none
    padding: 5px
    border-radius: 5px
    width: 100%
</style>
