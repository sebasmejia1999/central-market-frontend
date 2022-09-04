import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeRoute from './modules/home';

Vue.use(VueRouter);

const AppRoute = [
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...HomeRoute,
    ...AppRoute,
  ],
});

export default router;
