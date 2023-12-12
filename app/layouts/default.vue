<template>
  <div id="content" :style="{maxWidth: maxWidth}">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data } = await useAsyncData('count', () =>
  queryContent(route.path).only('maxWidth').findOne()
)

// @ts-ignore
const maxWidth = computed(() => data?._rawValue?.maxWidth || '100%' )

</script>

<style scoped lang="sass">
#content
  padding: 80px 30px 50px 30px
  margin: 0 auto
  display: flex
  justify-content: center
  width: 100%
</style>
