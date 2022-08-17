<template>
  <h3 class="thin" :class="zhuangtai ? 'qingxie' :'' " > 这是需要改变的标签</h3>
<button @click="zhuangtai = !zhuangtai">改变</button>
</template>
<script>
export default{
  data(){
    return{
      zhuangtai: true
    }
  }

}

</script>

<style lang = "less" scoped>
.thin {
  font-weight: 200;
  color: red;
}

.qingxie{
  font-style: italic;
  color: blue;
}
</style>
