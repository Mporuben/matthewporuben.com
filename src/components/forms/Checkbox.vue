<template>
  <div class="checkbox">
    <input @input="update" value="true" :checked="props.value" type="checkbox" />
    <label><slot></slot></label>
  </div>
</template>

<script lang="ts" setup>


const emit = defineEmits(['input'])
const props = defineProps({
  value: {type: Boolean},
  label: {type: String},
})

const update = (e) =>  {
  emit('input', e.target.checked)
}

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
