import axios from 'axios';

export const actions = {
  async getPlayers({commit}){
    const response = await axios.get('http://localhost:3001/players', {
      headers: {'Content-Type' : 'application/json'}})
      commit('SET_PLAYERS', response.data)
  },
  addPlayer : (store, firstname, lastname) => {
    store.commit('ADD_PLAYER', firstname, lastname)
  },
  async deletePlayer({commit}, id){
    await axios.delete(`http://localhost:3001/players/${id}`, {
      headers: {'Content-Type' : 'application/json'}})
      commit('DELETE_PLAYER', id)
  },
}