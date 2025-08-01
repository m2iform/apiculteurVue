import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    
    },
    {
      path: '/miels',
      name: 'miels',
      component: () => import('../views/MielsView.vue'),
    },
    {
      path: '/ruches',
      name: 'ruches',
      component: () => import('../views/RuchesView.vue'),
    },
    {
      path: '/apiculteur',
      name: 'apiculteur',
      component: () => import('../views/ApiculteurView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router