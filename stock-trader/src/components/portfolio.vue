<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acquiredStocks" :key="i">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-primary text-white">
            {{ acquiredStocks[i] }}<small>(Preço: R$ {{ acao.preco }} | Qtde: {{ acao.quantidade }})</small>
          </v-card-title>
          <v-card-text class="mt-4">
            <div class="row">
              <v-text-field label="Quantidade" class="pl-3"
              type="number" min="0" v-model="quantidades[i]"></v-text-field>
              <v-btn
              color="primary"
              elevation="2"
              small
              class="align-self-center ml-3"
              @click="venderAcao(acao.empresa, acao.preco, quantidades[i], acao.quantidade)"
              :disabled="quantidades[i] <= 0 || quantidades[i] == undefined"
              >Vender</v-btn>
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
    venderAcao(empresa, preco, quantidadeVenda, quantidadeCompra) {
      const venda = {
        empresa,
        preco,
        quantidade: quantidadeCompra - quantidadeVenda,
      };

      const method = (quantidadeCompra - quantidadeVenda) <= 0 ? 'delete' : 'patch';

      this.axios({
        method,
        url: `/acoesCompradas/${empresa}.json`,
        data: venda,
      })
        .then((response) => {
          console.log(response);
          const novoSaldo = this.$store.state.saldo + (quantidadeVenda * preco);
          this.$store.commit('acaoVendida', novoSaldo);
          this.$store.dispatch('saveSaldo', this.$store.state.saldo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    acquiredStocks() {
      return this.$store.state.acquiredStocks;
    },
  },
  mounted() {
    this.$store.dispatch('saveAcquiredStocks');
  },
};
</script>
