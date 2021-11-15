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

Vue.use(vueAxios, axios);
Vue.axios.defaults.baseURL = 'https://stock-trader-748bd-default-rtdb.firebaseio.com/';

router.beforeEach((to, from, next) => {
  axios.get('/saldo.json')
    .then((response) => {
      store.state.saldo = response.data === null ? 10000 : response.data.saldo;
    });
  axios.get('/acoesCompradas.json')
    .then((response) => {
      store.state.acoes = response.data;
    });

  next();
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
