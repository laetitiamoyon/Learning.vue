<template>
  <div>
    <transition name="fade">
      <div class="alert" v-if="visible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus exercitationem eum voluptatum dolor? Amet recusandae sequi debitis? Est nostrum doloribus fugit consequatur illum corporis magnam voluptatibus exercitationem iusto soluta?
      </div>
    </transition>
    <button @click="toggle">bouton</button>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () { return { visible : true }},
  methods: { toggle () { this.visible = !this.visible }}} 
</script>

<style>
  .fade-enter-active, .fade-leave-active 
  {
    transition: opacity .5s, transform 1s;
  }
  .fade-enter, .fade-leave-active
  {
    opacity: 0;
    transform: translateX(20px);

  }
</style>

