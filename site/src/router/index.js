import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/ProductList.vue'),
    },
    {
      path: '/:animal',
      name: 'Animal',
      component: () => import('../views/ProductList.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/service/:id',
      name: 'Service',
      component: () => import('../views/Service.vue'),
    },
    {
      path: '/manageProducts',
      name: 'ManageProducts',
      component: () => import('../views/ManageProducts.vue'),
    },
    {
      path: '/manageProduct',
      name: 'ManageProduct',
      component: () => import('../views/ManageProduct.vue'),
    },
    {
      path: '/manageUsers',
      name: 'ManageUsers',
      component: () => import('../views/ManageUsers.vue'),
    },
    {
      path: '/service/:id',
      name: 'Service',
      component: () => import('../views/Service.vue'),
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/Account.vue'),
    },
  ],
});
