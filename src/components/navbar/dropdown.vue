<script setup lang="ts">
import { ref } from 'vue'

import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="container">
        <img :class="{ 'dropdown-img': true, 'menu-arrow-down': isMenuOpen }" src="@/assets/bilder/menu.svg" @click="toggleMenu">

        <Transition
            name="slide-fade"
        >
            <div class="dropdown" v-if="isMenuOpen">
                <RouterLink to="/projekt" class="projekter"><p>Projekter</p></RouterLink>   
                <RouterLink to="/valgomat" class="Valgomat" ><p>Valgomat</p></RouterLink>
                <RouterLink to="/valgomat" class="Valgomat" ><p>Valgomat</p></RouterLink>
                <RouterLink to="/valgomat" class="Valgomat" ><p>Valgomat</p></RouterLink>
                <RouterLink to="/valgomat" class="Valgomat" ><p>Valgomat</p></RouterLink>
            </div>
        </Transition>
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
        right: 4.5rem;

        width: 80px;

        align-items: center;
        


        border: 1px solid #000;
        border-radius: 15px;
        user-select: none;

        img {
            height: 35px;
        }

        p {
            font-size: 1.1rem;
            transition: 0.3s ease-in-out;
            font-weight: 700;
            padding: 0.3rem;
        }


        p:hover {
            cursor: pointer;
            transform: scale(1.2);
           
        }

     
    }

    .Valgomat, .projekter {
        text-decoration: none;
        color: black;
    }



    .dropdown-img {
        height: 50px;
        width: 50px;
        user-select: none;
        cursor: pointer;

        transition: transform 0.5s ease-in-out;
    }

    .menu-arrow-down {
        transform: rotate(180deg);
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    animation: slideInRight .5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    animation: slideInRight .5s reverse ease;
}

@keyframes slideInRight {
    0% {
        transform: translateX(20%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

</style>
