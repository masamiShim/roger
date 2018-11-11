<template>
  <div>
    <div class="text-xs-center">
      <v-btn round color="primary" dark>予約</v-btn>
    </div>
    <div class="court-list-enable-date">2018/11/11</div>
    <div class="court-list-container">
      <div>
        青葉台テニスコート
      </div>
      <v-layout row wrap>
        <v-flex xs6 sm3>
          <court v-bind="court1" />
        </v-flex>
        <v-flex xs6 sm3>
          <court v-bind="court2" />
        </v-flex>
        <v-flex xs6 sm3>
          <court v-bind="court3" />
        </v-flex>
        <v-flex xs6 sm3>
          <court v-bind="court4" />
        </v-flex>
      </v-layout>
    </div>
    <dl class="court-list-container">
      <dt class="court-list-enable-date">2018/11/24</dt>
      <dd class="court-list-item">
        <v-checkbox
          :label="'青葉台テニスコート 10:30 ～ 12:30'"
          v-model="checkbox"
        ></v-checkbox>
      </dd>
    </dl>
    <div class="text-xs-center">
      <v-btn round color="primary" dark>予約</v-btn>
    </div>
  </div>
</template>

<script>
import Court from '../../components/atoms/Court.vue'

export default {
  name: 'Hello',
  components: {
    court: Court
  },
  comments: {
    'court': Court
  },
  data () {
    return {
      checkbox: false,
      court1: {
        courtNo: 'C',
        from: '8:30',
        to: '10:30'
      },
      court2: {
        courtNo: 'A',
        from: '12:30',
        to: '14:30'
      },
      court3: {
        courtNo: 'B',
        from: '14:30',
        to: '16:30'
      },
      court4: {
        courtNo: 'D',
        from: '16:30',
        to: '18:30'
      }
    }
  }
}
</script>
<style>
  .court-list-container {
    padding: 12px;
  }

  .court-list-enable-date {
    font-weight: bold;
    margin-bottom: 12px;
    border-bottom: 1px solid gray;
  }

  .court-list-item {
    font-size: .9em;
  }

  .court-list-item:not(:first-child) {
    margin-right: 18px;
  }
</style>
