import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../components/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
