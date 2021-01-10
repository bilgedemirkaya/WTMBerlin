import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Phone from '../views/Phone.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/phone/:id',
    name: 'phone',
    component: Phone
  },
  {
    path: '/apps',
    name: 'Platform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Platform.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router