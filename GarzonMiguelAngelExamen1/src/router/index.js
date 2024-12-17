import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ListadoProductos',
      name: 'ListadoProductos',
      component: () => import('@/components/Ej1/ListadoProductos.vue'),
    },
  ],
})

export default router
