import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saldo: 10000,
  },
  mutations: {
    acaoComprada(state, payload) {
      state.saldo = payload;
    },
    acaoVendida(state, payload) {
      state.saldo = payload;
    },
  },
});
