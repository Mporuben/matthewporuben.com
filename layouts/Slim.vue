<template>
  <div id="content">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<style scoped lang="sass">
#content
  width: 90%
  padding-bottom: 50px
  max-width: 700px
</style>
