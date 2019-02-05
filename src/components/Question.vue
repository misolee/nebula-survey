<template>
  <div id="question">
    <h3>Question</h3>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'question',
  data() {
    return {
      
    }
  },
  created() {
    let numberOfQuestions = 2;
    let randomQuestion = Math.floor(Math.random() * numberOfQuestions);

    db.collection('survey-questions').get().then(
      questions => {
        console.log("questions", questions.docs[randomQuestion].data())
      }
    )
  }
}
</script>
