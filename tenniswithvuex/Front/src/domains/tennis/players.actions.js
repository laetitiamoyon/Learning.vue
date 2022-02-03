import axios from "axios"

export const getPLayers = ({commit}) => {
  axios.get('https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json://localhost:3001/players').then(response => 
    { commit('SET_PLAYERS', response.data.players)})
}