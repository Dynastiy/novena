import { createRouter, createWebHistory } from 'vue-router'

import Home from "./modules/home"

const baseRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(Home)
})

export default router
