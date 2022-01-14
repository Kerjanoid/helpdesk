import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'NewTicket',
    component: () => import('@/views/NewTicket.vue'),
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('@/views/Tickets.vue'),
  },
  {
    path: '/tickets/:post_id',
    name: 'ViewTicket',
    component: () => import('@/views/ViewTicket.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
