<template>
  <div class="question">

    <template v-if="current > Object.keys(questions).length - 1">
      <div>Acabaram as peguntas :/</div>
      <button class='btn btn-primary w-25' style="align-self: center" @click="reiniciar">Reiniciar</button>
    </template>

    <div v-for="(question, i) in questions" :key="question.text">
      <template v-if="i == current">
        <span>{{question.text}}</span>

        <ul class="answers">
          <li v-for="(answer, i) in question.answers" :key="answer.text" @click="$emit('isCorrect', answer.correct)">
            <span class="number">{{i + 1}}</span>
            <span class="text">{{answer.text}}</span>
          </li>
        </ul>

      </template>
    </div>
  </div>
</template>

<script>
import questions from '../util/questions'

export default {
  props: {
    currentQuestion: {
      type: Number
    }
  },
  data(){
    return{
      questions: questions,
      current: this.currentQuestion
    }
  },
  methods: {
    reiniciar() {
      this.current = 0
      this.$emit('reiniciar')
    }
  }
}
</script>

<style>
    .question {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 70%;
        border-radius: 20px;
        font-size: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    ul.answers {
        font-size: 2rem;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .answers li {
        margin: 20px;
        background-color: #89c454;
        border-radius: 8px;
        width: 40%;

        display: flex;
    }

    .answers .number {
        padding: 10px;
        background-color: #1e9c31;
        color: #FFF;
        flex-basis: 30px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .answers .text {
        flex: 1;
        align-self: center;
    }
</style>
