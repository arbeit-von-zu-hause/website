<template>
  <main>
    <step v-if="stepKey" :step-key="stepKey" :step="step" />
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
      history: [],
      steps: {
        Q1: {
          question: 'Wie viele Stunden Erfahrung hast du schon im Home Office?',
          answers: [
            {
              value: 'Q1-A1',
              text: 'weniger als 10 Stunden',
              kb: 'willkommen-im-home-office'
            },
            { value: 'Q1-A2', text: '10 bis 50 Stunden' },
            { value: 'Q1-A3', text: 'mehr als 50 Stunden' }
          ]
        }
      }
    }
  },
  computed: {
    stepKey() {
      return this.history[this.history.length - 1] || 'Q1'
    },
    step() {
      return this.steps[this.stepKey]
    }
  }
}
</script>
