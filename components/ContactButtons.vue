<template>
  <div id="socialButtons" class="mt-4">
    <a href="https://github.com/Mporuben">
      <Button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="github" class="socilIcon" src="@/assets/icons/logo-github.svg">
      </Button>
    </a>
    <a href="https://www.instagram.com/matthewporuben/">
      <Button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="instagram" class="socilIcon" src="@/assets/icons/logo-instagram.svg">
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/matthew-porueben/">
      <Button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="linkedin" class="socilIcon" src="@/assets/icons/logo-linkedin.svg">
      </Button>
    </a>
    <a href="mailto:matt@matthewporuben.com">
      <Button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="email" class="socilIcon" src="@/assets/icons/mail.svg">
      </Button>
    </a>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Button from "@/components/forms/Button.vue";

export default Vue.extend({
  components: {
    Button,
  },
})

</script>

<style lang="sass" scoped>
#socialButtons
  display: flex
  align-items: center
  flex-wrap: wrap
  .socilIcon
    width: 50px
    height: 50px
    @media only screen and (max-width: 800px)
      width: 40px
      height: 40px

</style>
