<template>
  <div class="box">
      <p>{{ age }} </p>
  <button @click="age += 1">+1</button>
  <button @click="cz">重置</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        age:15
    }
},
methods:{
    cz(){
        this.age = 0
    }
}
}
</script>

<style lang="less" scoped>
.box{
    width: 200px;
    height: 200px;
    background: pink;
}
</style>