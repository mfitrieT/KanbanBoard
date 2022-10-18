import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // store data to app
  state: {
  },
  getters: {
  },
  // mutation is the only way to change the data in state, it is by triggering or commiting
  // can't trigger async code in mutation
  // triggering mutations is called 'commit'
  mutations: {
  },
  // can do async in actions
  // if want to change the data in state, need to commit the mutations
  // triggering actions is called 'dispatching'
  actions: {
  },
  modules: {
  }
})
