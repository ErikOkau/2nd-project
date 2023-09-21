<script setup lang="ts">
import Emojibutton from './emojibutton.vue';
import {ref } from 'vue';

defineProps<{
  question: any
  variabel: boolean
}>();

const userAnswers = ref<number[]>([])

/*const handleAnswer = (value: number) => {
  userAnswers.value.push(value)
}*/



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
@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
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

    &[data-showButton="false"] {
        opacity: 0;
    }

    &[data-showButton="true"] {
        animation: slideInLeft 0.5s ease-in-out;
    }

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