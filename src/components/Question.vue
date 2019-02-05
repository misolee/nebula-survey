<template>
  <div id="question">
    <h3>Question</h3>
    <form @submit.prevent="submitSurveyForm">
      Question: {{ this.question }}
      <div v-for="answer in this.answers" v-bind:key="answer.answer_id">
        <input type="radio" v-bind:id="answer.answer_id" v-bind:value="answer" v-model="picked">
        <label for="one">{{ answer.answer }}</label>
      </div>

      <!-- <span>picked: {{ this.picked }}</span> -->

      <!-- {{ this.total_response }} -->

      <input type="submit" value="Submit">
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
      answers: null,
      picked: null
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
      db.collection('survey-questions').where('question_id', '==', this.question_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.answers[this.picked.answer_id].response++
            doc.ref.update({
              total_response: this.total_response + 1,
              answers: this.answers
            })
          })
        })
        .then(() => {
          this.$router.push({ name: 'stats', params: { question_id: this.question_id }})
        })
    }
  }
}
</script>
