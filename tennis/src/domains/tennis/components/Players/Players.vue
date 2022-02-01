<template >
   <div>
    <h1 :class="$style.title">Les joueurs de tennis</h1>
    <div :class="$style.cards" >
        <Player v-for="bestPlayer in bestPlayers" :key="bestPlayer.id" :player="bestPlayer"/>
    </div>
    <div :class="$style.form">
        <Form></Form>
    </div>
  </div>
</template>

<script>import getPlayers from "../../utilities/getPlayers"
import Player from "../Player/Player.vue"
import Form from "../Form/Form.vue"
export default {
    data() { 
        return { 
            bestPlayers: [],
        } 
    },
    async mounted() {
        this.players = await getPlayers();
        this.bestPlayers = this.players.sort((a, b) => a.data.rank - b.data.rank);
    },
    components: { Player, Form }
}
</script>
<style module src="./players.css"></style>