<template>
  <div id="socialButtons" class="mt-4">
    <a href="https://github.com/Mporuben">
      <Button class="social-button">
        <img alt="github" class="socilIcon" src="@/assets/icons/logo-github.svg">
      </Button>
    </a>
    <a href="https://www.instagram.com/matthewporuben/">
      <Button class="social-button">
        <img alt="instagram" class="socilIcon" src="@/assets/icons/logo-instagram.svg">
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/matthew-porueben/">
      <Button class="social-button">
        <img alt="linkedin" class="socilIcon" src="@/assets/icons/logo-linkedin.svg">
      </Button>
    </a>
    <a href="mailto:matt@matthewporuben.com">
      <Button class="social-button">
        <img alt="email" class="socilIcon" src="@/assets/icons/mail.svg">
      </Button>
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
  a
    &:first-of-type
      .social-button
        margin: 0px 10px 0px 0px
  .social-button
    margin: 0px 10px
  .socilIcon
    width: 45px
    height: 45px
    padding: 5px
    @media only screen and (max-width: 800px)
      width: 40px
      height: 40px

</style>
