<template>
  <div class="stats-page">
    <div class="stats">
      <div class="stats-header">Stats</div>
      <div class="question-response-count">
        <div class="question">{{ this.question }}</div>
        <div class="total-response">Total Responses: <strong>{{ this.total_response }}</strong></div>
      </div>
      <li v-for="answer in this.answers" v-bind:key="answer.answer_id">
        <div class="answer-response">
          <div>{{ answer.answer }}</div>
          <div>Count: <strong>{{ answer.response }}</strong></div>
        </div>
        <div class="full-bar">
          <div class="percentage-bar" :style="{ width: percentage(answer.response)+ '%' }">
            <div class="percentage">{{ percentage(answer.response) }}%</div>
          </div>
        </div>
      </li>
      <router-link to="/" class="back-button">
        <div class="back">Back</div>
      </router-link>
    </div>
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
  .stats-page {
    display: flex;
    flex-direction: column;
    margin: 0 350px;
    font-size: 20px;
  }

  .stats {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 20px;
    margin-top: 50px;
  }

  .stats-header {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .question-response-count {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 25px;
    margin-left: 5px;
  }

  .question {
    font-weight: bold;
  }

  li {
    list-style: none;
  }

  .answer-response {
    display: flex;
    justify-content: space-between;
    margin: 5px 0 5px 10px;
  }

  .full-bar {
    background-color: #F4F8FF;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .percentage-bar {
    background-color: #7233FF;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: percentage 1.5s ease-out;
  }

  @keyframes percentage {
    0% { width: 0% }
  }

  .percentage {
    text-align: center;
    color: white;
  }

  .back-button {
    background-color: #2BD5C6;
    height: 50px;
    width: 200px;
    margin: 0 auto;
    color: white;
    text-decoration: none;
    box-shadow: 0 0px 0 0px rgba(0, 0, 0, 0), 0 6px 10px 0px rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    transition: 0.5s;
    font-size: 20px;
    margin-top: 20px;
  }

  .back-button:hover {
    border-radius: 30px;
    background-color: #3EC889;
  }

  a {
    text-decoration: none;
  }

  .back {
    display: flex;
    flex-direction: column;
    padding: 15px;
    text-align: center;
  }
</style>