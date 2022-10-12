<template>
  <footer>
    <div id="wrapper">
      <div>
        <h4>Get in touch</h4>
        <ContactButtons/>
        <p>© 2022 Matthew Poruben</p>
      </div>
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
    padding: 10px
    h4
      font-size: 1.5em
      line-height: 0
    #wrapper
      max-width: 900px
      width: 90%
      display: flex
      align-items: center
      justify-content: center
      text-align: center
      border-top: 1px solid white
      flex-wrap: wrap
</style>
