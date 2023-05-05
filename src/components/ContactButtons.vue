<template>
  <div id="socialButtons">
    <a href="https://github.com/Mporuben">
      <img alt="github" class="socilIcon" src="/icons/logo-github.svg">
    </a>
    <a href="https://www.instagram.com/matthewporuben/">
      <img alt="instagram" class="socilIcon" src="/icons/logo-instagram.svg">
    </a>
    <a href="https://www.linkedin.com/in/matthew-porueben/">
      <img alt="linkedin" class="socilIcon" src="/icons/logo-linkedin.svg">
    </a>
    <a href="mailto:matt@matthewporuben.com">
      <img alt="email" class="socilIcon" src="/icons/mail.svg">
    </a>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/forms/Button.vue";

</script>

<style lang="sass" scoped>
#socialButtons
  display: flex
  align-items: center
  flex-wrap: wrap
  .socilIcon
    margin-right: 10px
    width: 40px
    height: 40px
    @media only screen and (max-width: 800px)
      width: 40px
      height: 40px

</style>
