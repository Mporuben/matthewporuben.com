<template>
  <div id="top">
    <header id="top_bar" class="shadow-lg">
      <h3 style="line-height: 0" href="/">Matthew Poruben</h3>
      <div style="display: flex; flex-flow: row wrap;">
        <ContentNavigation v-slot="{ navigation }">
          <router-link v-for="link of navigation" :key="link._path" class="link" :to="link._path" :style="{order: navigation.order}">
            <div class="link-item">{{link.title}}</div>
          </router-link>
        </ContentNavigation>
      </div>

    </header>
  </div>


</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
  #top
    width: 100%
    position: fixed
    display: flex
    align-content: center
    justify-content: center
    z-index: 100
    #top_bar
      padding: 10px
      margin-top: 10px
      width: 90%
      border-radius: 10px
      background: #394053
      display: flex
      align-items: center
      justify-content: space-between
    .link
      color: white !important
      text-decoration: none
      text-align: center
      float: left
      .link-item
        padding: 10px

</style>
