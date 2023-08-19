<template>
  <div id="page">
    <Header/>
    <NuxtPage/>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<style scoped lang="sass">
#page
  width: 100%
</style>
