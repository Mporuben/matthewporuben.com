<template>
  <div id="top">
    <b-navbar id="top_bar" toggleable="lg" type="dark" class="shadow-lg">
      <b-navbar-brand href="/">Matthew Poruben</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="sass" scoped>
  #top
    width: 100%
    position: fixed
    display: flex
    align-content: center
    justify-content: center
    z-index: 100
    #top_bar
      margin-top: 10px
      width: 90%
      border-radius: 10px
      background: #394053
</style>
