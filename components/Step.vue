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
      <template v-if="kb">
        <p>
          In unserer Knowledge Base haben wir einen Artikel für dich gefunden,
        </p>
        <Article
          :title="kb.title"
          :youtube="kb.youtube"
          :content="kb.content"
          :subtitle="kb.subtitle"
        />
      </template>
    </template>

  </section>
</template>
<script>
import axios from 'axios'
import Article from './Article'

export default {
  components: { Article },
  props: {
    step: {
      type: Object,
      default: () => {
      }
    },
    stepKey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      kb: null,
      selected: null
    }
  },
  watch: {
    // whenever question changes, this function will run
    selected(newQuestion) {
      if (newQuestion.kb) {
        this.loadKB(newQuestion.kb)
      } else {
        this.kb = false
      }
    }
  },
  methods: {
    async loadKB(kb) {
      this.loading = true
      const { data } = await axios.get(
        'http://localhost:3000/api/knowledge-base/' + kb
      )
      this.kb = data

      this.loading = false
    }
  }
}
</script>
