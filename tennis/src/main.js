import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import PlayerInformation from './domains/tennis/components/PlayerInformation/PlayerInformation.vue'
import Players from './domains/tennis/components/Players/Players.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/', name :'Players', component: Players },
    { path: '/players/:id', name : 'PlayerInformation', component: PlayerInformation }
  ]})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
