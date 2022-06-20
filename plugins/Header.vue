<template>
  <div id="top">
    <header id="top_bar" class="shadow-lg">
      <h3 style="line-height: 0" href="/">Matthew Poruben</h3>
      <div>
        <router-link class="link" to="/"><div @click="closeMenu" class="link-item">Home</div></router-link>
        <router-link class="link" to="/about"><div @click="closeMenu" class="link-item">About</div></router-link>
        <router-link class="link" to="/blog"><div @click="closeMenu" class="link-item">Blog</div></router-link>
      </div>
    </header>
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
      padding: 10px
      margin-top: 10px
      width: 90%
      border-radius: 10px
      background: #394053
      display: flex
      align-items: center
      justify-content: space-between
    .link
      color: white !important
      text-decoration: none
      text-align: center
      float: left
      .link-item
        padding: 10px

</style>
