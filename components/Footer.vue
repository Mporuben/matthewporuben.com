<template>
  <footer>
    <div id="wrapper">
      <div>
        <h4>Get in touch</h4>
        <ContactButtons/>
      </div>
      <p>© 2022 Matthew Poruben</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import ContactButtons from "@/components/ContactButtons.vue";
</script>

<style lang="sass" scoped>
  footer
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    background: #394053
    padding: 10px
    #wrapper
      margin: 50px 0px
      width: 90%
      max-width: 900px
      display: flex
      align-items: flex-start
      justify-content: space-between
      flex-wrap: wrap
</style>
