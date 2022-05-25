<template>
  <div id="app">
    <TopMenu />
    <hr>
    <Cep />
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import Cep from './components/Cep.vue'
export default {
  name: 'app',
  components: {
    TopMenu,
    Cep
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em 1em 1em 1em;
  display: grid;
}
</style>