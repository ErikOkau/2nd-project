<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="container">
        <img :class="{ 'dropdown-img': true, 'menu-arrow-down': isMenuOpen }" src="@/assets/bilder/menu.svg" @click="toggleMenu">

        <div class="dropdown" :class="{ 'show-dropdown': isMenuOpen }">
            <p v-for="i in 5">Test</p> 

        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    .dropdown {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        gap: 1rem;
        padding: 1rem;

        position: absolute;
        top: 14%;
        right: 6.04rem;

        width: 35px;
        
        transition: opacity 0.5s ease, transform 0.5s ease;

        opacity: 0;
        transform: translateY(-25px);

        border: 1px solid #000;
        border-radius: 15px;
        user-select: none;

        img {
            height: 35px;
        }

        p {
            font-size: 1.1rem;
            transition: 0.3s ease-in-out;
        }


        p:hover {
            cursor: pointer;
            transform: scale(1.3);
           
        }

     
    }

    .show-dropdown {
        opacity: 1;
        transform: translateY(0);
    }




    .dropdown-img {
        height: 50px;
        width: 50px;
        user-select: none;

        transition: transform 0.5s ease-in-out;
    }

    .menu-arrow-down {
        transform: rotate(180deg);
    }
}
</style>
