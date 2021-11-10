<template>
    <div class="input-group">
        <input type="text" id='taskInput' class="form-control" placeholder="Nova tarefa">
        <div class="input-group-append">
            <button class="btn bg-primary text-white" type="button" @click="createTask()">+</button>
        </div>
    </div>
</template>

<script>
import barramento from './../barramento'

export default {
    methods: {
        createTask(){
            barramento.createTask(document.querySelector("#taskInput").value);
            document.querySelector("#taskInput").value = null;
        }
    }
}
</script>

<style scoped>
    .input-group{
        margin-left: 25%;
        width: 50%;
    }

    @media only screen and (max-width: 768px){
        .input-group{
            width: 75%;
            margin-left: 12.5% !important;
        }
    }
</style>