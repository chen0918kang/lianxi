<template>
<div class="app-yangShi">
   <MyHeader  title="自己封装的组件" bgcolor="#000" color="#fff"></MyHeader>
  <h1>这是根组件</h1>
  dawdawd
</div>
 
</template>

<script>
import MyHeader from './MyHeader.vue'
export default {
components:{
  'MyHeader':MyHeader,
}
}
</script>

<style lang="less" scoped>
.app-yangShi{
  margin-top: 45px;
}
</style>