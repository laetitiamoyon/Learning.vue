<template>
  <div>
    <h1 class="title">Les joueurs de tennis</h1>
    <div class="container">
      <div v-for="player in players" :key="player.id" class="card">
        <div class="fullName">{{ player.firstname }} {{ player.lastname }}</div>
        <img class="image" :src="player.picture" alt=""/>
        <div class="rank">Rang {{player.data.rank}}</div>
        <button class="button">
          <router-link :to="{ name: 'PlayerInformation', params: {id: player.id}}">Voir plus d'informations</router-link>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      players : [],
    }
    
  },
  methods: {
    getPlayerData () {
      axios.get('https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json')
          .then(response => this.players =  response.data.players)
    },
  },
  mounted() {
    this.getPlayerData()
  },
  
}
</script>

<style src="./tennis.css"></style>