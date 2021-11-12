import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saldo: 10000,
    acquiredStocks: [],
    acoes: [
      {
        empresa: 'BMW',
        preco: 100,
      },
      {
        empresa: 'Google',
        preco: 150,
      },
      {
        empresa: 'Compufour',
        preco: 200,
      },
      {
        empresa: 'Apple',
        preco: 250,
      },
    ],
  },
  mutations: {
    acaoComprada(state, payload) {
      state.saldo = payload;
    },
    acaoVendida(state, payload) {
      state.saldo = payload;
    },
    ajustaPrecos(state) {
      const newPrices = state.acoes.map((item) =>
        ({ empresa: item.empresa,
          preco: Math.round((item.preco + (item.preco / 100) * Math.floor(Math.random() * (5 - 1 + 1)) + 1) * 100) / 100 }));
      state.acoes = newPrices;
    },
    saveAcquiredStocks(state, payload) {
      state.acquiredStocks = payload;
    },
  },
  actions: {
    saveSaldo(context) {
      axios.patch('/saldo/saldo.json', context.rootState.saldo)
        .catch((error) => {
          console.log(error);
        });
    },
    saveAcquiredStocks(context) {
      axios.get('/acoesCompradas.json')
        .then((response) => {
          context.commit('saveAcquiredStocks', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
