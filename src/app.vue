<template>
  <div id="page">
    <Header/>
    <NuxtPage/>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped lang="sass">
#page
  width: 100%
</style>
