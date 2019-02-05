<template>
  <div id="stats">
    <h3>Stats</h3>
    {{ this.question }}
    Total Responses: {{ this.total_response }}
    <li v-for="answer in this.answers" v-bind:key="answer.answer_id">
      {{ answer.answer }} Count: {{ answer.response }} Percentage: {{ percentage(answer.response) }}%
    </li>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'stats',
  data() {
    return {
      question_id: null,
      question: null,
      total_response: null,
      answers: null
    }
  },
  beforeRouteEnter (to, from, next) {
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
  },
  methods: {
    percentage(count) {
      return Math.floor((count/this.total_response) * 100)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>