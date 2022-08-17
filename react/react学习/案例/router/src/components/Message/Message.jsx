import React, { Component } from 'react'
import Detail from '../Detail/Detail'
import {Link,Route} from 'react-router-dom'
export default class Message extends Component {
    state= {
      messageArr:[
        {id:'01',title:'消息1',url:'mes01'},
        {id:'02',title:'消息2',url:'mes02'},
        {id:'03',title:'消息3',url:'mes03'}
      ]
    }
  
    pushShow = (id,title) =>{
        // params参数
      // this.props.history.push(  `/home/message/detail/${id}/${title}`)
    
        // search参数
      // this.props.history.push(  `/home/message/detail/?id=${id}&title=${title}`)
     // state参数
     this.props.history.push( `/home/message/detail`,{id:id,title:title})
      }
    replaceShow = (id,title) =>{
         // params参数
      // this.props.history.replace(  `/home/message/detail/${id}/${title}`)
    
    // search参数
    // this.props.history.replace(  `/home/message/detail/?id=${id}&title=${title}`)
     // state参数
     this.props.history.replace( `/home/message/detail`,{id:id,title:title})
    }
   

  render() {
    return (
                <div>
                  <ul>
                    {
                    this.state.messageArr.map((item) => {
                   return(
                       <li key={item.id}>
                        {/* 传params参数 */}
                           {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}
                           {/* <button onClick={() => {this.pushShow(item.id,item.title)}}>push查看</button>
                           <button onClick={() => {this.replaceShow(item.id,item.title)}}>replace查看</button> */}
                      {/* 传search参数 */}
                           {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}
                            {/* <button onClick={() => {this.pushShow(item.id,item.title)}}>push查看</button>
                           <button onClick={() => {this.replaceShow(item.id,item.title)}}>replace查看</button> */}
                      {/* 传state参数 */}
                          <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>&nbsp;&nbsp;
                          <button onClick={() => {this.pushShow(item.id,item.title)}}>push查看</button>
                           <button onClick={() => {this.replaceShow(item.id,item.title)}}>replace查看</button>
                      </li>
                   )

                    })
                    
                    }
                    </ul>
                    <hr/>
                    {/* params */}
                    {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}
                    {/* 传search参数 */}
                    {/* <Route path='/home/message/detail' component={Detail}></Route> */}
                    {/* 传state参数 */}
                    <Route path='/home/message/detail' component={Detail}></Route>
                </div>
    )
  }
}
