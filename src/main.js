import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from "./store/store"


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-3011.firebaseio.com/'

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
