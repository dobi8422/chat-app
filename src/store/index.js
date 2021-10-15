import { createStore } from 'vuex'
import accountModule from './account'
import chatModule from './chat'

const store = createStore({
  state: () => ({
    message: '',
    fullWidth: 800,
    isModal: false,
    isPrompt: false
  }),
  actions: {
    alertMessage ({ commit }, payload) {
      commit('MESSAGE', payload)
      setTimeout(() => { commit('MESSAGE', '') }, 2000)
    },
    resizeWidth ({ commit }, payload) {
      commit('RESIZEWIDTH', payload)
    },
    closeModal ({ commit }) {
      commit('CLEARMODAL')
      commit('ISMODEL', false)
    }
  },
  mutations: {
    MESSAGE (state, payload) { state.message = payload },
    RESIZEWIDTH (state, payload) { state.fullWidth = payload },
    ISMODEL (state, payload) { state.isModal = payload },
    CLEARMODAL (state) { state.lookUserProfile = [] },
    ISPROMPT (state, payload) { state.isPrompt = payload }
  },
  getters: {
    message: state => state.message,
    fullWidth: state => state.fullWidth,
    isModal: state => state.isModal,
    isPrompt: state => state.isPrompt
  },
  modules: {
    accountModule,
    chatModule
  }
})

export default store
