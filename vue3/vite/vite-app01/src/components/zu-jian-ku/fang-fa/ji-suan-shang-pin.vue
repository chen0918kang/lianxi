<template>
  
</template>

<script>
export default {
computed:{
  // 计算数量
  jisuan(){
    let t=0;
    this.shuju.forEach(x =>{
      // 是否选中
      if(x.state){
        t+=x.count
      }
    })
    return t
  },
  // 计算价格
  amount(){
    let a=0;
    // .filter筛选
    this.shuju.filter(x => x.state).forEach(x => {
      a+= x.price*x.count
    })
  }
}
}

</script>

<style>

</style>