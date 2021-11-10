import vue from 'vue';
export default new vue({
    methods: {
        alterarUsuario(usuario){
            this.$emit('usuarioMudou', usuario);
        },
        quandoAlterarUsuario(callback){
            this.$on('usuarioMudou', callback);
        }
    }
});