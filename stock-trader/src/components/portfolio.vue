<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acquiredStocks" :key="i" :class="{'d-none': acao.quantidade <= 0}">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-primary text-white">
            {{ [i][0] }}
            <small>&nbsp;(Preço: R$ {{ acao.preco }} | Qtde: {{ acao.quantidade }})</small>
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
              @click="venderAcao([i][0], quantidades[i], acao.quantidade)"
              :disabled="quantidades[i] <= 0 || quantidades[i] == undefined || quantidades[i] > acao.quantidade"
              >Vender</v-btn>
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
    venderAcao(empresa, quantidadeVenda, quantidadeCompra) {
      if (quantidadeVenda > quantidadeCompra) {
        return;
      }

      const { preco } = this.$store.state.acoes[empresa];
      const venda = {
        preco,
        quantidade: quantidadeCompra - quantidadeVenda,
      };

      this.axios({
        method: 'patch',
        url: `/acoesCompradas/${empresa}.json`,
        data: venda,
      })
        .then(() => {
          const novoSaldo = this.$store.state.saldo + (quantidadeVenda * preco);
          this.$store.commit('acaoVendida', novoSaldo);
          this.$store.dispatch('saveSaldo', this.$store.state.saldo);
          this.$store.dispatch('saveAcquiredStocks');
        });
    },
  },
  computed: {
    ...mapState(['acquiredStocks']),
  },
  async created() {
    await this.$store.dispatch('saveAcquiredStocks');
  },
};
</script>
