<template >
 <div>
    <div :class="$style.header">
        <router-link tag="button" :class="$style.button" :to="{ name: 'AddPlayer'}">Ajouter un joueur</router-link>
        <h1 v-if="players.length >= 1" :class="$style.title">Les joueurs de tennis</h1>
        <input v-if="players.length >= 1" type="text" v-model="searchTerm" :class="$style.searchBar" placeholder="Rechercher"/>
    </div>
    <div :class="$style.cards" >
        <Player v-for="player in players" :key="player.key" :player="player" :deletePlayer="deletePlayer"/>
    </div>
  </div>
</template>

<script>
import Player from "../Player/Player.vue"
import Vuex from 'vuex'
export default {
data() { return { searchTerm: ''} },
computed: {
    ...Vuex.mapGetters(["players"]),
},
methods: {
    ...Vuex.mapActions(['getPlayers', 'deletePlayer'])
},
created () {this.getPlayers()},
components: { Player }
}
</script>
<style module src="./players.css"></style>