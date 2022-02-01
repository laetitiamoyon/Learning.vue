<template>
  <div :key="player.id" class="card">
    <div class="fullname">{{ player.firstname }} {{ player.lastname }}</div>
    <img class="image" :src="player.picture" alt=""/>
    <div class="rank">Rang {{player.data.rank}}</div>
    <router-link tag="button" class="button" :to="{ name: 'PlayerInformation', params: {id: player.id}}">Voir plus d'informations</router-link>
  </div>
</template>

<script>
export default { props: ['player'] }
</script>