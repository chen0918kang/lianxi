import React, { Component } from 'react'

import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {
  state={
users:[],//初始化状态 
isFirst:true,//是否为第一次打开页面
isLoading:false,//标识是否处于加载中
err:'',//存储请求相关的错误信息
  }
// 更新appstate
  upDateAppState = (usersObj) => {
    // 因为传过来的就是对象所以不用家{}
    this.setState(usersObj)
  }



  render() {
    return (
      <div className="container">
        <Search upDateAppState = {this.upDateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
