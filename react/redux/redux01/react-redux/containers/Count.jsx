// 引入connect方法连接ui和redux
import {connect} from 'react-redux'
// 引入action
import {
    jiaYunSuan,
    jianYunSuan,
    jiaYiBuYunSuan
}  from '../redux/actions/count'

// UI                                      
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
          <h1>当前求和为:{this.props.count}</h1>
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

// // 传递状态和方法 返回值必须为对象  
// 第一
//     //传递状态
//     function mapStateToProps(state){
//       return {count:state}
//     }
//     //传递方法
//     function mapDispatchToProps(dispatch){
//       return {
//         jia:data =>  dispatch(jiaYunSuan(data)),//通知redux可以改变状态了  加
//         jian: data =>  dispatch(jianYunSuan(data)),//通知redux可以改变状态了  减
//         yiBuJia: (data,time) =>  dispatch(jiaYiBuYunSuan(data,time))  //通知redux可以改变状态了  定时器加
//     }
//     }
// 第二
//             // 传递状态
//           const mapStateToProps = state => ({count:state})
//             //传递方法
//             const  mapDispatchToProps = dispatch => 
//                 ({
//                 jia:data =>  dispatch(jiaYunSuan(data)),
//                 jian: data =>  dispatch(jianYunSuan(data)),
//                 yiBuJia: (data,time) =>  dispatch(jiaYiBuYunSuan(data,time)) 
//                  })
//         export default connect(mapStateToProps,mapDispatchToProps)(Count)
      // 暴露出   // 精简版
        export default connect(
             state => ({count:state}),
            {
             jia:jiaYunSuan,
             jian:jianYunSuan,
             yiBuJia:jiaYiBuYunSuan
            })(Count)
                     