<template>
  <div id="card_grid">
    <div class="card" v-for="project of projects" :key="project.title">
      <div class="image"></div>
      <div class="description">
        <h2>{{project.title}}</h2>
        <p>{{project.description}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "@vue/reactivity";

const props = defineProps({
  projects: {
    type: String,
    default: '[]'
  }
})
const projects = computed(() => JSON.parse(props.projects))
</script>

<style scoped lang="sass">
#card_grid
  display: flex
  justify-content: space-between
  align-content: center
  .card
    border-radius: 20px
    background: var(--dark-lighter)
    width: 370px
    padding: 20px
    .image
      width: 60px
      height: 60px
      background: var(--dark-light)
      background-image: url("/images/projects/wsb-harpoon.jpg")
      background-size: cover
      background-position: center
      border-radius: 10px
</style>
