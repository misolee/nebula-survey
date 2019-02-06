<template>
  <div class="thank-you-page">
    <div class="thank-you"><strong>THANK YOU FOR YOUR RESPONSE</strong></div>
    <router-link class="stats-button" :to="{ name: 'stats', params: { question_id: this.question_id }}">
      <div class="stats">CLICK HERE FOR RESULTS</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question_id: null
      }
    },
    created() {
      this.question_id = this.$route.params.question_id
    }
  }
</script>

<style scoped>
  .thank-you-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thank-you {
    font-size: 55px;
    margin-top: 140px;
  }

  .stats-button {
    text-decoration: none;
    background: #71D1D4;
    color: white;
    border-radius: 10px;
    height: 50px;
    width: 300px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0px 0 0px rgba(0, 0, 0, 0), 0 6px 10px 0px rgba(0, 0, 0, 0.19);
    transition: 0.5s;
    margin-top: 50px;
  }

  .stats-button:hover {
    background: #EFCC48;
    cursor: pointer;
    border-radius: 30px;
  }

  .stats {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    align-self: center;
  }
</style>