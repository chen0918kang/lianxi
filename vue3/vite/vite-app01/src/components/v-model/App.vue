<template>
  <p>App根组件 v-model数据双向绑定</p>
  <br>
  {{ num }}
  <hr>
<button @click="num+=1">+1</button>
  <hr>
  <hr>

<MyCount v-model:chuanDi="num" ></MyCount>
</template>

<script>
import MyCount from './count.vue'
export default {
components:{
  MyCount
},
data(){
  return{
    num: 0
  }
}
}
</script>
