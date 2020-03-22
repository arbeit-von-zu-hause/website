<template>
  <main class="homepage container">
    <Article :article="article" />
  </main>
</template>
<script>
import Article from '~/components/Article.vue'

export default {
  components: {
    Article
  },
  asyncData({ params, error, payload }) {
    return {
      article: params.id
    }
  }
}
</script>
