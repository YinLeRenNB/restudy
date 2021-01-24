import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../views/Course.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Course,
    children: [
      {
        path: 'fe',
        name: 'Fe',
        component: () => import('../views/Fe.vue'),
      },
      {
        path: 'rd',
        name: 'Rd',
        component: () => import('../views/Rd.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    alias:'/test', // 别名：不会改变地址栏中的信息
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/detail/:id/:price',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
  {
    path:'/newyear',
    name:'Newyear',
    // redirect:'/', // 重定向：若该页面删除，防止跳转到Error页面而重新定向至主页
    component:()=>import('../views/Newyear.vue'),
    beforeEnter: (to,from,next)=>{
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next();
    }
  },
  // 必须放在最下面
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
