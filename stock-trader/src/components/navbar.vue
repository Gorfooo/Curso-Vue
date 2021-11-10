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
        <router-link
        to="/acoes"
        ><b-nav-item href="#">AÇÕES</b-nav-item></router-link>
        <b-nav-item href="#">INÍCIO</b-nav-item>
        <b-nav-item href="#">PORTFÓLIO</b-nav-item>
        <b-nav-item href="#">AÇÕES</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item>Finalizar Dia</b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Salvar & Carregar</em>
          </template>
          <b-dropdown-item href="#">Salvar Dados</b-dropdown-item>
          <b-dropdown-item href="#">Carregar Dados</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Saldo: R$ </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

};
</script>

<style>

</style>
