<template>
    <div>
    <p>这是axios测试post请求</p>
    <hr>
    <button @click="qiu">post</button>
  </div>
</template>

<script>
export default {
methods:{
 async qiu(){
    const {data:res} = await this.$http.post('/api/post',{name:'zs',age:20})
  console.log(res);
  }
}
}
</script>

<style>

</style>