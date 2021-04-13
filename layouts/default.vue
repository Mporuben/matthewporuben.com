<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/plugins/header.vue'

export default Vue.extend({
  components: {
    Header
  }
})
</script>
