import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: "login",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: '/login',
    name: 'login',
    hidden:true,
    meta:{
      name:"登录"
    },
    component: () => import( '../views/login/index.vue')
  },
  {
    path: '/User',
    name: 'User',
    hidden:true,
    meta:{
      name:"后台"
    },
    component: () => import( '../views/Info/index.vue'),
    children:[{
      path:'/Userindex',
      name:'Userindex',
      component: () => import( '../views/Info/index.vue'),
    }
      

    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
