import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAVmhzkedl8VUk3Uw8-aC30zM4pXt2r_Xw',
  authDomain: 'chat-app-29201.firebaseapp.com',
  databaseURL: 'https://chat-app-29201-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-app-29201',
  storageBucket: 'chat-app-29201.appspot.com',
  messagingSenderId: '840786297605',
  appId: '1:840786297605:web:4aea95163d2cff23e82d6c'
}

export const database = firebase.initializeApp(firebaseConfig).database()

export const auth = firebase.initializeApp(firebaseConfig).auth()
