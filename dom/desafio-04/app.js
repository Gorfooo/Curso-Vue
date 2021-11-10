new Vue({
	el: '#desafio',
	data: {
		efeito: 'class1',
		aplicarC1: 'class1',
		aplicarC2: 'class2',
		cor: 'background-color:blue',
		verdadeiro: 'true',
		classe: '',
		estiloValidado: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => this.efeito = this.efeito == 'class1' ? 'outra_classe' : 'class1', 1000);
		},
		iniciarProgresso() {
			setInterval(() => this.progressWidth += 1, 1000);
		},
	},
	watch: {
		cor() {
			this.verdadeiro = this.verdadeiro == 'true' ? this.cor : 'nao_validou';
		}
	}
})
