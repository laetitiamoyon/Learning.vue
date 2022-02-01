<template>
  <div :key="player.id" :class="$style.card">
    <div :class="$style.fullname">{{ player.firstname }} {{ player.lastname }}</div>
    <img :class="$style.image" :src="player.picture" alt=""/>
    <div :class="$style.rank">Rang {{player.data.rank}}</div>
    <router-link tag="button" :class="$style.button" :to="{ name: 'PlayerInformation', params: {id: player.id}}">Voir plus d'informations</router-link>
  </div>
</template>

<script>
export default { props: ['player'] }
</script>

<style module src="./player.css"></style>