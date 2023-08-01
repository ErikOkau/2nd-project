<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import buttons from './components/buttons.vue'
import footer from './components/footer.vue'

</script>

<template>
<navbar />

  <div class="main">
    <RouterView />
  </div>

<footer />
</template>

<style scoped>

</style>
