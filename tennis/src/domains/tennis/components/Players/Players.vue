<template >
    <div>
        <div :class="$style.header">
            <h1 v-if="bestPlayers.length >= 1" :class="$style.title">Les joueurs de tennis</h1>
            <input v-if="bestPlayers.length >= 1" type="text" v-model="searchTerm" :class="$style.searchBar" placeholder="Rechercher"/>
        </div>
        <div :class="$style.cards" >
            <Player v-for="bestPlayer in filteredPlayers" :key="bestPlayer.id" :player="bestPlayer" :deletePlayer="deletePlayer"/>
        </div>
        <div :class="$style.form">
            <AddPlayer :addPlayer="addPlayer"/>
        </div>
  </div>
</template>

<script>import getPlayers from "../../utilities/getPlayers"
import Player from "../Player/Player.vue"
import AddPlayer from "../AddPlayer/AddPlayer.vue";

export default {
    data() { 
        return { 
            bestPlayers: [],
            searchTerm: ''
        } 
    },
    async mounted() {
        this.players = await getPlayers();
        this.bestPlayers = this.players.sort((a, b) => a.data.rank - b.data.rank);
    },
    computed: {
        filteredPlayers() {
            return this.bestPlayers.filter((player) => {
            return player.firstname.toLowerCase().includes(this.searchTerm.toLowerCase())
            || player.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())
            })
        }
    },
    methods: {
        deletePlayer (player) {
            this.bestPlayers = this.bestPlayers.filter(p => p !== player)
        },
        addPlayer (firstname, lastname ) {
            this.bestPlayers.push({firstname, lastname})
      }
    },
    components: { Player, AddPlayer }
}
</script>
<style module src="./players.css"></style>