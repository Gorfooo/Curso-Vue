import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saldo: 10000,
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
  },
  actions: {
    saveSaldo(payload) {
      this.axios.post('/saldo.json', payload)
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
