<template >
    <div>
        <Player v-for="player in players" :key="player.id" :player="player"></Player>
  </div>
</template>

<script>
import Player from "../Player/Player.vue"
import Vuex from 'vuex'
export default {

computed: {
    ...Vuex.mapState(["players"])
  },
  mounted() {
    this.$store.dispatch('loadPlayers')
  },
    components: { Player }
}
</script>
<style module src="./players.css"></style>