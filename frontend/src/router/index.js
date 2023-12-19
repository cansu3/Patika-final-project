// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/factory-details/:id',
        name: 'FactoryDetails',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/FactoryDetail.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/AuthDefault.vue'),
    children: [
      {
        path: '/sign-in',
        name: 'Sign-in',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Sign-in.vue'),
      },
      {
        path: '/sign-up',
        name: 'Sign-up',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Sign-up.vue'),
      },
    ],
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
