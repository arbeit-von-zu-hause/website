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
import steps from '~/assets/steps.json'
import Step from '~/components/Step.vue'

export default {
  components: {
    Step
  },
  data() {
    return {
      history: ['Q1'],
      steps
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
