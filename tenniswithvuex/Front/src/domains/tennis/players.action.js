export const actions = 
{
  getPlayers : (store, players) => {
    store.commit('GET_PLAYERS', players)
  },
  addPlayer : (store, firstname, lastname, rank, country) => {
    store.commit('ADD_PLAYER', firstname, lastname, rank, country)
  },
  deletePlayer : (store, id) => {
    store.commit('DELETE_PLAYER', id)
  },
}