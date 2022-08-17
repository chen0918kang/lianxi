import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
        checkAll = (e) =>{ 
      this.props.checkAllToDo( e.target.checked)
        }
// 清除
        handClearAll= () =>{
this.props.checkClearAll()
        }

  render() {
const {todo} = this.props
const doneCount = todo.reduce((pre,todo) =>{return pre+(todo.done ? 1: 0)},0) //已完成
const total = todo.length //总数
    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={this.checkAll} checked= {doneCount === total&& total!==0 ? true:false}/>
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{total}
      </span>
      <button onClick={this.handClearAll} className="btn  btn-danger">清除已完成任务</button>
    </div>
    )
  }
}

