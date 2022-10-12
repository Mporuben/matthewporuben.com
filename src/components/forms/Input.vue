<template>
  <input :placeholder="placeholder" @input="update" :value="value" />
</template>

<script lang="ts" setup>


  const emit = defineEmits(['input'])

  const props = defineProps({
    value: {type: String},
    placeholder: {type: String}
  })

  const update = (e) =>  {
    emit('input', e.target.value)
  }

</script>

<style lang="sass" scoped>
  input
    border: none
    padding: 5px
    border-radius: 5px
    width: 100%
</style>
