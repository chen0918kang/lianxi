<template>
  <p>父组件传过来的值是:{{ chuanDi }}</p>
  <p>把子组件的值传回去</p>
<button @click="add">+1</button>
</template>

<script>
export default {
emits:["update:chuanDi"],
  data(){
    return {
      count: 0
    }
  },
  props:["chuanDi"],
  methods:{
    add(){
      this.$emit('update:chuanDi',  this.chuanDi +1)
    }
  }
}

</script>

<style>

</style>