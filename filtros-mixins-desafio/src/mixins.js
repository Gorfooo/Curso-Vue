export default {
  data(){
    return{
      mensagem: 'mensagem mensagem mensagem mensagem'
    }
  },
  filters: {
    substituiEspacoPorVirgula: function(value){
      return value.replaceAll(' ', ',');
    },
    contaLetrasPorPalavra: function(value){
      let arr = value.split(" ");
      var arrMapped = arr.map(function(num) {
        return num + ' (' + num.replace( /\s/g, '' ).length + ') '
      });
      return arrMapped.join('')
    }
  },
  computed: {
    substituiEspacoPorVirgula(){
      return this.mensagem.replaceAll(' ', ',');
    },
    contaLetrasPorPalavra: function(){
      let arr = this.mensagem.split(" ");
      var arrMapped = arr.map(function(num) {
        return num + ' (' + num.replace( /\s/g, '' ).length + ') '
      });
      return arrMapped.join('')
    }
  }
}