<template>
  <div>
    <h1>Description du joueur</h1>
    <p>Current userId is {{this.id}}</p>
    <button @click="backToHome">Retouner à la page d'accueil</button>
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
  // props: ['firstname', 'lastname', 'age', 'rank', 'country']
}
</script>