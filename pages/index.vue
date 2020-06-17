<template>
  <div id="home">

    <div id="banner" class="mb-4">
      <div id="content">
        <p id="title" class="h1">Matthew Poruben</p>
        <h2>Digital Creator</h2>
        <div id="socialButtons" class="mt-4">
          <b-button class="mr-4 border-0 shadow-lg" variant="dark">
            <img class="socilIcon" src="@/assets/icons/logo-github.svg">
          </b-button>
          <b-button class="mr-4 border-0 shadow-lg" variant="dark">
            <img class="socilIcon" src="@/assets/icons/logo-instagram.svg">
          </b-button>
          <b-button class="mr-4 border-0 shadow-lg" variant="dark">
            <img class="socilIcon" src="@/assets/icons/logo-twitter.svg">
          </b-button>
          <b-button class="mr-4 border-0 shadow-lg" variant="dark">
            <img class="socilIcon" src="@/assets/icons/logo-linkedin.svg">
          </b-button>
        </div>
      </div>
      <div id="sideBanner" class="shadow">
        <h2>Emphasize</h2>
        <h2>Empower</h2>
        <h2>Build</h2>
      </div>
    </div>
    <div id="descContainer" class="mb-5">
      <b-card
        id="desc"
        class="mb-3 my-5 shadow-lg border-0"
        img-src="@/assets/images/me.jpg"
        img-alt="Matthew Poruben"
        img-left
      >
        <b-card-body id="cardBody">
          <b-card-text class="h4">
            Hi my name is Matt and I'm a software engineer from Slovakia. I love using my creativity for
            creating software and developing new technological / art experience. My dream is that
            one day thousands of people will find joy in my creations, regardless if its just a line
            of code in your alarm app or a branding for company size of Google.
          </b-card-text>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="sass" scoped>
  #banner
   width: 100%
   height: 100vh
   display: flex
   justify-content: center
   align-items: center
   #content
    margin: 0px 200px 100px 0px

    #title
      font-size: 4em
    #socialButtons
      .socilIcon
        width: 50px
        height: 50px
  #photo
    width: 40%
    height: 90vh
    border-radius: 50px 0px 0px 50px
    background: white
    background-image: url('../assets/images/me.jpg')
    background-size: cover
    position: absolute
    right: 0px
    z-index: 20


  #sideBanner
    z-index: 30
    width: 80%
    height: 200px
    position: absolute
    bottom: 10vh
    left: 0px
    border-radius: 0px 100px 100px 0px
    background: var(--primary)
    display: flex
    align-items: center
    justify-content: flex-end
    padding-right: 100px
    h2
      padding: 0px 20px

  #descContainer
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    #desc
      background: var(--dark)
      max-width: 1200px
      width: 90%
      border-radius: 30px
      overflow: hidden
      .card-img-left
        width: 500px
      .card-body
        display: flex
        justify-content: center
        align-items: center

</style>
