<template>
  <Article
    :title="title"
    :youtube="youtube"
    :content="content"
    :subtitle="subtitle"
  />
</template>
<script>
import axios from 'axios'
import Article from '~/components/Article.vue'

export default {
  components: {
    Article
  },
  async asyncData({ params, error, payload }) {
    if (payload) {
      return {
        ...payload
      }
    }
    const { data } = await axios.get(
      'http://localhost:3000/api/knowledge-base/' + params.id
    )
    return {
      ...data
    }
  }
}
</script>
