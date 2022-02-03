import Vuex from 'vuex'
import Vue from 'vue'
import { state } from './players.state'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  actions: {
    loadPlayers ({ commit }) {
        axios
            .get('http://localhost:3001/players', {
                headers: {
                  'Content-Type' : 'application/json',
                }
            })
            .then(response => response.data)
            .then(players => {
                console.log(players);
            commit('SET_PLAYERS', players)
        })
    }
},
  getters: {
    players: state => {
        return state.players;
    }
},
  mutations: {
    SET_PLAYERS (state, players) {
        state.players = players
    }
},

})

