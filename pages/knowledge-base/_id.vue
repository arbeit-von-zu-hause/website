<template>
  <Article :article="article" />
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
