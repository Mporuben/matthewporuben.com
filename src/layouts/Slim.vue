<template>
  <div id="content">
    <ContentDoc :path="$route.path"></ContentDoc>
  </div>
</template>

<style scoped lang="sass">
#content
  padding: 80px 15px 50px 15px
  width: 100%
  margin: 0 auto
  max-width: 800px
</style>
