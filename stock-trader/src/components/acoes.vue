<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acoes" :key="i">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-success text-white">{{ i }}<small>&nbsp;(Preço: R$ {{ acao.preco }})</small></v-card-title>
          <v-card-text class="mt-4">
            <div class="row">
              <v-text-field label="Quantidade" class="pl-3"
              type="number" min="0" v-model="quantidades[i]"></v-text-field>
              <v-btn
              color="success"
              elevation="2"
              small
              class="align-self-center ml-3"
              @click="comprarAcao(i, acao.preco, quantidades[i])"
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      quantidades: [],
    };
  },
  methods: {
    async comprarAcao(empresa, preco, novaQuantidade) {
      if (novaQuantidade <= 0) {
        return;
      }
      await this.$store.dispatch('saveAcquiredStocks');

      const empresaAcao = empresa;
      const quantidadeComprada = this.$store.getters.getAcquiredStocks[empresaAcao] === undefined ? 0 :
        this.$store.getters.getAcquiredStocks[empresaAcao].quantidade;
      const compra = {
        preco,
        quantidade: parseFloat(quantidadeComprada) + parseFloat(novaQuantidade),
      };

      this.axios.patch(`/acoesCompradas/${empresa}.json`, compra)
        .then(() => {
          const novoSaldo = this.$store.state.saldo - (novaQuantidade * preco);
          this.$store.commit('acaoComprada', novoSaldo);
          this.$store.dispatch('saveSaldo');
          this.$store.dispatch('saveAcquiredStocks');
        });
    },
  },
  computed: {
    ...mapState(['acoes']),
  },
};
</script>
