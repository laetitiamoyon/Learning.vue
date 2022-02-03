<template >
    <div>
        <router-link tag="button" :class="$style.addPlayerButton" :to="{ name: 'AddPlayer'}">Ajouter un joueur</router-link>
        <div :class="$style.header">
            <h1 v-if="bestPlayers.length >= 1" :class="$style.title">Les joueurs de tennis</h1>
            <input v-if="bestPlayers.length >= 1" type="text" v-model="searchTerm" :class="$style.searchBar" placeholder="Rechercher"/>
        </div>
        <div :class="$style.cards" >
            <Player v-for="bestPlayer in filteredPlayers" :key="bestPlayer.id" :player="bestPlayer" :deletePlayer="deletePlayer"/>
        </div>
  </div>
</template>

<script>import { getAllPlayers } from "../../players.api";
import Player from "../Player/Player.vue"
import Vuex from 'vuex'

export default {
    data() { return { bestPlayers: [], searchTerm: ''} },
    async mounted() {
        this.players = await getAllPlayers();
        this.bestPlayers = this.players.sort((a, b) => a.data.rank - b.data.rank);
    },
    computed: {
        filteredPlayers() { return this.bestPlayers.filter((player) => {
            return player.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
            || player.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())})
        }
    },
    methods: {
      ...Vuex.mapActions([
        'deletePlayer'
      ])
    },
    components: { Player }
}
</script>
<style module src="./players.css"></style>