<script setup lang="ts">


</script>

<template>
    <div class="buttons">
        <button class="button_choice">🤮</button> 
        <button class="button_choice">😒</button> 
        <button class="button_choice">😵‍💫</button> 
        <button class="button_choice">😊</button> 
        <button class="button_choice">🤩</button> 
    </div>
</template>

<style scoped lang="scss">

.button_choice  {
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


    }</style>