import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/book',
    name:'书籍',
    component:()=>import('../views/Book.vue')
  },
  {
    path: '/',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/chat',
    component: () => import('../views/Chat.vue'),
  },
  {
    path: '/music',
    component: () => import('../views/Music.vue'),
  },
  {
    path: '/movieDeatil/:id',
    component: () => import('../views/movieDetail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
