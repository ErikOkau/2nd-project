<script setup lang="ts">

// Define props
defineProps<{
  question: any
}>()

</script>

<template>
  <div class="container">
    <div class="Question">
      <h2>{{ question.question }}</h2>
    </div>
  </div>
</template>


<style scoped lang="scss">


.container {
  width: 40rem;
  height: 20rem;
  background: black;

  margin-left: 33%;
  margin-top: 6%;

  border-radius: 25px;
  text-align: center;
  transition: 0.5s ease-in-out;
  box-shadow: 0px 0px 3px 10px;


  .Question>h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: white;
    padding-top: 3rem;
  }

  .Question label {
    color: white;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>