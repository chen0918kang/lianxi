import React, { Component } from 'react'
// 生成唯一id
import {nanoid} from 'nanoid'
// 引入props类型限制库
import PropTypes from 'prop-types'
import './Header.css'
export default class Header extends Component {
  // 对props进行限制
        static propTypes={
        addToDo: PropTypes.func.isRequired
        }

// 判断输入事件如果键盘ask码值等于13就是按下了回车键
  handleKeyUp = (e) =>{
      const {keyCode,target} = e

      if(keyCode!==13 ) return
      if(target.value.trim() ==='') return

      const shJu = {id:nanoid(),name:target.value,done:false}
      // 调用父组件传来的函数，把数据传递过去
      this.props.addToDo(shJu)
      target.value=''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
