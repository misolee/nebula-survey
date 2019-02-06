<template>
  <div class="question-page">
    <form @submit.prevent="submitSurveyForm" class="question-answers">
      <div class="question">
        <strong>
          {{ this.question }}
        </strong>
      </div>
      <div class="answer-choices">
        <div class="answers" v-for="answer in this.answers" v-bind:key="answer.answer_id">
          <input type="radio" v-bind:id="answer.answer_id" v-bind:value="answer" v-model="picked">
          <label v-bind:for="answer.answer_id">{{ answer.answer }}</label>
        </div>
      </div>
      <div class="submit-button">
        <input class="submit" type="submit" value="Submit">
      </div>
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
          this.$router.push({ name: 'thankyou', params: { question_id: this.question_id }})
        })
    }
  }
}
</script>

<style scoped>
  .question-page {
    display: flex;
    flex-direction: column;
    margin: 0 350px;
    font-size: 25px;
  }

  .question-answers {
    border-radius: 5px;
    padding: 20px;
    margin-top: 100px;
  }

  .question {
    margin: 20px 20px;
    text-align: center;
  }

  .answer-choices {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .answers {
    display: flex;
    margin: 5px 0;
  }

  label {
    padding: .5rem 1.25rem;
    border-radius: 10px;
    cursor: pointer;
    color: #444;
    transition: box-shadow 400ms ease;
    font-size: 20px;
  }

  label:hover {
    background: #1DA1F3;
    color: white;
    cursor: pointer;
    box-shadow: 0 0px 0 0px rgba(0, 0, 0, 0), 0 6px 10px 0px rgba(0, 0, 0, 0.19);
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: #3E4CEC;
    color: white;
    box-shadow: 0 0px 0 0px rgba(0, 0, 0, 0), 0 6px 10px 0px rgba(0, 0, 0, 0.19);
  }

  .submit-button {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  input.submit {
    background-color: #3EC889;
    height: 50px;
    width: 200px;
    margin: 0 auto;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 0 0px 0 0px rgba(0, 0, 0, 0), 0 6px 10px 0px rgba(0, 0, 0, 0.19);
    transition: 0.5s;
    border: none;
  }

  input.submit:hover {
    background-color: #2BD5C6;
    cursor: pointer;
    border-radius: 30px;
  }

  input.submit:focus {
    outline: none;
  }

  input.submit:active {
    outline: none;
    border: none;
  }
</style>
