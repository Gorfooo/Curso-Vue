new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertar(){
            alert('pressionou');
        },
        armazenar(event){
            this.valor = event.target.value;
        }
    }
})