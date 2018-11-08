<template>
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

</template>

<script>
import { CourtListItem } from '../../models/CourtListItem'

export default {
  name: 'CourtListItem',
  props: {
    day: Date,
    items: CourtListItem
  },
  data () {
    return {
      lab: this.day,
      courtItems: this.items
    }
  }
}
</script>

<style scoped>

</style>
