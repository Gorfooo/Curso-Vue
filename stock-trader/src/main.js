import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import vueAxios from 'vue-axios';
import axios from 'axios';
import App from './App';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './trades/trades';
// import './plugins/axios';

Vue.use(vueAxios, axios);
Vue.axios.defaults.baseURL = 'https://stock-trader-748bd-default-rtdb.firebaseio.com/';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
