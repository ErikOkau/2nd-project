<script setup lang="ts">
import { RouterLink } from 'vue-router';






</script>

<template>


    <div class="navbar">

        <div class="navbar_links">

            <div class="navbar__logo">
                <img class="logo" src="../assets/bilder/Skjermbilde_2023-08-18_095804-removebg-preview.png" onclick=""/>
            </div>

            <RouterLink to="/"><a>Hjem</a></RouterLink>
            <RouterLink to="/projekter">Projekter</RouterLink>
            <RouterLink to="/om"><span>Om</span></RouterLink>
            <div class="erik">
                 <h1>Erik Sørheim</h1>
            </div>
        </div>

       

    </div>
</template>

<style scoped>

.navbar_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem 0rem 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    
    font-size: 1.25rem;
    color: 000000;
    font-family: Arial, Helvetica, sans-serif;

}

.navbar_links a:hover {
    color: #000000;
    font-weight: bold;
}

.navbar_links a {
    text-decoration: none;
    margin-left: 10rem;
    color: black;
}

.navbar_links span {
    margin-right: 10em;
}

.erik {
    margin-top: -0.5rem;
    padding-left: 5rem;
    font-size: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    
}

.logo {
    height: 150px;
    width: 150px;
    
    user-select: none;
}

.logo:hover {
    cursor: pointer;
    
}

</style>