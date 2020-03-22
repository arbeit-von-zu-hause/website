<template>
  <section>
    <p class="display-4">{{ step.question }}</p>
    <b-form-group v-if="step.answers">
      <b-form-radio
        v-for="answer in step.answers"
        :key="answer.value"
        v-model="selected"
        :name="stepKey"
        :value="answer"
      >
        <span class="h3">{{ answer.text }}</span>
      </b-form-radio>
    </b-form-group>
    <template v-if="selected">
      <hr />
      <b-button variant="outline-success">Zur nächsten Frage</b-button>
      <template v-if="selected.kb">
        <p>
          In unserer Knowledge Base haben wir einen Artikel für dich gefunden,
        </p>
        <Article :article="selected.kb" />
      </template>
    </template>
  </section>
</template>
<script>
import Article from './Article.vue'

export default {
  components: { Article },
  props: {
    step: {
      type: Object,
      default: () => {}
    },
    stepKey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: null
    }
  }
}
</script>
