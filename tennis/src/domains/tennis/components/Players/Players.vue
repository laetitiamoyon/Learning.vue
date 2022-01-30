<template>
  <div>
    <h1 class="title">Les joueurs de tennis</h1>
    <div class="cards" >
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

<script>import getPlayers from "../../utilities/getPlayers"

export default {
  data () {
    return {
      players : [],
    }
  },
  async mounted() {
   this.players = await getPlayers()
  },
  
}
</script>
<style src="./players.css"></style>