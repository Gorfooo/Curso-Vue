new Vue({
    el: '#app',
    data: {
		start: false,
        vidaMonstro: 100,
        vidaPlayer: 100,
        log: []
	},
	methods: {
		ataque()
        {
            if(this.vidaMonstro > 0 && this.vidaPlayer > 0){
                let playerAttack = Math.floor(Math.random() * (5 - 1 + 1) + 1);
                let monsterAttack = Math.floor(Math.random() * (10 - 5 + 1) + 5);
                this.vidaPlayer = (this.vidaPlayer - monsterAttack) < 0 ? 0 : this.vidaPlayer - monsterAttack;
                this.vidaMonstro = (this.vidaMonstro - playerAttack) < 0 ? 0 : this.vidaMonstro - playerAttack;
                this.registraLog('Player atacou e deu '+playerAttack+' de dano', 'player');
                this.registraLog('Monstro atacou e deu '+monsterAttack+' de dano', 'monster');
            }
        },
        ataqueEspecial()
        {
            if(this.vidaMonstro > 0 && this.vidaPlayer > 0){
                let playerAttackSpecial = Math.floor(Math.random() * (14 - 7 + 1) + 7);
                let monsterAttackSpecial = Math.floor(Math.random() * (10 - 5 + 1) + 5);
                this.vidaPlayer = (this.vidaPlayer - monsterAttackSpecial) < 0 ? 0 : this.vidaPlayer - monsterAttackSpecial;
                this.vidaMonstro = (this.vidaMonstro - playerAttackSpecial) < 0 ? 0 : this.vidaMonstro - playerAttackSpecial;
                this.registraLog('Player atacou e deu '+playerAttackSpecial+' de dano', 'player');
                this.registraLog('Monstro atacou e deu '+monsterAttackSpecial+' de dano', 'monster');
            }
        },
        curar()
        {
            if(this.vidaMonstro > 0 && this.vidaPlayer > 0){
                let playerHeal = Math.floor(Math.random() * (10 - 5 + 1) + 5);
                let monsterAttack = Math.floor(Math.random() * (10 - 5 + 1) + 5);
                this.vidaPlayer = (this.vidaPlayer + playerHeal) > 100 ? 100 : this.vidaPlayer + playerHeal;
                this.vidaPlayer = (this.vidaPlayer - monsterAttack) < 0 ? 0 : this.vidaPlayer - monsterAttack;
                this.registraLog('Jogador recuperou '+playerHeal+' de vida', 'player');
                this.registraLog('Monstro atacou e deu '+monsterAttack+' de dano', 'monster');
            }
        },
        registraLog(texto, classe)
        {
            this.log.push({texto, classe})
        },
        iniciarJogo()
        {
            this.vidaMonstro = 100;
            this.vidaPlayer = 100;
            this.log = [];
        }
	},
})