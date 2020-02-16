<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/foo">Home</router-link>
    <router-link to="/bar">Details</router-link>
    <router-view></router-view>


    

  </div>
</template>

<script>
import test from './components/test.vue'

export default {
  name: 'App',
  components: {
    view,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



