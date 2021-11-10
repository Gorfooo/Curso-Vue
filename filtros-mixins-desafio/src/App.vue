<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
    <span>{{ mensagem | substituiEspacoPorVirgula }}</span>		
    <br>
    <span>{{ mensagem | contaLetrasPorPalavra }}</span>
    <br>
    <hr>
    <br>
    <span>{{substituiEspacoPorVirgula}}</span>
    <br>
    <span>{{contaLetrasPorPalavra}}</span>
	</div>
</template>

<script>
import mixins from './mixins';

export default {
  mixins: [mixins]
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
