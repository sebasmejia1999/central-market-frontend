const HomeRoute = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../../views/Home/Index.vue'),
}];

export default HomeRoute;
