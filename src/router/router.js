import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      path: '/',
      name: 'landing',
      component: () => import('../pages/landing.vue')
   },
   {
      path: '/api',
      name: 'api',
      component: () => import('../pages/apiPage.vue')
   }
]

const router = createRouter({
   routes,
   history: createWebHashHistory()
})

export default router;