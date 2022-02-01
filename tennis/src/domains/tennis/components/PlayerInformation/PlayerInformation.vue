<template>
  <div>
    <div :class="$style.container">
      <div :class="$style.player">
        <div :class="$style.title">{{ player.firstname }} {{ player.lastname }}</div>
        <img :class="$style.image" :src="player.picture" alt=""/>
        <div><div :class="$style.label">Rang :</div> {{player.data.rank}}</div>
        <div><div :class="$style.label">Age :</div> {{player.data.age}} ans</div>
        <div><div :class="$style.label">Taille :</div> {{player.data.height}}cm</div>
        <div><div :class="$style.label">Poids :</div> {{player.data.weight / 1000}}kg</div>
        <div><div :class="$style.label">Pays d'origine :</div></div>
        <img :class="$style.image" :src="player.country.picture" alt="player.country.code"/>
        <div><div :class="$style.label">Résultat des derniers matchs :</div> {{player.data.last.join(', ')}}</div>
        <div><div :class="$style.label">Nombre de points :</div> {{player.data.points}}</div>
      </div>
      <button :class="$style.button" @click="backToHome">Retouner à la page d'accueil</button>
    </div>
  </div>
</template>

<script>import getPlayers from "../../utilities/getPlayers";

export default {
  name: 'PlayerInformation',
  data () {
    return { 
      id: this.$route.params.id,
      player: []
    }
  },
  methods: { backToHome () { this.$router.push('/'); }},
  async mounted () {
    this.id = this.$route.params.id;
    this.players = await getPlayers()
    this.player = this.players.find(p => p.id == this.id)
  }
}
</script>

<style module src="./playerInformation.css"></style>