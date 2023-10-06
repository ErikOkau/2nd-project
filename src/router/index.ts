import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home.vue')
    },
    {
      path: '/valgomat',
      name: 'valgomat',
      component: () => import('@/pages/valgomat.vue')
    },
    {
      path: '/:notfound(.*)',
      name: 'notfound',
      component: () => import('@/pages/Error404.vue')
    }
  ],
})


export default router