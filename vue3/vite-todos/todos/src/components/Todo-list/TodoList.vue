<template>
<!-- 列表组 -->
 <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center"  v-for="item in list" :key ="item.id">
    <!-- 复选框 -->
   <div class="form-group form-check">
    <input type="checkbox"     class="form-check-input" id="exampleCheck1" v-model="item.done">
    <label class="form-check-label" :class="item.done ?'delete': ''" for="exampleCheck1">{{ item.task }}</label>
  </div>
  <!-- 徽标 -->
    <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
       <span class="badge badge-warning badge-pill" v-else>未完成</span>
  </li>
 
</ul>
</template>

<script>
export default {
name:'TodoList',
props:{
  list:{
    type:Array,
    required:true,
    default:[]
  }
}
}
</script>

<style lang = 'less' scoped>
.list-group{
width: 400px;

}
.delete{
  text-decoration: line-through;
  color:gray;
  font-style: italic;
}
</style>