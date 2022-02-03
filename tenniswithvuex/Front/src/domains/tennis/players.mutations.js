export const mutations = 
{
  GET_PLAYERS: (state) => {
    state.players
  },
  ADD_PLAYERS: (state, firstname, lastname, rank, country) => {
    state.players.push(({
      firstname: firstname, 
      lastname: lastname, 
      rank: rank, 
      country: country
    }))
  },
  DELETE_PLAYERS: (state, id) => {
    state.players.filter(player => player.id !== id)
  }
}