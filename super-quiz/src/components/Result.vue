<template>
    <div>

      <div class="result wrong" v-if="correct == false">
        <span>Resposta Errada :(</span>
        <button @click="nextQuestion">Próxima pergunta</button>
      </div>

      <div class="result" v-else>
        <span>Resposta Certa :)</span>
        <button @click="nextQuestion">Próxima pergunta</button>
      </div>

    </div>
</template>

<script>
export default {
  props: {
    correct: {
      type: Boolean
    }
  },
  methods: {
    nextQuestion() {
      this.$emit('nextQuestion');
    }
  }
}
</script>

<style>
    .result {
        height: 400px;
        color: #000;
        background-color: #FFF;
        width: 100%;
        border-radius: 20px;
        font-size: 5.5rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89c454;
        color: #30863d;
    }

    .result hr {
        color: #FFF;
    }

    .result.wrong {
        background-color: #f05250;
        color: #bb2814;
    }

    .result button {
        outline: none;
        align-self: center;
        padding: 10px 20px;
        font-size: 1.7rem;
        border-radius: 8px;
        background-color: #FFF;
        color: #30863d;
        font-weight: 600;
    } 

    .result.wrong button {
        color: #bb2814;
    }
</style>
