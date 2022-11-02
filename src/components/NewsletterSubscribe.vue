<template>
  <div id="newsletter-subscribe">
    <h3>Subscribe</h3>
    <form id="subscribe" action="https://matthewporuben.us14.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="02077995be03f6735ee604c2f">
      <input type="hidden" name="id" value="82ca814b0c">
      <Input id="emailInput" type="email"  name="MERGE0"  v-model="email" placeholder="your@email.com"  />
      <Button variant="accent" type="submit">Subscribe</Button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Input from './forms/Input.vue'
import Button from './forms/Button.vue'
</script>

<style lang="sass" scoped>
#newsletter-subscribe
  margin-bottom: 20px
  #subscribe
    display: flex
    #emailInput
      height: 50px
      margin-right: 10px
      max-width: 300px
      min-width: 220px
  h3
    margin: 5px 0px
    font-size: 1.5em
</style>
