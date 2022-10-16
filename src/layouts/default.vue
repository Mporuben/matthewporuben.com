<template>
  <div id="content">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<style scoped lang="sass">
#content
  padding-bottom: 50px
  display: flex
  justify-content: center
  width: 100%
</style>
