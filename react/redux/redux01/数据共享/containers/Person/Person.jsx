import React, { Component } from 'react'
import { connect } from 'react-redux'
import {tianJiaAction} from '../../redux/actions/person'
import { nanoid } from 'nanoid'
 class Person extends Component {
  add= () =>{
    const name = this.name.value
    const age = this.age.value
    const personObj = {id:nanoid() ,name,age}
    this.props.jia(personObj)
    this.name.value = ''
    this.age.value = ''
    
  }
  render() {
    return (
      <div>
        <h1>这是Person组件</h1>
        <h2>来自count组件的数据// {this.props.count}</h2>
        <input ref={c =>this.name = c } type="text" placeholder='输入名字'/>
        <input ref={c =>this.age = c } type="text" placeholder='输入年龄'/>
        <button onClick={this.add}>添加</button>
        <ul>
        {
          this.props.shuJU.map(item => {
            return <li key={item.id}>名字{item.name}--年龄{item.age}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps= state => ({shuJU:state.person,count:state.count})

export default  connect(mapStateToProps,{
  jia:tianJiaAction
})(Person)
