<template>
  <div class= "app">
<h3>这是app组件</h3>
<p>这是父组件传的值 {{ age }}</p>
<p>这是父组件传的值 {{ uname01 }}</p>
<p>这就是父传子 的数据传值</p>
<hr>
<button @click="send1">把话带给兄弟组件Left</button>
  </div>
</template>

<script>
 import bus from './components/eventBus.js'
// 导入eventbus模块
export default {
  data(){
    return{
      send:"这是测试兄弟组件间传值"
    }
  },
props:["age","uname01"],
methods: {
  send1(){
bus.$emit('share',this.send)
  }
},
}
</script>
<style lang="less" scoped>
.app{
  background: pink;
  height: 200px;
}
</style>