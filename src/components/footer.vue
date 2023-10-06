<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isFooterVisible = ref(false);

const handleScroll = () => {
    const footerElement = document.querySelector('.footer')

    if (footerElement) {
        const windowHeight = window.innerHeight
        const scrollY = window.scrollY
        const documentHeight = document.body.clientHeight
        const footerHeight = footerElement.clientHeight

        if (windowHeight + scrollY >= documentHeight - footerHeight) {
            isFooterVisible.value = true
            footerElement.classList.add('visible')
        } else {
            isFooterVisible.value = false
            footerElement.classList.remove('visible')
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

const footerElement = document.querySelector('.footer') as HTMLElement
if (footerElement) {
    footerElement.addEventListener('transitionend', () => {
        if (isFooterVisible.value) {
            footerElement.style.transform = 'translateY(0)';
        } else {
            footerElement.style.transform = `translateY(${footerElement.clientHeight}px)`
        }
    })
}

</script>


<template>
    <div class="footer" v-show="isFooterVisible">
        <div class="section">
            <h3>Navigasjon</h3>
            <RouterLink to="/">Hjem</RouterLink>
            <RouterLink to="/prosjekter">Prosjekter</RouterLink>
            <RouterLink to="/om-meg">Om Meg</RouterLink>
        </div>  

        <div class="section">
            <h3>Kontakt</h3>
            <p><a href="mailto:erikmsorheim@yahoo.no">erikmsorheim@yahoo.no</a></p>
            <p><a href="tel:+4796044191">+47 960 44 191</a></p>
        </div>

        <div class="section">
            <h3>Sosial</h3>
            <a href="https://github.com/ErikOkau" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/erikmsorheim" target="_blank">LinkedIn</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #f9f9f9;
    padding: 3rem 0;
    color: #333;
    font-family: Arial, sans-serif;
    border-top: 2px solid #ccc;
    transform: translateY(100%);
    transition: transform 0.5s ease;
}

.footer.visible {
    transform: translateY(0);
}

.section {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
}

a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

p {
    margin: 0.5rem 0;
    color: #555;
}
</style>