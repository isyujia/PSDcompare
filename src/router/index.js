import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '../views/HomeLayout.vue'
import Compare from '@/views/Compare'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeLayout,
    redirect:'/compare',
    children:[
      {
        path:'compare',
        name:'HomeCompare',
        component:Compare
      },
      {
        path:'history',
        name:'HomeHistory',
        //路由懒加载
        component: () => import('@/views/History')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
