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
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;






/* import { createRouter, createWebHistory } from 'vue-router';
import ListadoProductos from '@/components/Ej1/ListadoProductos.vue';
import ProductDetail from '@/components/Ej1/ProductDetail.vue';
import Counter from '@/components/Ej2/Counter.vue';

const routes = [
  {
    path: '/exercici1',
    name: 'exercici1',
    component: ListadoProductos,
    children: [
      {
        path: ':productId',
        name: 'ProductDetail',
        component: ProductDetail,
        props: route => ({ productId: Number(route.params.productId) })
      }
    ]
  },
  {
    path: '/exercici2',
    name: 'exercici2',
    component: Counter
  },
  // other routes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router; */