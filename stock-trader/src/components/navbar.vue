<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition" width="40" />
    </b-navbar-brand>
    <span><strong>STOCK</strong>TRADER</span>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">INÍCIO</b-nav-item>
        <b-nav-item to="/portfolio">PORTFÓLIO</b-nav-item>
        <b-nav-item to="/acoes">AÇÕES</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item @click="finalizarDia">Finalizar Dia</b-nav-item>

        <b-nav-item>Saldo: R$ {{ saldo }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    saldo() {
      return this.$store.state.saldo;
    },
  },
  methods: {
    async finalizarDia() {
      await this.$store.dispatch('saveAcquiredStocks');

      const newStocks = Object.values(this.$store.state.acoes).map((stock, i) => {
        const empresas = Object.keys(this.$store.state.acoes);
        const percentage = Math.floor(Math.random() * (2 - -2 + 1)) + -2;
        const Price = stock.preco + (stock.preco / 100) * percentage;
        const roundedPrice = Math.round(Price * 100) / 100;
        return { empresa: empresas[i], preco: roundedPrice };
      });

      this.$store.commit('trocaPrecos', newStocks);
      this.$store.dispatch('salvaPrecos');
      this.axios.get('/acoesCompradas.json')
        .then((response) => {
          this.$store.state.acoes = response.data;
        });
    },
  },
};
</script>
