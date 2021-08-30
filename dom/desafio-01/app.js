new Vue({
    el:'#desafio',
    data:{
        Nome : 'Filipe',
        Idade : 18,
        imgLink:'https://picsum.photos/200/300'
    },
    methods:{
        random:function(){
            return Math.random();
        }
    }
});