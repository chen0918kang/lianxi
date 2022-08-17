import {connect} from 'react-redux'
import {
    jiaYunSuan,
    jianYunSuan,
    jiaYiBuYunSuan
}  from '../../redux/actions/count'                                   
import React, { Component } from 'react'
    class Count extends Component {
          jia=() => {  //加
          const {value} = this.selectNumber
            this.props.jia(value*1)
          }
          jian=() => {    //减
            const {value} = this.selectNumber
            this.props.jian(value*1)
          }
          jiShuJia=() => {    //奇数加
            const {value} = this.selectNumber
            const count = this.props.count
            if(count%2!==0){
              this.props.jia(value*1)
            }
            else alert('请确定count值不为偶数！')
          }
          yiBuJia=() => {   //异步加
            const {value} = this.selectNumber
          this.props.yiBuJia(value*1,1000)
          }
      render() {
        return (
          <div>
              <h1>这是Person组件,person组件人数为:{this.props.ren.length}</h1>
              <h4>当前求和为:{this.props.count}</h4>
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

        export default connect(
             state => ({count:state.count,ren:state.person}),
            {
             jia:jiaYunSuan,
             jian:jianYunSuan,
             yiBuJia:jiaYiBuYunSuan
            })(Count)
                     