<template>
  <div id="app">
    <Navbar/>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }

  .router-view {
    background-image: url("./assets/background.png");
    background-size: cover;
    height: Calc(100vh - 105px);
    min-width: 1227px;
  }
</style>
