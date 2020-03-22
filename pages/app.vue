<template>
  <main>
    <step
      v-if="stepKey"
      :step-key="stepKey"
      :step="step"
      @next-question="goToQuestion"
    />
  </main>
</template>
<script>
import Step from '~/components/Step.vue'

export default {
  components: {
    Step
  },
  data() {
    return {
      history: ['Q1'],
      steps: {
        Q1: {
          question: 'Wie viele Stunden Erfahrung hast du schon im Home Office?',
          answers: [
            {
              value: 'Q1-A1',
              text: 'weniger als 10 Stunden',
              kb: 'home-office-neuling',
              nextQuestion: 'Q2'
            },
            {
              value: 'Q1-A2',
              text: '10 bis 50 Stunden',
              kb: 'home-office-fortgeschritten',
              nextQuestion: 'Q2'
            },
            {
              value: 'Q1-A3',
              text: 'mehr als 50 Stunden',
              kb: 'home-office-experte'
            }
          ]
        },
        Q2: {
          question: 'Wie viele Leute sind außer dir in deiner Wohnung?',
          answers: [
            {
              value: 'Q2-A1',
              text: 'Niemand, ich bin allein',
              kb: 'allein-zu-haus'
            },
            {
              value: 'Q2-A2',
              text: 'Meine Familie / WG-Mitbewohner',
              kb: 'viel-los-zu-haus'
            }
          ]
        }
      }
    }
  },
  computed: {
    stepKey() {
      return this.history[this.history.length - 1]
    },
    step() {
      return this.steps[this.stepKey]
    }
  },
  methods: {
    goToQuestion(questionId) {
      this.history.push(questionId)
    }
  }
}
</script>
