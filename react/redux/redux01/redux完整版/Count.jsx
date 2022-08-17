import React, { Component } from 'react'
// 引入store,用于获取状态
import store from '../../redux/store'
// 引入action ,获取action
import {jiaYunSuan,jianYunSuan,jiaYiBuYunSuan} from '../../redux/count_action'

export default class Count extends Component {

      jia=() => {
       const {value} = this.selectNumber
        store.dispatch(jiaYunSuan(value*1))

      }

      jian=() => {
        const {value} = this.selectNumber
        store.dispatch(jianYunSuan(value*1))
      }

      jiShuJia=() => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count%2!==0){
          store.dispatch(jiaYunSuan(value*1))
        }
        else alert('请确定count值不为偶数！')
      }

      yiBuJia=() => {
        const {value} = this.selectNumber

      //  异步action
          store.dispatch(jiaYiBuYunSuan(value*1,1000))
    
      }


  render() {
    return (
      <div>
          <h1>当前求和为:{store.getState()}</h1>
          <select ref={e => this.selectNumber = e}>
            <option value= "1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.jia}>+</button>
          <button onClick={this.jian}>-</button>
          <button onClick={this.jiShuJia}>当前求和为奇数再加</button>
          <button onClick={this.yiBuJia}>异步加</button>
      </div>
    )
  }
}
