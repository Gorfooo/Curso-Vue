import vue from 'vue';
export default new vue({
    methods: {
        createTask(task){
            this.$emit('createTask', task);
        },
        receiveNewTask(callback){
            this.$on('createTask', callback);
        }
    }
});