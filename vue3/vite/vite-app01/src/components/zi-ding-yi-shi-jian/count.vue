<template>
  <p>count的值是:{{ count }}</p>
  <button @click="change" >+1</button>
</template>

<script>
export default {
  emits:['bianHua'],
  data(){
    return {
      count: 0
    }
  },
methods:{
  change(){
this.count ++
this.$emit('bianHua',this.count)
  }
}
}
</script>

<style>

</style>