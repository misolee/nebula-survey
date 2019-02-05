<template>
  <nav>
    <router-link to="/"><img src="../assets/nebula-logo.png"></router-link>
    <router-link to="/" class="back-to-home">HOME</router-link>
  </nav>
</template>

<style>
  body {
    margin: 0;
  }

  nav {
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  img {
    width: 200px;
  }

  .back-to-home {
    color: white;
    font-size: 30px;
    text-decoration: none;
  }

  .back-to-home:hover {
    text-decoration: underline;
  }
</style>