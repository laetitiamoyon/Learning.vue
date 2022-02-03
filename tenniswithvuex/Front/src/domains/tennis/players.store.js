import Vuex from 'vuex'
import Vue from 'vue'
import { getters, state } from "./players.state";
import { actions } from "./players.action";

import { mutations } from "./players.mutations";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
  strict: true

})

