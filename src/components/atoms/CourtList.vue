<template>
  <dl>
    <dt>
    </dt>
    <dd>

    </dd>
  </dl>
</template>

<script>
import { CourtListItem } from '../../models/CourtListItem'

export default {
  name: 'CourtList',
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
