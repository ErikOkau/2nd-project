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
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('@/pages/kontakt.vue')
    },
    {
      path: '/projekt',
      name: 'projekt',
      component: () => import('@/pages/projekt.vue')
    },
    {
      path: '/valgomat',
      name: 'valgomat',
      component: () => import('@/pages/valgomat.vue')
    }
  ],
})


export default router