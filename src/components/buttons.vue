<script setup lang="ts">

const emojiList = [
    "🤮",
    "😒",
    "😵‍💫",
    "😊",
    "🤩"
]


</script>

<template>
    <div class="buttons">
        <button class="button_choice" v-for="i in emojiList">
            {{ i }}
        </button>
    </div>
</template>

<style scoped lang="scss">

.button_choice  {
        background: none;
        border: none;
        font-size: 3rem;
        justify-content: space-evenly;
        margin-top: 2rem;
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


    }</style>