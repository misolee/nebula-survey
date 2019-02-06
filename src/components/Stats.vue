<template>
  <div class="stats-page">
    <div class="stats">
      <div class="stats-header">Stats</div>
      <div class="question-response-count">
        <div class="question">{{ this.question }}</div>
      </div>

      <li v-for="answer in this.answers" v-bind:key="answer.answer_id">
        <div class="answer-response">
          <div>{{ answer.answer }}</div>
          <div>Count: <strong>{{ answer.response }}</strong></div>
        </div>

        <!-- bar animation -->
        <div class="full-bar">
          <div class="percentage-bar" :style="{ width: percentage(answer.response)+ '%' }">
            <div class="percentage">{{ percentage(answer.response) }}%</div>
          </div>
        </div>
      </li>

      <div class="total-response">
        <div>
          Total Responses: <strong>{{ this.total_response }}</strong>
        </div>
      </div>

      <!-- re-route to home -->
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

  // called before the route that renders this component is confirmed
  // in React => componentDidMount
  beforeRouteEnter (to, from, next) {
    db.collection('survey-questions')
    .where('question_id', '==', to.params.question_id)
    .get()
    .then(question => {
      question.forEach(doc => {
        // access to component instance via `vm`
        next(vm => {
          let { question_id, question, total_response, answers } = doc.data()

          vm.question_id = question_id
          vm.question = question
          vm.total_response = total_response
          vm.answers = answers
        })
      })
    })
  },
  methods: {
    percentage(count) {
      return Math.floor((count / this.total_response) * 100)
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
    margin-top: 10px;
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
    margin-bottom: 20px;
    font-size: 22px;
    justify-content: center;
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

  /* percent animation */
  @keyframes percentage {
    0% { width: 0% }
  }

  .percentage {
    text-align: center;
    color: white;
  }

  .total-response {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;
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