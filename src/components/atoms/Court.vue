<template>
  <v-checkbox
    :label="label"
    v-model="checkbox"
    hide-detail
  ></v-checkbox>
</template>

<script>

export default {
  name: 'Court',
  props: {
    courtNo: String,
    from: String,
    to: String
  },
  data () {
    return {
      checkbox: true,
      label: this.from + ' ～ ' + this.to + '(' + this.courtNo + ')'
    }
  }
}
</script>

<style scoped>

</style>
