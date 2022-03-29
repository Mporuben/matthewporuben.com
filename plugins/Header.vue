<template>
  <div id="top">
    <b-navbar id="top_bar" toggleable="lg" type="dark" class="shadow-lg">
      <b-navbar-brand href="/">Matthew Poruben</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link class="link" to="/"><div @click="closeMenu" class="link-item">Home</div></router-link>
          <router-link class="link" to="/about"><div @click="closeMenu" class="link-item">About</div></router-link>
          <router-link class="link" to="/blog"><div @click="closeMenu" class="link-item">Blog</div></router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

  methods: {
    closeMenu() {
        this.$root.$emit('bv::toggle::collapse', 'nav-collapse')
    }
  }

}
</script>

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
    .link
      color: white !important
      text-decoration: none
      .link-item
        padding: 10px

</style>
