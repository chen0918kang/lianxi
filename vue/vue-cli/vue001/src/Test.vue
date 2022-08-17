<template>
<!-- 只能有一个根节点，如果非得平级的话再套一个大盒子 -->
  <div class="test-box">
    <h3>这是用户自定义的Test.vue {{ uname }}</h3>
    <button @click="dianji">点击更换用户名</button>
  </div>
</template>                     
<script>
// 默认导出，固定写法
export default {
  // data数据源
  // .vue组件中的data不能指向对象，必须为函数
  data(){
    // return 出来的{}可以定义数据
     return{ uname:'chenkang'}
  },
  methods:{
dianji(){
        this.uname = '厉害呦'
     }

  },
  // 过滤器
  filters:{

  },
  // 侦听器
  watch:{

  },
  // 计算属性
  computed:{

  }
};
</script>

<style lang ="less">
.test-box {
  background-color: aquamarine;
  h3{
    color: red;
  }


}
</style>