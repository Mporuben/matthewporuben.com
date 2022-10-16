<template>
  <input :placeholder="placeholder" @input="update" :value="modelValue" />
</template>

<script lang="ts" setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {type: String},
    placeholder: {type: String}
  })

  const update = (e) =>  {
    emit('update:modelValue', e.target.value)
  }

</script>

<style lang="sass" scoped>
  input
    border: none
    padding: 12px
    background: var(--dark)
    color: white
    border-radius: 5px
    width: 100%
</style>
