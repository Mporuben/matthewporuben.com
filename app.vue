<template>
  <div id="page">
    <div id="top">
      <header id="top_bar" :class="{expanded: expandedMenu}">
        <div id="title">
          <router-link to='/'>
            <strong>Matthew Poruben</strong>
          </router-link>
        </div>

        <div id="navigation" >
          <ContentNavigation v-slot="{ navigation }">
            <router-link
              @click="closeMenu"
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              class="link"
              :class="{active: $route.path === link._path}"
              :style="{order: navigation.order}"
            >
              {{link.title}}
            </router-link>
          </ContentNavigation>
        </div>

        <div id="burger-menu" @click="toggleMenu">
          <img  src="/icons/menu-outline.svg" alt="menu" style="width: 50px; height: 50px;"/>
        </div>

      </header>
    </div>
    <NuxtPage/>
    <footer>
      <strong>Get in touch</strong>
      <contact-buttons/>
    </footer>
  </div>
</template>
<script lang="ts" setup>

const expandedMenu = ref(false)

const toggleMenu = () => {
  expandedMenu.value = !expandedMenu.value
}
const closeMenu = () => {
  expandedMenu.value = false
}


</script>


<style scoped lang="sass">
#page
  width: 100%
  #top
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    position: fixed
    z-index: 100
    #top_bar
      padding: 0px 30px
      padding-top: 2px
      width: 95%
      height: 70px
      display: grid
      grid-template-columns: auto auto
      grid-template-rows: 70px auto
      grid-template-areas: 'title navigation' 'expand expand'
      max-width: 1000px
      margin-top: 10px
      box-shadow: 5px 5px 20px rgba(0,0,0,0.4)
      border-radius: 40px
      background: var(--dark-lighter)
      #burger-menu
        display: none
      #navigation
        width: 100%
        align-items: center
        height: 100%
        display: flex
        grid-area: navigation
        justify-content: flex-end
        flex-flow: row wrap
      #title
        font-size: 1.2em
        line-height: 0
        grid-area: title
        display: flex
        align-items: center
        strong
          color: white
      .link
        color: white
        text-decoration: none
        text-align: center
        padding: 10px
        transition: 0.5s ease
        &:hover
          color: rgba(255,255,255,0.5)
        &.active
          color: var(--primary)
    @media only screen and (max-width: 600px)
      #top_bar
        transition: 0.3s ease-in-out  all
        #navigation
          grid-area: expand
          transition: 0.2s all
          visibility: hidden
          display: flex
          justify-content: flex-start
          align-items: flex-end
          flex-direction: column
          opacity: 0
        #burger-menu
          grid-area: navigation
          display: flex
          justify-content: flex-end
          align-items: center
        &.expanded
          height: 280px
          #navigation
            opacity: 1
            transition: 0.4s ease-in all
            visibility: visible
            grid-area: expand
            width: 100%
            height: 100%
  footer
    width: 100%
    text-align: center
    display: flex
    flex-direction: column
    padding: 50px 0px
    align-items: center
    strong
      margin-bottom: 20px
      font-size: 1.5em

</style>
