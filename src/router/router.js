import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      path: '/',
      name: 'landing',
      component: () => import('../pages/landing.vue')
   }
]

const router = createRouter({
   routes,
   history: createWebHashHistory()
})

export default router;