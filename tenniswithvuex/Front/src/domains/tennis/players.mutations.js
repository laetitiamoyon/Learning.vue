export const mutations = 
{
  SET_PLAYERS: (state, players) => {state.players = players},
  DELETE_PLAYER: (state, id) => state.players = state.players.filter(player => player.id !== id),
  ADD_PLAYER:(state,newPlayer) => state.players.unshift(newPlayer)
}