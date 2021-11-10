<template>
	<div id="app">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
			
		<div class="container">
			<h1 class='text-center text-white'>Tarefas</h1>
			<div class="progress mt-3 mb-5" style="height:1.5rem; position: relative">
				<span class='justify-content-center d-flex position-absolute w-100'>{{percentual}}%</span>
				<div class="progress-bar" :style="{width:percentual+'%'}">
				</div>
			</div>

			<v-new-task></v-new-task>
			<v-tasks @getPercentual="percentual = $event"></v-tasks>
		</div>
	</div>
</template>

<script>
	import newTask from './components/NewTask.vue'
	import tasks from './components/Tasks.vue'

	export default {
		components: {
			'v-new-task': newTask,
			'v-tasks': tasks
		},
		data() {
			return {
				percentual: 0
			}
		}
	}
</script>

<style>
	body,
	.progress {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	.progress {
		border: 0.5px solid;
		border-color: gray;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 75vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>