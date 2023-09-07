<script setup lang="ts">
import dropdown from '@/components/navbar/dropdown.vue'

import { RouterLink } from 'vue-router'



</script>

<template>
    <div class="navbar">

        <div class="navbar__logo">
            <img class="logo" src="@/assets/bilder/logo.svg" onclick="" />
        </div>
        <div class="routerlinks">
            <RouterLink class="RouterLink" to="/">Hjem</RouterLink>
            <RouterLink class="RouterLink" to="/">Om</RouterLink>
            <RouterLink class="RouterLink" to="/kontakt">Kontakt</RouterLink>
        </div>


        <div class="search_menu">

            <img class="search" src="@/assets/bilder/search.svg">

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
    cursor: pointer;
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
    transform: scale(1.3);
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


