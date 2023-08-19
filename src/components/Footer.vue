<template>
  <footer>
    <div id="wrapper">
      <div>
        <h2>Get in touch</h2>
        <contact-buttons/>
        <p>© 2023 Matthew Poruben</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import ContactButtons from "~/components/reusable/ContactButtons.vue";
</script>

<style lang="sass" scoped>
  footer
    width: 100%
    background: var(--dark-lighter)
    display: flex
    align-items: flex-start
    text-align: center
    justify-content: space-around
    padding: 10px
    h2
      font-size: 1.5em
      line-height: 0
    #wrapper
      width: 90%
      display: flex
      align-items: flex-start
      justify-content: space-around
      flex-wrap: wrap
</style>
