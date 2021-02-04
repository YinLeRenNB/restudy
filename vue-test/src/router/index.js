import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '电影',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/book',
    name: '书籍',
    component: () => import('../views/Book.vue'),
  },
  {
    path: '/music',
    name: '音乐',
    component: () => import('../views/Music.vue'),
  },
  {
    path: '/chat',
    name: '聊天',
    component: () => import('../views/Chat.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
