<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acoes" :key="i">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-success text-white">{{ acao.empresa }}<small>(Preço: R$ {{ acao.preco }})</small></v-card-title>
          <v-card-text class="mt-4">
            <div class="row">
              <v-text-field label="Quantidade" class="pl-3"
              type="number" min="0" v-model="quantidades[i]"></v-text-field>
              <v-btn
              color="success"
              elevation="2"
              small
              class="align-self-center ml-3"
              @click="comprarAcao(acao.empresa, acao.preco, quantidades[i])"
              :disabled="quantidades[i] <= 0 || quantidades[i] == undefined"
              >Comprar</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>

    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      quantidades: [],
    };
  },
  methods: {
    comprarAcao(empresa, preco, quantidade) {
      // console.log(this.$store.getters.getAcquiredStocks);
      const compra = {
        preco,
        quantidade,
      };

      this.axios.patch(`/acoesCompradas/${empresa}.json`, compra)
        .then(() => {
          const novoSaldo = this.$store.state.saldo - (quantidade * preco);
          this.$store.commit('acaoComprada', novoSaldo);
          this.$store.dispatch('saveSaldo');
          this.$store.dispatch('saveAcquiredStocks');
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.$store.state.acquiredStocks);
    },
  },
  computed: {
    acoes() {
      return this.$store.state.acoes;
    },
  },
};
</script>
