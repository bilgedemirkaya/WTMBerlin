import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import SingleItem from "../views/SingleItem.vue"
import Platform from "../views/Platform.vue"
import NotFound from "../views/NotFound.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:catchAll(.*)/:id",
    name: "phone",
    component: SingleItem
  },
  {
    path: "/apps",
    name: "Platform",
    component: Platform
  },
  { 
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
