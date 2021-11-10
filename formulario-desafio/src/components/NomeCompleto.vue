<template>
    <div class="row">
        <div class="col-md-6">
            <rotulo nome="Nome">
                <input type="text" v-model="nome">
            </rotulo>
        </div>
        <div class="col-md-6">
            <rotulo nome="Sobrenome">
                <input type="text" v-model="sobrenome">
            </rotulo>
        </div>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: {Rotulo},
    data(){
        return{
            nome: '',
            sobrenome: ''
        }
    },
    watch: {
        nome(){
            this.$emit('getNomeCompleto', {'key': 'nome', 'value': this.nome});
        },
        sobrenome(){
            this.$emit('getNomeCompleto', {'key': 'sobrenome', 'value': this.sobrenome});
        }
    }
}
</script>