<template>
  <div class="header-yangShi"  :style="{ backgroundColor: bgcolor  , color: color }">
{{ title || 'MyHeader组件' }}
  </div>
</template>

<script>
export default {
name:'MyHeader',
props:['title' , 'bgcolor' , 'color']

}
</script>

<style lang="less" scoped>
.header-yangShi{
  height: 45px;
  background-color: pink;
line-height: 45px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>