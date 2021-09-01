new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'igual a 37' : 'diferente de 37';
        }
    },
    watch:{
        resultado(){
            setTimeout(() => {
                this.valor = 0;
            }, 2000);
        }
    },
});