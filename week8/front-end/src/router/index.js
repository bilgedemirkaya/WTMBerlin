import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Phone from "../views/Phone.vue"
import Platform from "../views/Platform.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/phone/:id",
    name: "phone",
    component: Phone
  },
  {
    path: "/apps",
    name: "Platform",
    component: Platform
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
