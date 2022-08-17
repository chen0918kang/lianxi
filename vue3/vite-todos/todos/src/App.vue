<template>
  <div>
    <h1>App根组件</h1>
    <hr>
  </div>
  <!-- TodoInput组件 -->
  <TodoInput @add="onAddNewTask"></TodoInput>
  <!-- TodoList组件 -->
  <TodoList :list="tasklist" class="mt-2"></TodoList>
<!-- TodoButton组件 -->
<TodoButton v-model:active = "activeBtnIndex"></TodoButton>
</template> 

<script>
import TodoList from './components/Todo-list/TodoList.vue'
import TodoInput from './components/TodoInput/TodoInput.vue'
import TodoButton from './components/Todobutton/TodoButton.vue'
export default {
components:{
TodoList,
TodoInput,
TodoButton
},
name:'MyApp',
data(){
  return{
    todolist:[
      {id:1 ,task:'周一早晨9点开会', done: false},
      {id:2 ,task:'周一晚上8点聚餐', done: false},
      {id:3 ,task:'准备周三上午的演讲稿', done: true}
    ],
    // 下一个可以id为4
    nextId:4,
    activeBtnIndex: 0
  }
},
methods:{
  onAddNewTask(taskname){
    this.todolist.push({
      id:this.nextId,
      task: taskname,
      done:false
    })
     this.nextId++

  }
},
computed:{
  tasklist(){
    switch(this.activeBtnIndex){

      case 0:return this.todolist//全部
       case 1:return this.todolist.filter( x=>x.done) //已完成 
        case 2:return this.todolist.filter( x=>!x.done)   //未完成
    }
  }
}
}
</script>

<style lang="less" scoped>

</style>