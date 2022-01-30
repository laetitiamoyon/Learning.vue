<template>
  <div>
    <h1 class="title">Les joueurs de tennis</h1>
    <div class="cards" >
      <div v-for="bestPlayer in bestPlayers" :key="bestPlayer.id" class="card">
        <div class="fullname">{{ bestPlayer.firstname }} {{ bestPlayer.lastname }}</div>
        <img class="image" :src="bestPlayer.picture" alt=""/>
        <div class="rank">Rang {{bestPlayer.data.rank}}</div>
        <div>
          <router-link class="button" :to="{ name: 'PlayerInformation', params: {id: bestPlayer.id}}">Voir plus d'informations</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>import getPlayers from "../../utilities/getPlayers"

export default {
  data () {
    return {
      players : [],
      bestPlayers : [],
    }
  },
  async mounted() {
   this.players = await getPlayers()
   this.bestPlayers = this.players.sort((a,b) => a.data.rank - b.data.rank)
  },
}
</script>
<style src="./players.css"></style>