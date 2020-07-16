import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/console',
    name: 'Console',
    redirect: 'index',
    component: () => import('../views/Info/index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Console/index.vue'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User/index.vue'),
      }


    ]
  }

]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
