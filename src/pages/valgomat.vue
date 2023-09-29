<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import valgomatConfig from '@/assets/scripts/valgomatConfig'
import Question from '@/components/valgomat/question.vue'
import Emojibutton from '@/components/valgomat/emojibutton.vue'


// refs
const parties = valgomatConfig.parties; // Bruk partinavns-arrayet fra konfigurasjonen

const startTest = ref(false)
const buttonHide = ref(false)
const currentQuestionIndex = ref(-1)
const userAnswers = ref<number[]>([])
const partyPoints = ref<{ [party in typeof parties[number]]: number }>({});


// Hide the "Start" button and begin the test
const hideButton = () => {
  startTest.value = !startTest.value
  buttonHide.value = !buttonHide.value
  showNextQuestion()
}


// Compute the current question
const currentQuestion = computed(() => {
  if (currentQuestionIndex.value >= 0 && currentQuestionIndex.value < valgomatConfig.questions.length) {
    return valgomatConfig.questions[currentQuestionIndex.value]
  }
  return null
})


// Compute the party points in descending order
const sortedPartyPoints = computed(() => {
  const pointsArray = Object.keys(partyPoints.value).map((party) => ({
    party,
    points: partyPoints.value[party],
  }));

  return pointsArray.sort((a, b) => b.points - a.points);
})


// Function to update user answers
const updateAnswers = (value: number) => {
  userAnswers.value.push(value);
  console.log(userAnswers.value)
}

// Function to show the next question
const showNextQuestion = () => {
  if (currentQuestionIndex.value < valgomatConfig.questions.length - 1) {
    currentQuestionIndex.value++
  } else {
    startTest.value = false; // Hide questions and emojibuttons when all questions are answered
    finish()
  }
}


// Function to update party points based on user's answer
const updatePartyPoints = (value: number) => {
    if (currentQuestion.value) {
        const currentPartyOpinion = currentQuestion.value.opinions;
        const selectedParties = parties.filter(party => currentPartyOpinion[party] === 1)

        selectedParties.forEach(party => {
            partyPoints.value[party] = (partyPoints.value[party] || 0) + value
        })

        updateAnswers(value)
        showNextQuestion()
    }
}



// Function to finish the test
const finishRef = ref(false)
const finish = () => {
  finishRef.value = !finishRef.value
}

// Function to restart the test
const restart = () => {
    location.reload()
}




const maxPoints = computed(() => {
    const pointsArray = Object.keys(partyPoints.value).map(party => partyPoints.value[party])
    return Math.max(...pointsArray);
})

const partyProgress = computed(() => {
    const progress: { party: string; percentage: number }[] = [];
    for (const party in partyPoints.value) {
        const percentage = (partyPoints.value[party] / maxPoints.value) * 100;
        progress.push({ party, percentage })
    }
    // Sort the parties in descending order based on the percentage
    return progress.sort((a, b) => b.percentage - a.percentage);
});


</script>


<template>
    <div class="header">
        <h1 v-if="!finishRef">Valgomat</h1>
        <h2 v-if="!finishRef">Svar på påstandene, så finner vi ut hvilket parti som er mest enig med deg!</h2>

        <button class="button" @click="hideButton" :data-showButton="!buttonHide">Start</button>
    </div>

  
        <div class="container" v-if="startTest && currentQuestion" :data-showButton="buttonHide">
          <div class="questions">
            <Question :question="currentQuestion" :variabel="startTest" />
          </div>
          
          <div class="emojibuttons">
              <Emojibutton class="emoji" v-if="startTest" @answer="updatePartyPoints" :data-showButton="buttonHide"/>
          </div>
      </div>
 
      <div class="party-points" v-else>
        <h3 v-if="finishRef">Resultat</h3>
          <div v-for="party in partyProgress" :key="party.party">
            <div class="party-name">{{ party.party }}</div>
              <div class="progress-bar">
                <div class="progress" :style="{ width: party.percentage + '%' }"></div>
              </div>
            </div>
            
          <button class="start_test" @click="restart" v-if="finishRef">Ta testen på nytt</button>
          
      </div>
   
</template>


<style scoped lang="scss">

.emoji {
    transition: 0.5s ease-in-out;
    opacity: 0;

    &[data-showButton="true"] {
        opacity: 1;
    }
}

.container {
    transition: 0.5s ease-in-out;

    
    &[data-showButton="false"] {
        opacity: 0;
        animation: slideInLeft 0.5s ease-in-out;
    }

    &[data-showButton="true"] {
        animation: slideInLeft 0.5s ease-in-out;
        opacity: 1;
    }
}

.party-points {
    margin-top: -6rem;
    margin-left: 33%;
    width: 40rem;
    text-align: center;
    animation: slideInLeft 0.5s ease-in-out;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-play-state: running;
    animation-timing-function: ease-in-out;

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: -1rem;
    }

    div {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        .party-name {
            font-size: 1.6rem;
            width: 100px;
        }

        .progress-bar {
            flex: 1;
            height: 24px;
            background-color: #f5f5f5;
            border-radius: 12px;
            margin-left: 1rem;
            position: relative;
            overflow: hidden;
        }

        .progress {
            height: 100%;
            background-color: #4caf50; /* Green color for the progress bar */
            transition: width 0.5s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            color: #fff;
        }
    }
}


.emojibuttons {
    display: grid;
    place-items: center;
    margin-top: -14.6rem;
    margin-right: 0.9rem;
}

.header {
    margin-left: 32.9%;
    width: 640px;
    height: 100px;
    margin-top: 3%;

    text-align: center;

    .button {
        margin-top: 1.5rem;
        width: 10rem;
        height: 3rem;
        background: #000;
        color: #fff;
        border: none;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s ease-in-out;

        &:hover {
            background: grey;
            color: #000;
        }

        &[data-showButton="false"] {
            opacity: 0;
        }
    }
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-size: 3rem;
    font-weight: 700;
}

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
}

.start_test {
    margin-top: 2rem;
    width: 12rem;
    height: 4rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    padding: 0.4rem 0.4rem 0.4rem 0.4rem;
}

.start_test:hover {
    background: grey;
    color: #000;
}

</style>