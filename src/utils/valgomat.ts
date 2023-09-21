import { ref, computed } from 'vue'
import valgomatConfig from '@/assets/scripts/valgomatConifg'


export const currentQuestionIndex = ref(-1)
export const userAnswers = ref<number[]>([])



export const currentQuestion = computed(() => {
    if (currentQuestionIndex.value >= 0 && currentQuestionIndex.value < valgomatConfig.questions.length) {
      return valgomatConfig.questions[currentQuestionIndex.value]
    }
    return null
  })


export const showNextQuestion = () => {
    if (currentQuestionIndex.value < valgomatConfig.questions.length - 1) {
      currentQuestionIndex.value++
    }
  }


export const updateAnswers = (value: number) => {
    userAnswers.value.push(value)
  }


  
export const handleAnswer = (value: number) => {
    userAnswers.value.push(value)
  }
  