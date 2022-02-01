<template >
   <div>
    <h1 class="title">Les joueurs de tennis</h1>
    <div class="cards" >
        <Player v-for="bestPlayer in bestPlayers" :key="bestPlayer.id" :player="bestPlayer"/>
    </div>
  </div>
</template>

<script>import getPlayers from "../../utilities/getPlayers"
import Player from "../Player/Player.vue"

export default {
    data() { return { bestPlayers: [] } },
    async mounted() {
        this.players = await getPlayers();
        this.bestPlayers = this.players.sort((a, b) => a.data.rank - b.data.rank);
    },
    components: { Player }
}
</script>
<style src="./players.css"></style>