<template>
  <section>
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="lead">{{ subtitle }}</p>
    <div v-if="youtube" class="embed-responsive embed-responsive-16by9 my-4">
      <iframe
        class="embed-responsive-item"
        :src="youtube"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-html="content"></div>
  </section>
</template>
<script>
import content from '~/assets/content.json'

export default {
  props: {
    article: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return content[this.article]?.title
    },
    content() {
      return content[this.article]?.content
    },
    subtitle() {
      return content[this.article]?.subtitle
    },
    youtube() {
      return content[this.article]?.youtube
    }
  }
}
</script>
