<template>
  <div id="socialButtons" class="mt-4">
    <a href="https://github.com/Mporuben">
      <b-button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="github" class="socilIcon" src="@/assets/icons/logo-github.svg">
      </b-button>
    </a>
    <a href="https://www.instagram.com/matthewporuben/">
      <b-button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="instagram" class="socilIcon" src="@/assets/icons/logo-instagram.svg">
      </b-button>
    </a>
    <a href="https://www.linkedin.com/in/matthew-porueben/">
      <b-button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="linkedin" class="socilIcon" src="@/assets/icons/logo-linkedin.svg">
      </b-button>
    </a>
    <a href="mailto:matt@matthewporuben.com">
      <b-button class="m-2 border-0 shadow-lg" variant="dark">
        <img alt="email" class="socilIcon" src="@/assets/icons/mail.svg">
      </b-button>
    </a>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import {BButton} from "bootstrap-vue";

export default Vue.extend({
  components: {
    BButton,
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
