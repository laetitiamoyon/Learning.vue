<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="title">{{ player.firstname }} {{ player.lastname }}</div>
        <img class="image" :src="player.picture" alt=""/>

        <!-- <div><div class="label">Rang :</div> {{player.data.rank}}</div>
        <div><div class="label">Age :</div> {{player.data.age}} ans</div> -->
        <!-- <div><div class="label">Taille :</div> {{player.data.height}}cm</div>
        <div><div class="label">Poids :</div> {{player.data.weight / 1000}}kg</div> -->
        <!-- <div><div class="label">Sex :</div> {{player.sex === 'M' ? 'Homme' : 'Femme'}}</div> -->
        <div><div class="label">Pays d'origine :</div></div>
        <!-- <img class="image" :src="player.country.picture" alt="player.country.code"/>

        <div><div class="label">Résultat des derniers matchs :</div> {{player.data.last.join(', ')}}</div>
        <div><div class="label">Nombre de points :</div> {{player.data.points}}</div> -->
      </div>
      <button class="image" @click="backToHome">Retouner à la page d'accueil</button>
    </div>
  </div>
</template>

<script>
export default{
    name: 'PlayerInformation',
  data () {
    return { 
      id: this.$route.params.id,
    }
  },
  methods: {
    backToHome () {
      this.$router.push('/');
    },
  },
}
</script>