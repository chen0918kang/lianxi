<template>

  <h1>知识就是力量</h1>
<h2>努力学习</h2>
<h1>这是<i>APP.vue</i>根组件</h1>

 <my-swiper></my-swiper>
<MyText></MyText>

</template>

<script>
import text from './components/ceshi/text.vue'
export default {
name:'MyApp',
data(){
  return{
    age:18,
    acc:'ck'
  }
},
components:{
'MyText':text,
}
}
</script>
<style lang="less">
h1{
color: red;
i{
  color: blue;
}

}
</style>
