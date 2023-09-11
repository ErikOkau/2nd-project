<script setup lang="ts">
import Question from '@/components/valgomat/question.vue'
import { ref } from 'vue'


const startTest = ref(false)
const buttonHide = ref(false)


function hide() {
    startTest.value = !startTest.value
    buttonHide.value = !buttonHide.value

    console.log("test")
}



</script>

<template>
    <div class="header">
        <h1>Valgomat</h1>
        <h2>Svar på påstandene, så finner vi ut hvilket parti som er mest enig med deg!</h2>

        <button class="button" @click="hide" :data-showButton="!buttonHide">Start</button>
    </div>

    <Question question="1. This is a test question?" :variabel="startTest"/>
    
</template>

<style scoped lang="scss">


.header {
    margin-left: 32.9%;
    width: 640px;
    height: 100px;
    margin-top: 3%;

    text-align: center;

    .button {
        margin-top: 1.5rem;
        width: 10rem;
        height: 3rem;
        background: #000;
        color: #fff;
        border: none;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s ease-in-out;

        &:hover {
            background: grey;
            color: #000;
        }

        &[data-showButton="false"] {
            opacity: 0;
         
        }

       
    }
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-size: 3rem;
    font-weight: 700;
}

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
}

.start_test {
    margin-top: 1rem;
    width: 10rem;
    height: 3rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}

.start_test:hover {
    background: grey;
    color: #000;
}
</style>