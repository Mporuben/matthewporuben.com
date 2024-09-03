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
    <a href="mailto:matthew@poruben.com">
      <img alt="email" class="socilIcon" src="/icons/mail.svg">
    </a>
  </div>
</template>

<style lang="sass" scoped>
#socialButtons
  display: flex
  align-items: center
  flex-wrap: wrap
  @media only screen and (max-width: 900px)
    justify-content: center
  .socilIcon
    margin-right: 10px
    width: 40px
    height: 40px
    @media only screen and (max-width: 900px)
      width: 40px
      height: 40px

</style>
