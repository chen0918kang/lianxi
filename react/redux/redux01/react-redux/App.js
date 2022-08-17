import React, { Component } from 'react'
import Count from './containers/Count' //容器组件

export default class App extends Component {
  render() {
    return (
      <div>
        <Count /> 
        {/* 将状态和方法传给容器组件 */}
      </div>
    )
  }
}
