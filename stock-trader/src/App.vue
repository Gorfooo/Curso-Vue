<template>
  <v-app>
    <Navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from './components/navbar';

export default {
  name: 'App',
  components: { Navbar },
};
</script>
