<template>
  <div>
    <Header/>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/plugins/header.vue'
import Footer from '@/plugins/footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  }
})
</script>
