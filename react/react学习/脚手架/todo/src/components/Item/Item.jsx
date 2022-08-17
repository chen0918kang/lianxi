import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
          state = {mouse:false}//状态标识

          // 鼠标移入移出的状态变化
            handMouse= (flag)=>{
                    return ()=>{
                    this.setState({mouse:flag})
          }
            }

          // 勾选，取消勾选的回调
          handCheck = (id)=>{
          return (e) =>{
                 this.props.chen(id,e.target.checked)
          }
          }
          // 删除事件
          handDelete = (id)=>{
            return ()=>{
if(window.confirm('确定删除吗？')){
  this.props.shanChu(id)
}

            }
          }



  render() {
    const {id,name,done} = this.props
    const {mouse } = this.state
    return (

        <li style={{backgroundColor: mouse ? '#ddd' : 'white'}}  onMouseLeave={this.handMouse(false)} onMouseEnter={this.handMouse(true)}>
        <label>
              <input type="checkbox" checked={done} 
              onClick={this.handCheck(id)}
              />
              <span>{ name }</span>
        </label>
        <button onClick={this.handDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' :'none'}}>删除</button>
        </li>
    )
  }
}
