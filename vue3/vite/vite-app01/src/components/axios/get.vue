<template>
  <div>
    <p>这是axios测试get请求</p>
    <hr>
    <button @click="Qing">get</button>
  </div>
</template>

<script>
export default {
methods:{
  async Qing(){
 const {data:res} =await this.$http.get('/api/get',{
  params:{
    name:'ls',
    age:25
  },
})
  console.log(res);
  }
}
}
</script>

<style>

</style>