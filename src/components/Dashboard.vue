<template>
  <div class="dashboard">
    <div class="welcome-instructions">
      <div class="welcome">Welcome!</div>
      <div class="front-page-sentences">Contribute to medical breakthroughs and get rewarded.</div>
      <div class="front-page-sentences">Understand your genes. Own your health data.</div>
      <div class="instructions">Instructions</div>
      <div class="front-page-sentences">You will be given one random multiple choice question.</div>
      <div class="front-page-sentences">Choose one of the answer and hit the submit button.</div>
      <router-link class="start-button" to="/question">
        <div class="start">START</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 350px;
  }

  .welcome-instructions {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 20px;
    margin-top: 60px;
  }

  .welcome {
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 20px;
    /* min-width: 495px; */
  }

  .front-page-sentences {
    margin: 5px 0;
    font-size: 18px;
    color: #515584;
    /* min-width: 495px; */
  }

  .instructions {
    font-weight: bold;
    font-size: 22px;
    margin: 40px 0 10px 0;
    /* min-width: 495px; */
  }

  .start-button {
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

  @keyframes button {
    0% {transform: scale(1);}
    50% {transform: scale(1.06);}
    100% {transform: scale(1);}
  }

  .start-button:hover {
    border-radius: 30px;
    background-color: #3EC889;
    animation: button 1s infinite;
  }

  .start {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
</style>
