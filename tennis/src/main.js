import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import PlayerInformation from './components/PlayerInformation.vue'
import Players from './components/Players.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/', name :'Players', component: Players },
    { path: '/players/:id', name : 'PlayerInformation', component: PlayerInformation  }
  ]})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
