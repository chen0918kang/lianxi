
import React, { Component } from 'react'

export default class A extends Component {
  state = {
    name:'ck'
  }
  render() {
    return (
      <div>
        <h1>我是A组件</h1>
        <h2>我的用户名是：{this.state.name}</h2>
        <B>
         
        </B>
      </div>
    )
  }
}



class B extends Component {
  render() {
    return (
      <div>
         <h1> 我是b组件</h1>
         <h2>从A组件接受到的用户名是：{this.state.name}</h2>
         <C></C>
      </div>
    )
  }
}


class C extends Component {
  render() {
    return (
      <div>
          <h1> 我是c组件</h1>
         <h2>从A组件接受到的用户名是：{this.state.name}</h2>
      </div>
    )
  }
}



