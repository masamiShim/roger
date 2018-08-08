<template>
  <div class="api-body">
    <ul>
      <li v-for="(post, index) in apiResponse" v-bind:key="index">
        <span class="tag" v-for="(tag, index) in post['tags']" v-bind:key="index">{{ tag['name'] }}</span>
        <a v-bind:href="post['url']" target="_blank" rel="noopener noreferrer">
          <div>{{ post['title'] }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ApiGetView',
  data () {
    return {
      apiResponse: []
    }
  },
  async created () {
    try {
      await axios.get('https://qiita.com/api/v2/users/aimof/items')
        .then((res) => {
          this.apiResponse = res.data
          console.info(res.data)
        }).catch((res) => {
          console.error(res)
        })
    } catch (e) {
      console.error(e)
    }
  }
}

</script>

<style scoped>

</style>
