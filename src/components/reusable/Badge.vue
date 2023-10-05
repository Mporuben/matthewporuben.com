<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<style lang="sass" scoped>
.badge
  background:  var(--primary)
  width: fit-content
  color: var(--dark)
  border-radius: 5px
  font-size: 0.85em
  padding: 2px 5px
</style>
