<template>
  <div id="test-api">
    <h1>{{ msg }}</h1>
    <h2>予約したい</h2>
    <table>
      <tr v-for="week in weeks"
          v-bind:key="week.date">
        <td>
          <p>{{ week.week }}</p>
          <p>{{ week.date }}</p>
          <p v-for="reserve in week.reserves"
             v-bind:key="reserve.name">
            <router-link :to="'/reservation/' + reserve.name">{{ reserve.name }}</router-link>
            <span>{{ reserve.reserve }}</span>
          </p>
        </td>
      </tr>
    </table>
    <div class="api-test">
      <ul>
        <li v-for="(post, index) in apiResponse" v-bind:key="index">
          <span class="tag" v-for="(tag, index) in post['tags']" v-bind:key="index">{{ tag['name'] }}</span>
          <a v-bind:href="post['url']" target="_blank" rel="noopener noreferrer">
            <div>{{ post['title'] }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'ViewList',
  data () {
    return {
      msg: 'Listed Calendar',
      apiResponse: [],
      weeks: [
        {date: 1, week: '日', reserves: [{url: 'a', name: '1', reserve: 'c'}]},
        {date: 2, week: '月'},
        {date: 3, week: '火'},
        {date: 4, week: '水', reserves: [{url: '/reservation/', name: '2', reserve: 'c'}]},
        {date: 5, week: '木'},
        {date: 6, week: '金', reserves: [{url: 'a', name: '3', reserve: 'c'}]},
        {date: 7, week: '土'}
      ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
