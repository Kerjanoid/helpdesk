import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'New-ticket',
    component: () => import('@/views/New-ticket.vue'),
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('@/views/Tickets.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
