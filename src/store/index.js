import { createStore } from 'vuex'

import accountModule from './account'
import chatModule from './chat'

const store = createStore({
  state: () => ({
    message: '',
    fullWidth: 800
  }),
  actions: {
    alertMessage ({ commit }, payload) {
      commit('MESSAGE', payload)
      setTimeout(() => { commit('MESSAGE', '') }, 2000)
    },
    resizeWidth ({ commit }, payload) {
      commit('RESIZEWIDTH', payload)
    }
  },
  mutations: {
    MESSAGE (state, payload) { state.message = payload },
    RESIZEWIDTH (state, payload) { state.fullWidth = payload }
  },
  getters: {
    message: state => state.message,
    fullWidth: state => state.fullWidth
  },
  modules: {
    accountModule,
    chatModule
  }
})

export default store
