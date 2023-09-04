<template>
  <div id="page">
    <div id="top">
      <header id="top_bar">
        <router-link to='/'>
          <strong>Matthew Poruben</strong>
        </router-link>
        <div id="navigation">
          <ContentNavigation v-slot="{ navigation }">
            <router-link
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              class="link"
              :style="{order: navigation.order}"
            >
              {{link.title}}
            </router-link>
          </ContentNavigation>
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

<style scoped lang="sass">
#page
  width: 100%
  #top
    width: 100%
    display: flex
    align-content: center
    justify-content: center
    position: fixed
    z-index: 100
    #top_bar
      padding: 10px 20px
      width: 95%
      max-width: 1200px
      margin-top: 10px
      box-shadow: 5px 5px 20px rgba(0,0,0,0.4)
      border-radius: 10px
      background: #394053
      display: flex
      align-items: center
      justify-content: space-between
      #navigation
        display: flex
        flex-flow: row wrap
      strong
        font-size: 1.2em
        line-height: 0
      .link
        color: white
        text-decoration: none
        text-align: center
        padding: 10px
  footer
    width: 100%
    background: var(--dark-lighter)
    text-align: center
    padding: 10px
    display: flex
    flex-direction: column
    align-items: center
    strong
      font-size: 1.5em
</style>
