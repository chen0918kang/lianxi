import React, { Component } from 'react'
import Count from './containers/Count/Count' //容器组件
import Person from './containers/Person/Person'
export default class App extends Component {
  render() {
    return (
      <div>
        <Count /> 
        <hr/>
         <Person/>
      </div>
    )
  }
}