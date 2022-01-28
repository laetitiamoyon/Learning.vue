<template>
  <div class="counter">
    {{count}}
    <button class="button" @click="increment">+</button>
    <button class="button" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () { return { count : 0 }}, 
  methods: {
    increment () { this.count+= 2 },
    decrement () { this.count-= 2 }
  }} 
</script>

<style src="./Counter.css"></style>