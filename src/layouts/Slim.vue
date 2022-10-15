<template>
  <div id="content">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<style scoped lang="sass">
#content
  padding-top: 100px
  width: 90%
  padding-bottom: 50px
  max-width: 800px
</style>
