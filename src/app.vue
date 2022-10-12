<template>
  <Header/>
  <div id="page">
    <NuxtPage />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped lang="sass">
#page
  display: flex
  justify-content: center
</style>
