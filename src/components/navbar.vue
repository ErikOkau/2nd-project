<script setup lang="ts">
import dropdown from '@/components/navbar/dropdown.vue'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'


// Search and menu js for flipping the icons
const search_flip = ref<HTMLElement | null>(null)

const isSearchOpen = ref(false)


function toggleSearch() {
    search_flip.value?.classList.toggle('search-arrow-down')
    isSearchOpen.value = !isSearchOpen.value
}

</script>

<template>
    <div class="navbar">

        <div class="navbar__logo">
            <img class="logo" src="@/assets/bilder/logo.svg" onclick="" />
        </div>
        <div class="routerlinks">
            <RouterLink class="RouterLink" to="/">Hjem</RouterLink>
            <RouterLink class="RouterLink" to="/om">Om</RouterLink>
            <RouterLink class="RouterLink" to="/kontakt">Kontakt</RouterLink>
        </div>


        <div class="search_menu">

            <img class="search" src="@/assets/bilder/search.svg" @click="toggleSearch" :class="{ 'search-arrow-down open': isSearchOpen }">

            <dropdown />

        </div>

    </div>
</template>

<style scoped lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    padding: 1.5rem 5rem 0rem 5rem;
    margin-left: 1rem;
    margin-right: 1rem;

    font-size: 1.25rem;
    color: 000000;
    font-family: Arial, Helvetica, sans-serif;

    a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
    }
}


.routerlinks {
    display: flex;
    justify-content: space-between;
    gap: 7.5rem;
    user-select: none;

    a:hover {
        transform: scale(1.2);
    }
}




/* Search and menu icon css */

.menu_padding {
    padding-left: 4rem;
}

.search_menu {
    display: flex;
    gap: 2rem;
}

.menu {
    height: 50px;
    width: 50px;
    user-select: none;
}

.search {
    height: 50px;
    width: 50px;
    user-select: none;
    transition: 0.3s ease-in-out;
}

.menu,
.search:hover {
    cursor: pointer;
    transform: scale(1.15);
}

.menu-arrow-down.open {
    transform: rotate(180deg);
    transition: 0.5s linear;
}


.search-arrow-down.open {
    transform: rotate(360deg);
    transition: 0.5s linear;
}






/* logo image css */
.logo {
    height: 125px;
    width: 125px;

    user-select: none;
}

.logo:hover {
    pointer-events: none;
}



/* Underline transition */
/* Underline styles */
a {
    display: block;
    position: relative;
    padding: 0.2em 0;
}

/* Fade in */
a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-radius: 25px;
    box-shadow: 0 0 1px 1px #000;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}

a:hover::after,
a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}
</style>


