import { database, auth } from '@/firebase.js'
import router from '@/router'

export default {
  state: () => ({
    room: '',
    allRoom: [],
    allMessages: [],
    privateRoom: []
  }),
  actions: {
    newChat ({ dispatch }, payload) {
      if (!payload) { return true }
      const reg = /^[a-zA-Z0-9_!?~\u4e00-\u9fa5]+$/
      if (!reg.test(payload)) {
        dispatch('alertMessage', 'only "English alphabet", "Chinese character" or "_", "!", "?", "~"')
        return true
      }
      const chatroomRef = database.ref('chatroom')
      const chatroom = { room: payload }
      chatroomRef.push(chatroom)
      dispatch('alertMessage', 'Added successfully')
      dispatch('getRoom')
    },
    getRoom ({ commit }) {
      const chatroomRef = database.ref('chatroom')
      const allRoom = []
      chatroomRef.on('value', snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          allRoom.push({ room: data[key].room })
        })
        commit('GETROOM', allRoom)
      })
    },
    enterRoom ({ commit }, payload) {
      router.push(`/chat/${payload}`)
      commit('GETMESSAGES', '')
      commit('ENTERROOM', payload)
    },
    sendMessage ({ rootState, dispatch, state }, payload) {
      const time = new Date()
      const message = {
        user: rootState.accountModule.userName,
        content: payload,
        time: `${time.getHours() < 0 ? '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`,
        photoURL: auth.currentUser.photoURL,
        day: time.getDate()
      }
      const messageRef = database.ref(`message_${state.room}`)
      messageRef.push(message)
      dispatch('getMessages', state.room)
    },
    getMessages ({ commit, state }) {
      const messagesRef = database.ref(`message_${state.room}`)
      const Messages = []
      messagesRef.on('value', snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          Messages.push({
            user: data[key].user,
            content: data[key].content,
            time: data[key].time,
            photoURL: data[key].photoURL,
            day: data[key].day
          })
        })
        commit('GETMESSAGES', Messages)
      })
    },
    getPrivateRoom ({ commit }) {
      const privateroomRef = database.ref('privateroom')
      const privateRoom = []
      privateroomRef.on('value', snapshot => {
        const data = snapshot.val()
        Object.keys(data).forEach(key => {
          privateRoom.push({
            room: data[key].room,
            password: data[key].password,
            hint: data[key].hint
          })
        })
        commit('GETPRIVATEROOM', privateRoom)
      })
    }
  },
  mutations: {
    GETROOM (state, payload) { state.allRoom = payload },
    ENTERROOM (state, payload) { state.room = payload },
    GETMESSAGES (state, payload) { state.allMessages = payload },
    GETPRIVATEROOM (state, payload) { state.privateRoom = payload }
  },
  getters: {
    room: state => state.room,
    allRoom: state => state.allRoom,
    allMessages: state => state.allMessages,
    privateRoom: state => state.privateRoom
  }
}
