<template>
  <div class="checkbox">
    <input @input="update" value="true" :checked="value" type="checkbox" />
    <label><slot></slot></label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {type: Boolean},
    label: {type: String},
  },

  methods: {
    update(e) {
      this.$emit('input', e.target.checked)
    }
  }
})
</script>

<style lang="sass" scoped>
.checkbox
  display: flex
  justify-content: flex-start
  align-items: center
  label
    margin: 0px
    margin-left: 5px
</style>
