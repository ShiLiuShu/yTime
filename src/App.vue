<template>
  <div id="app">
    <router-view></router-view>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import FootNav from './components/FootNav/FootNav.vue'
export default {
  name: 'app',
  components:{
    FootNav
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
