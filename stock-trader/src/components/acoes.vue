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
    };
  },
  methods: {
    comprarAcao(empresa, preco, quantidade) {
      // const compra = {
      //   empresa,
      //   preco,
      //   quantidade,
      // };

      // Vue.axios.get()

      const novaQuantidade = this.$store.state.saldo - (quantidade * preco);

      this.$store.commit('acaoComprada', novaQuantidade);
    },
  },
};

</script>

<style>

</style>
