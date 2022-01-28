<template>
  <div id="app">
    <Counter></Counter>
    <Alert></Alert>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: { Counter, Alert }
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
