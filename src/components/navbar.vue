<script setup lang="ts">
import { RouterLink } from 'vue-router';






</script>

<template>


    <div class="navbar">

        <div class="navbar_links">

            <div class="navbar__logo">
                <img class="logo" src="../assets/bilder/Skjermbilde_2023-08-18_095804-removebg-preview.png" onclick=""/>
            </div>

            <RouterLink class="RouterLink" to="/">Hjem</RouterLink>
            <RouterLink class="RouterLink" to="/projekter">Projekter</RouterLink>
            <RouterLink class="RouterLink" to="/om">Om</RouterLink>
            <div class="erik">
                 <h1 class="RouterLink">Erik Sørheim</h1>
            </div>
        </div>

       

    </div>
</template>

<style scoped>

.navbar_links {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    align-items: center;
    padding: 1.5rem 5rem 0rem 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    
    font-size: 1.25rem;
    color: 000000;
    font-family: Arial, Helvetica, sans-serif;

}



.navbar_links a {
    text-decoration: none;
    color: black;
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
  height: 2px;
  border-radius: 25px;
  box-shadow: 0 0 2px 2px #000;
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