import Vue from 'vue';
import money from 'v-money';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(money);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
