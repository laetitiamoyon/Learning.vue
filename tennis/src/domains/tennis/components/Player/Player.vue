<template>
  <div :key="player.id" :class="$style.card">
    <button :class="$style.deleteButton" @click="deletePlayer(player)">X</button>
    <div :class="$style.fullname">{{ player.firstname }} {{ player.lastname }}</div>
    <img :class="$style.image" :src="player.picture" alt=""/>
    <div :class="$style.rank">Rang {{player.data.rank}}</div>
    <div :class="$style.voted">
      <div :class="$style.like" src="" alt="" @click="increment"></div>
      <div :class="$style.dislike" src="" alt="" @click="decrement"></div>
    </div>
    <span>{{ count }} like<span v-if="this.count >= 2">s</span> </span>
    <router-link tag="button" :class="$style.button" :to="{ name: 'PlayerInformation', params: {id: player.id}}">Voir plus d'informations</router-link>
  </div>
</template>

<script>
export default 
{ 
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    increment () { this.count++ },
    decrement () 
    { 
      if (this.count === 0){
        return ''
      }
      return this.count-- 
    }
  },
  props: ['player', 'deletePlayer']
}
</script>

<style module src="./player.css"></style>