<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acoes" :key="i">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-primary text-white">
            BMW<small>(Preço: R$ {{ acao.preco }} | Qtde: {{ acao.quantidade }})</small>
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
              @click="venderAcao(acao.empresa, acao.preco, quantidades[i], acao.quantidade, Object.keys(acoes).toString())"
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
      acoes: [],
    };
  },
  methods: {
    venderAcao(empresa, preco, quantidadeVenda, quantidadeCompra, key) {
      const venda = {
        empresa,
        preco,
        quantidade: quantidadeCompra - quantidadeVenda,
      };

      const method = (quantidadeCompra - quantidadeVenda) <= 0 ? 'delete' : 'put';

      this.axios({
        method,
        url: `/acoesCompradas/${key}.json`,
        data: venda,
      })
        .then((response) => {
          console.log(response);
          const novoSaldo = this.$store.state.saldo + (quantidadeVenda * preco);
          this.$store.commit('acaoVendida', novoSaldo);
          this.atualizaAcoes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    atualizaAcoes() {
      this.axios.get('/acoesCompradas.json')
        .then((response) => {
          // console.log(Object.keys(response.data).toString());
          this.acoes = response.data;
          console.log(this.acoes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.atualizaAcoes();
  },
};
</script>
