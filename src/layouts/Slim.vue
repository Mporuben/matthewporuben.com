<template>
  <div id="content">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<style scoped lang="sass">
#content
  padding-top: 80px
  width: 90%
  padding-bottom: 50px
  max-width: 800px
</style>
