import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './validate.js'
import store from './store/index.js'
import '@fortawesome/fontawesome-free/css/all.css'
import { auth } from '@/firebase.js'

// createApp(App).use(store).use(router).mount('#app')

// 保存使用者狀態 ?? -> chat重整頁面比較不卡
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})
