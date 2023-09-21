<script setup lang="ts">

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
] // Corresponding values for emojis
const { answer } = defineProps(['answer']) // Define the prop


const emitAnswer = (value: number) => {
  answer(value)
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