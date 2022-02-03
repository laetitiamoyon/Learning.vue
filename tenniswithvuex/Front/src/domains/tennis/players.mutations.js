export const mutations = 
{
  SET_PLAYERS (state, players) {state.players = players},
  ADD_PLAYER (state, lastname, firstname) {
    state.players.push({lastname: lastname,firstname: firstname})
  },
  DELETE_PLAYER : (state, id) => state.players = state.players.filter(player => player.id !== id)
}