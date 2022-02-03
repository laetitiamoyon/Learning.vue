import Vuex from 'vuex'
import Vue from 'vue'
import { state } from './players.state'
import { actions } from './players.actions'
import { mutations } from './players.mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters: { players: state => { return state.players;}},
})

