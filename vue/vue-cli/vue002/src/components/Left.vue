<template>
  <div class="left">
<p>这是Test的子组件</p>
<p>用来测试字传父值</p>
<p>{{ num }}</p>
<button  @click="add">+1</button>

<div class="asd">
    <p>数据为：{{ sendsho }}</p>
</div>
  </div>
</template>

<script>
import bus from './eventBus.js'
// 导入eventbus模块
export default {
data(){
    return {
        num: 20,
        sendsho:''
    }
},
created(){
    bus.$on('share',(val)=>{
        this.sendsho = val
    })
},
methods:{
    add(){
        this.num +=1
        this.$emit('numchange',this.num)
    }
}
}
</script>

<style lang="less" scoped>
.left{
    background: yellow;
}
.asd{
    background: rgb(231, 238, 231);
    height: 50px;
}
</style>