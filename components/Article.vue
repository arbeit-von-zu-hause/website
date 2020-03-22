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
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: null
    },
    youtube: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
