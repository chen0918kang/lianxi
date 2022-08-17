import React, { Component } from 'react'
import Item from '../Item/Item'

// 引入props类型限制库
import PropTypes from 'prop-types'
import './List.css'
export default class List extends Component {

// 对props进行限制
  static propTypes={
    todo: PropTypes.array.isRequired,
    ChenGe:PropTypes.func.isRequired
    }

  render() {
    const {todo ,ChenGe,shanChu} = this.props
    return (
      
      <ul className="todo-main">
        {
          todo.map((item) => {
            return <Item key ={item.id}  {...item}  chen = {ChenGe} shanChu = {shanChu}/>
                          })

        }

      </ul>
    )
  }
}

