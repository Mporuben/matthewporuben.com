<template>
  <footer>
    <div id="wrapper">
      <div>
        <h4>Get in touch</h4>
        <contact-buttons/>
        <p>© 2022 Matthew Poruben</p>
      </div>
      <div>
        <newsletter-subscribe/>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import ContactButtons from "@/components/ContactButtons.vue";
import NewsletterSubscribe from "~/components/NewsletterSubscribe.vue";
</script>

<style lang="sass" scoped>
  footer
    width: 100%
    background: var(--dark-lighter)
    display: flex
    align-items: flex-start
    justify-content: space-around
    padding: 10px
    h4
      font-size: 1.5em
      line-height: 0
    #wrapper
      width: 90%
      display: flex
      align-items: flex-start
      justify-content: space-around
      flex-wrap: wrap
</style>
