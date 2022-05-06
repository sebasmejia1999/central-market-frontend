const HomeRoute = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../../views/Home.vue'),
}];

export default HomeRoute;
