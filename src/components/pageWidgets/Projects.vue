<template>
  <div id="projects">
    <div id="title">
      <h2>Projects</h2>
    </div>

    <div id="card_grid">
      <div class="card">
        <div class="image"></div>
        <div class="description">
          <h3>WSB Harpoon</h3>
          <p>Open source tool for parsing financial statements</p>
          <a href="https://mporuben.github.io/wsb-harpoon/">Learn more</a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="sass">

#projects
  padding: 50px 50px
  #title
    h2
      font-size: 3em
      line-height: 0px
      color: var(--primary)
  #card_grid
    margin-top: 60px
    display: flex
    justify-content: space-between
    align-content: center
    .card
      border-radius: 20px
      background: var(--dark-lighter)
      width: 370px
      .image
        width: 100%
        height: 300px
        background: var(--dark-light)
        background-image: url("/images/projects/wsb-harpoon.jpg")
        background-size: cover
        background-position: center
        border-radius: 20px
      .description
        padding: 20px
</style>
<script setup lang="ts">
</script>
