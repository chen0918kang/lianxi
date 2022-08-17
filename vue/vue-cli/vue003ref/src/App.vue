<template>
  <div id="app">
    <p>这是APP组件</p>
    <!-- 这是ref对组件的引用 -->
    <button @click="clear">重置left里面的数值</button>
<hr>
<!-- 按需展示输入框 -->
<input type="text" v-if="panduan"  @blur="show" ref="jiaoref">
<button v-else  @click="qwe">展示输入框</button>
<hr>

<Left ref="onset"></Left>
  </div>
</template>

<script>

import Left from '@/components/Left.vue'
export default {
  name: 'App',
  components: {
    Left
  },
  methods:{
    qwe(){
      // 切换布尔值，使输入框显示
this.panduan = true;
  // 此函数代码尚未执行完，输入框无法重新更新出来，所以会undefined
  // this.$refs.jiaoref.focus();
// 无法放在updated中，在切换布尔值后，更换页面，然后获取焦点，
// 然后离开，又要更换页面，有要调用updated，但输入框已经消失

 this.$nextTick(()=>{
   this.$refs.jiaoref.focus()
 })
    },
     show(){
      // 切换布尔值，使按钮显示
      this.panduan = false;
    
    },
    clear(){
      this.$refs.onset.age = 0
    },
 
   
  },
  data(){
    return{
      panduan:false
    }
  }
}
</script>

<style lang="less">
#app {
background: red;

}
</style>
