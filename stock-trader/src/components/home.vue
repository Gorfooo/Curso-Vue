<template>
<v-container>
  <h3>Negocie e Consulte suas ações</h3>
  <v-alert
  dense
  elevation="4"
  type="info"
  >Você pode salvar & carregar os Dados</v-alert>
  <v-alert
  dense
  elevation="4"
  type="success"
  >Clique em 'finalizar dia' para iniciar um novo dia</v-alert>
  <hr>
  <h5>Seu Saldo: R$ {{ saldo }}</h5>
</v-container>
</template>

<script>
export default {
  computed: {
    saldo() {
      return this.$store.state.saldo;
    },
  },
};
</script>
