<template>
  <nav>
    <router-link to="/"><img src="../assets/nebula-logo.png"></router-link>
    <div class="navbar-line">The future of health is in your DNA</div>
    <router-link to="/" class="back-to-home"><i class="fas fa-home"></i></router-link>
  </nav>
</template>

<style>
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    color: #00257F;
    height: 100vh;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .navbar-line {
    font-size: 40px;
    font-weight: 700;
    color: #0C1149;
  }

  img {
    width: 200px;
  }

  .back-to-home {
    color: gray;
    font-size: 30px;
    text-decoration: none;
  }

  .back-to-home:hover {
    text-decoration: underline;
  }

  .fa-home {
    font-size: 50px;
    margin-right: 30px;
    color: #2936C7;
  }

  .fa-home:hover {
    color: #2BD5C6;
  }
</style>