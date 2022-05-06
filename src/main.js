import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Element
import '@/plugins/element';
// eCharts
import '@/plugins/eCharts';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
