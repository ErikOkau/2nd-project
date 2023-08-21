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
      path: '/om',
      name: 'om',
      component: () => import('@/pages/om.vue')
    },
    {
      path: '/projekt',
      name: 'projekt',
      component: () => import('@/pages/projekt.vue')
    }
  ],
})


export default router