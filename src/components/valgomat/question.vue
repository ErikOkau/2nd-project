<script setup lang="ts">
import Emojibutton from './emojibutton.vue';
import {ref } from 'vue';

defineProps<{
  question: any
  variabel: boolean
}>()

</script>


<template>
    <div class="container" :data-showButton="variabel">
    <div class="Question" v-if="question">
      <h2>{{ question.question }}</h2>
        <!-- <Emojibutton @answer="handleAnswer" /> -->
    </div>
  </div>
</template>


<style scoped lang="scss">

.spawn-enter-active,
.spawn-leave-active {
  transition: transform 0.5s ease-in-out;
}

.spawn-enter-from,
.spawn-leave-to {
  transform: translateX(100%);
}

.container {
    width: 40rem;
    height: 20rem;
    background: black;

    margin-left: 33%;
    margin-top: 6%;

    border-radius: 25px;
    text-align: center;
    transition: 0.5s ease-in-out;
    box-shadow: 0px 0px 3px 10px;


    .Question>h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        color: white;
        padding-top: 3rem;
    }

    .Question label {
        color: white;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>