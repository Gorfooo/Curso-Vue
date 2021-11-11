<template>
  <v-container>
    <div class="row">

      <div class="col-md-4" v-for="(acao, i) in acoes" :key="i">
        <v-card elevation="4" outlined>
          <v-card-title class="bg-primary text-white">
            BMW<small>(Preço: R$ | Qtde: )</small>
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
              @click="venderAcao(acao.empresa, acao.preco)"
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
    venderAcao(empresa, preco, quantidade) {
      const novaQuantidade = this.$store.state.saldo + (quantidade * preco);

      this.$store.commit('acaoVendida', novaQuantidade);
    },
  },
};
</script>
