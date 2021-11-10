<template>
	<div id="app">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		<div class="container">
			<h1 class='text-center'>Formulário Desafio</h1>
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<nome-completo @getNomeCompleto="getNomeCompleto($event)"></nome-completo>
				<rotulo nome="E-mail">
					<input type="text" v-model="email">
				</rotulo>
				<rotulo nome="Senha">
					<input type="text" v-model="senha">
				</rotulo>
				<rotulo nome="Salvar dados">
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" @click="changeSalvar()"/>
						<button class="btn btn-primary" id='submit' @click.prevent="submit()">Enviar</button>
					</div>
				</rotulo>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<rotulo nome="Nome">
					<span>{{nome}}</span>
				</rotulo>
				<rotulo nome="Sobrenome">
					<span>{{sobrenome}}</span>
				</rotulo>
				<rotulo nome="Email">
					<span>{{email}}</span>
				</rotulo>
				<rotulo nome="Senha">
					<span>{{senha}}</span>
				</rotulo>
				<rotulo nome="Salvar dados">
					<span>{{salvar}}</span>
				</rotulo>
			</div>
		</div>
	</div>
</template>

<script>
	import Rotulo from './components/Rotulo.vue'
	import NomeCompleto from './components/NomeCompleto.vue'

	export default {
		name: 'app',
		components: {
			Rotulo,
			NomeCompleto
		},
		data() {
			return {
				enviado: false,
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
				salvar: false
			}
		},
		methods: {
			submit(){
				this.enviado = true;
			},
			changeSalvar(){
				this.salvar = !this.salvar;
			},
			getNomeCompleto(event){
				event.key == 'nome' ? this.nome = event.value : this.sobrenome = event.value;
			}
		},
	}
</script>

<style>
	body {
		background-color: #ECECEC;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		display: flex;
		flex-direction: column;
	}

	.conteudo {
		display: flex;
	}

	.painel {
		flex: 1;
		background: #FFF;
		margin: 0px 10px;
		padding: 20px;
		border: 1px solid #AAA;
		border-radius: 5px;
	}

	.painel .cabecalho {
		width: 100%;
		background-color: #DDD;
		padding: 10px 0px;
		border-radius: 5px;
		font-size: 1.4rem;
	}

	#app h1 {
		font-weight: 200;
		margin: 20px;
		padding: 0;
	}

	.mr-4 {
		margin-right: 40px;
	}
</style>