import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  state: {
    saldo: 10000,
    acquiredStocks: [],
    acoes: [],
  },
  mutations: {
    acaoComprada(state, payload) {
      state.saldo = Math.round(payload * 100) / 100;
    },
    acaoVendida(state, payload) {
      state.saldo = Math.round(payload * 100) / 100;
    },
    trocaPrecos(state, payload) {
      const newObject = [];
      Object.keys(payload).map((key, i) => {
        newObject[payload[i].empresa] = { empresa: payload[i].empresa, preco: payload[i].preco };

        return { newObject };
      });
      state.acoes = newObject;
    },
    saveAcquiredStocks(state, payload) {
      state.acquiredStocks = { ...payload };
    },
  },
  actions: {
    saveSaldo(context) {
      axios.put('/saldo/saldo.json', Math.round(context.rootState.saldo * 100) / 100);
    },
    async saveAcquiredStocks(context) {
      await axios.get('/acoesCompradas.json')
        .then((response) => {
          context.commit('saveAcquiredStocks', response.data);
        });
    },
    salvaPrecos() {
      const newStocksAcquired = Object.keys(this.state.acquiredStocks).map((stock, i) => {
        const price = Object.values(this.state.acoes)[i].preco;
        return { stock, preco: price };
      });
      newStocksAcquired.map((item) => {
        const empresa = item.stock;
        const newStocksAcquiredStats = { preco: item.preco, quantidade: this.state.acquiredStocks[empresa].quantidade };
        axios.patch(`/acoesCompradas/${empresa}.json`, newStocksAcquiredStats);
        return { newStocksAcquired };
      });
      this.dispatch('saveAcquiredStocks');
    },
  },
});
