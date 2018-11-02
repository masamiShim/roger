<template>
  <button v-bind:class="{ primary: this.prim, secondary: this.sec }" type="submit" class>{{this.lab}}</button>
</template>

<script>
/**
* ボタン周りの設定とかはこれで終わらせる
*/
export default {
  name: 'Button',
  props: {
    label: String,
    prim: false,
    sec: false
  },
  data () {
    return {
      lab: this.label,
      isPrimary: this.prim,
      isSecondary: this.sec
    }
  }
}
</script>

<style scoped>
button{
  padding: 10px 10px;
  background-color: white;
  border: 1px solid #ddd;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  cursor: pointer;
}
button:hover{
  background-color: #aaa;
  color: white;
}

button.primary{
  padding: 10px 10px;
  background-color: black;
  color: white;
  border: 1px solid white;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  cursor: pointer;
}
button.primary:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
}
</style>
