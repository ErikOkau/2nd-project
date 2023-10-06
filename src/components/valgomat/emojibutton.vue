<script setup lang="ts">

import { defineProps } from 'vue' // Import defineProps

// Array of emoji objects with corresponding values
const emojiValues = [
    {
        emoji: "🤮",
        value: -1
    },
    {
        emoji: "😒",
        value: -0.5
    },
    {
        emoji: "😵‍💫",
        value: 0
    },
    {
        emoji: "😊",
        value: 0.5
    },
    {
        emoji: "🤩",
        value: 1
    },
]


// Extracting the 'answer' prop using defineProps
const { answer } = defineProps(['answer'])

// Creating an instance of the emit function using defineEmits
const emits = defineEmits()

// Function to emit the selected answer value
const emitAnswer = (value: number) => {
    emits('answer', value) // Emitting the 'answer' event with the selected value
    console.log(`Selected value: ${value}`)
}

</script>


<template>
    <div class="buttons">
        <button v-for="emojiValue in emojiValues" @click="emitAnswer(emojiValue.value)">{{ emojiValue.emoji }}</button>
    </div>
</template>


<style scoped lang="scss">
button {
    background: none;
    border: none;
    font-size: 3.2rem;
    justify-content: space-evenly;
    margin-top: 3.5rem;
    transition: 0.3s ease-in-out;


    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
}
</style>