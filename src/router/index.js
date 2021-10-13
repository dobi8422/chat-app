import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/choose_chat' },
  { path: '/login', name: 'Login', component: () => import('@/views/Login.vue') },
  { path: '/register', name: 'Register', component: () => import('@/views/Register.vue') },
  { path: '/choose_chat', name: 'ChooseChat', component: () => import('@/views/ChooseChat.vue') },
  { path: '/chat/:chatId', name: 'Chat', component: () => import('@/views/Chat.vue') }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
