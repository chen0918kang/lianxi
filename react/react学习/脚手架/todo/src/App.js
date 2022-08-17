
import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.css'
// 创建并暴露APP组件
export default  class App extends React.Component{
      state={
          toDos:[
            { id:'001', name:'吃饭',done:true  },
            { id:'002', name:'睡觉',done:false  },
            { id:'003', name:'打豆豆',done:true  },
            { id:'004', name:'买东西',done:false  }]
          }
          // 添加toDos数组
          add = (newToDo) =>{
                const {toDos} = this.state
                const toDo = [newToDo, ...toDos];
                this.setState({
                  toDos:toDo
                })
          }
        // 更改TOdo
        chenGeToDo= (id,done)=>{
        // toDos
            const {toDos} = this.state

            const newToDo = toDos.map((item)=>{
            if(item.id === id) return {...item,done}
            else return item
            })
            this.setState({
              toDos:newToDo
            })


        }

// 删除事件
        deTeLe = (id) => {
            // 获取state
            const {toDos} = this.state
            // 删除传来id的那个对象
            // 使用过滤,把id不符的晒选出来在返回
           const newToDo =  toDos.filter((item) => {
              return item.id !== id
                 })
                 this.setState( {
                  toDos: newToDo 
                 })
        }
            // 全选按钮
            checkAllToDo = (state) =>{
              
                  // 获取state
                  const {toDos} = this.state
                  // 加工
                const newToDo =  toDos.map((item) => {
                    return {...item,done:state}
                      })
                      this.setState( {
                        toDos: newToDo 
                      })
            }
             // 清除全选按钮
             checkClearAll = ()=>{
                // 获取state
            const {toDos} = this.state
     
           const newToDo =  toDos.filter((item) => {
              return item.done !== true
                 })
                 this.setState( {
                  toDos: newToDo 
                 })
             }


render(){
return (
        <div id="root">
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addToDo = {this.add}/>
              <List todo={ this.state.toDos}  ChenGe = {this.chenGeToDo} shanChu= {this.deTeLe}/>
              <Footer todo={ this.state.toDos}  checkClearAll = {this.checkClearAll} checkAllToDo = {this.checkAllToDo}/>
            </div>
          </div>
        </div>
)

}

}
