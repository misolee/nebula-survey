<template>
  <div id="question">
    <h3>Question</h3>
    <form @submit.prevent="submitSurveyForm">
      Question: {{ this.question }}
      <li v-for="answer in this.answers" v-bind:key="answer.answer_id">
        {{ answer.answer }}
      </li>
      <router-link v-if="this.question_id" v-bind:to="{ name: 'stats', params: { question_id: this.question_id }}">
        <input type="submit" value="Submit">
      </router-link>
    </form>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'question',
  data() {
    return {
      id: null,
      question_id: null,
      question: null,
      total_response: null,
      answers: null
    }
  },
  created() {
    let numberOfQuestions = 2;
    let randomQuestion = Math.floor(Math.random() * numberOfQuestions); // get random question from db

    db.collection('survey-questions').get().then(
      questions => {
        const question = questions.docs[randomQuestion]
        this.id = question.id // set random question as the constructor
        this.question_id = question.data().question_id
        this.question = question.data().question
        this.total_response = question.data().total_response
        this.answers = question.data().answers
      }
    )
  },
  methods: {
    submitSurveyForm() {
      db.collection('survey-questions').where('question_id', '==', to.params.question_id).get().then(
        question => question.forEach(doc => {
          next(vm => {
            vm.question_id = doc.data().question_id
            vm.question = doc.data().question
            vm.total_response = doc.data().total_response
            vm.answers = doc.data().answers
          })
        })
      )
    }
  }
}
</script>
