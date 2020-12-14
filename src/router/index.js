import Vue from 'vue';
import VueRouter from 'vue-router';
import DefalutPage from '@/views/layout/default.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: DefalutPage,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
