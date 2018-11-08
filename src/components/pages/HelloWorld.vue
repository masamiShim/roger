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
          <v-checkbox
            :label="'8:30～10:30'"
            v-model="checkbox"
            hide-detail
          ></v-checkbox>
        </v-flex>
        <v-flex xs6 sm3>
          <v-checkbox
            :label="'10:30 ～ 12:30'"
            v-model="checkbox"
            hide-detail
          ></v-checkbox>
        </v-flex>
        <v-flex xs6 sm3>
          <v-checkbox
            :label="'12:30 ～ 14:30'"
            v-model="checkbox"
            hide-detail
          ></v-checkbox>
        </v-flex>
        <v-flex xs6 sm3>
          <v-checkbox
            :label="'14:30 ～ 16:30'"
            v-model="checkbox"
            hide-detail
          ></v-checkbox>
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
export default {
  name: 'Hello'
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
