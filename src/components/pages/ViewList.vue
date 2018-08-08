<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>予約したい</h2>
    <calendar></calendar>
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'ViewList',
  data() {
    return {
      msg: 'Listed Calendar'
    }
  }
}
Vue.component('calendar', {
  data: function () {
    return {
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
  template: '<table><tr v-for="week in weeks">' +
      // '<span>{{ reserve.date }}</span>' +
      // '<span>{{ reserve.date }}</span>' +
      '<td>' +
      '<p>{{ week.week }}</p>' +
      '<p>{{ week.date }}</p>' +
      '<p v-for="reserve in week.reserves">' +
      '<router-link to="/reservation/week.name">{{ reserve.name }}</router-link>' +
      '<span>{{ reserve.reserve }}</span>' +
      '</p>' +
      '</td>' +
      '</tr></table>'

})
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
