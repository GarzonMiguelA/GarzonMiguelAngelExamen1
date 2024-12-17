import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/exercici1',
    name: 'exercici1',
    component: () => import('@/components/Ej1/ProductList.vue'),
    children: [
      {
        path: ':productId',
        name: 'ProductDetail',
        component: () => import('@/components/Ej1/ProductDetail.vue'),
        props: route => ({ productId: parseInt(route.params.productId) })
      }
    ]
  },
  {
    path: '/exercici2',
    name: 'exercici2',
    component: () => import('@/components/Ej2/Counter.vue'),
  },
  {
    path: '/exercici3',
    name: 'exercici3',
    component: () => import('@/components/Ej3/UserList.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
