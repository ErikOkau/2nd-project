<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'





</script>

<template>
  <navbar />

  <div class="main">
    <RouterView />
  </div>

  <Footer />
</template>

<style scoped>

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

* {
  animation: 1s ease-out 0s 1 slideInLeft;
  margin: 0;
  padding: 0;
  user-select: none;
}
</style>
