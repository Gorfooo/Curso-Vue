<template>
	<div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

		<h1 class="mb-4 mt-4 text-white">Super Quiz</h1>

    <transition name="flip" mode="out-in">
      <question v-if=" correct == 'aguardando' " :currentQuestion="currentQuestion" @isCorrect="isCorrect($event)" @reiniciar="reiniciar()"></question>
      <result v-else :correct="correct" @nextQuestion="nextQuestion()"></result>
    </transition>
    
	</div>
</template>

<script>
import question from './components/Question'
import result from './components/Result'

export default {
  components: {question, result},
  data() {
    return {
      correct: 'aguardando',
      currentQuestion: 0
    }
  },
  methods: {
    isCorrect(correct){
      correct == true ? this.correct = true : this.correct = false;
    },
    nextQuestion(){
      this.correct = 'aguardando',
      this.currentQuestion += 1
    },
    reiniciar(){
      this.currentQuestion = 0
    }
  },
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
