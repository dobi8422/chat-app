import { auth, database } from '@/firebase.js'
import router from '@/router'

export default {
  state: () => ({
    userName: '',
    userState: [],
    lookUserProfile: []
  }),
  actions: {
    async checkAccount ({ dispatch }, payload) {
      const { email, password } = payload
      let name
      try {
        await auth.signInWithEmailAndPassword(email, password)
          .then(res => {
            name = res.user.displayName
          })
        dispatch('alertMessage', `Welcom, ${name}`)
        dispatch('UserName', name)
        dispatch('UserState')
        router.push('/choose_chat')
      } catch {
        dispatch('alertMessage', '"Wrong password" or "Email is not yet register"')
      }
    },
    async registerAccount ({ dispatch }, payload) {
      const { name, email, password } = payload
      const time = new Date()
      const id = time.getMilliseconds()
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        await auth.currentUser.updateProfile({
          displayName: name,
          photoURL: `https://picsum.photos/id/${id}/200/200`,
          phoneNumber: 'nothing' // 代替introdution
        })
        router.push('/login')
        dispatch('alertMessage', `Registration success：${name}`)
      } catch {
        dispatch('alertMessage', 'Registration failed')
      }
    },
    UserName ({ commit }, payload) {
      commit('USERNAME', payload)
    },
    logout ({ dispatch }) {
      auth.signOut().then(() => {
        dispatch('alertMessage', 'Sign out')
        dispatch('UserName', '')
        router.push('/login')
      }).catch(dispatch('alertMessage', 'Logout failed'))
    },
    UserState ({ commit }) {
      const currentUser = auth.currentUser
      const { displayName, photoURL, uid, phoneNumber } = currentUser
      const userstate = database.ref(`userstate/${uid}`)
      const connect = database.ref('.info/connected')
      connect.on('value', snapshot => {
        if (snapshot.val()) {
          const isOnline = {
            user: displayName,
            online: true,
            photoURL: photoURL,
            phoneNumber: phoneNumber
          }
          const isOffline = {
            user: displayName,
            online: false,
            photoURL: photoURL,
            phoneNumber: phoneNumber
          }
          userstate.onDisconnect().set(isOffline)
            .then(() => { userstate.set(isOnline) })
        }
      })
      database.ref('userstate').on('value', (snapshot) => {
        commit('USERSTATE', snapshot.val())
      })
    },
    UserProfile ({ commit, state }, payload) {
      const lookUserProfile = Object.values(state.userState).filter(item => {
        return item.user === payload
      })
      commit('LOOKUSERPROFILE', lookUserProfile)
      commit('ISMODEL', true)
    }
    // editProfile ({ state, dispatch }, payload) {
    //   console.log(payload)
    //   // auth.currentUser.updateProfile({
    //   //   photoURL: `https://picsum.photos/id/${id}/200/200`
    //   // })
    //   // dispatch('alertMessage', `Registration success：${name}`)
    //   dispatch('UserProfile', state.userName)
    // }
  },
  mutations: {
    USERNAME (state, payload) { state.userName = payload },
    USERSTATE (state, payload) { state.userState = payload },
    LOOKUSERPROFILE (state, payload) { state.lookUserProfile = payload }
  },
  getters: {
    userName: state => state.userName,
    userState: state => state.userState,
    userProfile: state => state.lookUserProfile
  }
}
