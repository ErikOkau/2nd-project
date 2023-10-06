<template>
    <div class="error-container">
        <div class="error-content">
            <h3>Du har gått deg vill, din idiot!</h3>
            <p>It seems like you're lost in the digital wilderness. Let's get you back on track:</p>
            <RouterLink to="/" class="home-link">Go home</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.error-content {
    text-align: center;
    margin-bottom: 17.5 rem;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

h3 {
    font-size: 36px;
    color: black;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
    color: #333;
    margin-bottom: 30px;
}

.home-link {
    background-color: black;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 20px;
    transition: background-color 0.3s, transform 0.3s;
}

.home-link:hover {
    background-color: grey; 
    transform: scale(1.1);
}
</style>
