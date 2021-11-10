<template>
    <div class='d-flex row justify-content-center align-items-center'>
        <div v-if="!Tasks.length > 0" class='mt-4 text-center'>
            <span class='text-white'>Sua vida está em dia :)</span>
        </div>
        <div v-else v-for="(task, index) in Tasks" :key="index" :ref="'sample-ref-'+index" :id='index'
        class="card text-center mt-5 col-3 mx-3 position-relative" :class="stateTask(index)">
            <button type='button' class='btn position-absolute' style="right:0" @click="deleteTask(index)">
                <span>&times;</span>
            </button>
            <div class="card-body" @click="changeTaskStatus(index)">
                <p class="card-text">{{task.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import barramento from './../barramento'

export default{
    data(){
        return{
            Tasks: [],
        }
    },
    methods:{
        deleteTask(index){
            this.Tasks.splice(index, 1);
            this.getPercentual();
        },
        changeTaskStatus(index){
            this.Tasks[index].pending = !this.Tasks[index].pending;
            this.getPercentual();
        },
        getPercentual(){
            var percentual = Math.round(this.Tasks.filter(t => !t.pending).length / this.Tasks.length * 100) || 0
            this.$emit('getPercentual', percentual);
        },
        stateTask(index){
            return this.Tasks[index].pending ? 'bg-danger' : 'bg-success';
        }
    },
    created(){
        barramento.receiveNewTask(Tasks => {
            this.Tasks.push({
                name: Tasks,
                pending: true
            });
            this.getPercentual();
        });
    }
}
</script>

<style scoped>
    .card{
        cursor: pointer;
        width: 18rem;
    }
</style>