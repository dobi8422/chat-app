import { auth } from '@/firebase.js'
import router from '@/router'

export default {
  state: () => ({ userName: '' }),
  actions: {
    async checkAccount (context, payload) {
      const { email, password } = payload
      let name
      try {
        await auth.signInWithEmailAndPassword(email, password)
          .then(res => {
            name = res.user.displayName
          })
        context.dispatch('alertMessage', `Welcom, ${name}`)
        context.dispatch('UserName', name)
        router.push('/choose_chat')
      } catch {
        context.dispatch('alertMessage', '"Wrong password" or "Email is not yet register"')
      }
    },
    async registerAccount (context, payload) {
      const { name, email, password } = payload
      const time = new Date()
      const id = time.getMilliseconds()
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        await auth.currentUser.updateProfile({
          displayName: name,
          photoURL: `https://picsum.photos/id/${id}/200/200`
        })
        router.push('/login')
        context.dispatch('alertMessage', `Registration success：${name}`)
      } catch {
        context.dispatch('alertMessage', 'Registration failed')
      }
    },
    UserName (context, payload) {
      context.commit('USERNAME', payload)
    },
    logout (context) {
      auth.signOut().then(() => {
        context.dispatch('alertMessage', 'Sign out')
        context.dispatch('UserName', '')
        router.push('/login')
      }).catch(context.dispatch('alertMessage', 'Logout failed'))
    }
  },
  mutations: {
    USERNAME (state, payload) { state.userName = payload }
  },
  getters: {
    userName: state => state.userName
  }
}
