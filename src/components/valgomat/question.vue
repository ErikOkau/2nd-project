<script setup lang="ts">
import buttons from '../buttons.vue'
import questions from '@/assets/questions.json'

console.log(questions)
defineProps<{
    title: string
    variabel: boolean
}>()    


</script>

<template>
    <div class="container" :data-showButton="variabel">
        <div class="Question">
            <h2> {{ title }}</h2>
            <buttons />

            <div class="forward_back">
                <button class="go"><img class="arrow" src="../../assets/bilder/arrow-left-circle-svgrepo-com.svg"></button>
                <button class="go"><img class="arrow" src="../../assets/bilder/arrow-right-circle-svgrepo-com.svg"></button>
            </div>

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


.forward_back {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 3rem;
    gap: 2rem;

    .go {
        background: none;
        border: none;


        .arrow {
            height: 3rem;
            width: 3rem;
            background-color: white;
            border-radius: 200px;
            border: solid white 1px;
            transition: 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.2);
            }
        }
    }

}
</style>