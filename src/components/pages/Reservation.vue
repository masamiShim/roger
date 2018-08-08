<template>
  <div class="reservation">
    <h1>{{ msg }}</h1>
    <h2>予約するよ</h2>
    <test></test>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Reservation',
  data () {
    return {
      msg: 'Listed Calendar'
    }
  }
}

Vue.component('test', {
  template: '<div>{{$route.params.id}}</div>'
})

</script>

<style scoped>

</style>
