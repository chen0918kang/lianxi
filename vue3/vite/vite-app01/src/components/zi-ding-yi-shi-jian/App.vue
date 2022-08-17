<template>
  <p>App根组件</p>
  <hr>
<MyCount @bianHua = "jiesho"></MyCount>
</template>

<script>
import MyCount from './count.vue'
export default {
components:{
  MyCount
},
methods:{
  jiesho(val){
    console.log('监听到了count组件里面count数值的变化',val)
  }
}
}
</script>

<style>

</style>