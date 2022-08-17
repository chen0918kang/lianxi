import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  Search= ()=>{
        // 1获取用户输入
          const {KeyWord:{value}} = this
        // 发起请求钱通知App更新状态
        this.props.upDateAppState({isFirst:false,isLoading:true})


//     2发起网络请求  此url不可用可尝试其他 hb素材 react 所需服务器开启即可  setupProxy已配置
      axios.get(`https://api.github.com/search/users?q=${value}`).then(
        response => {
          this.props.upDateAppState({isLoading:false,users:response.data.items})
        },
        error => {
          this.props.upDateAppState({isLoading:false,err:error.message})
        }

                  )
        
}



  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索GitHub用户</h3>
          <div>
            <input ref={c => this.KeyWord = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
            <button onClick={this.Search}>搜索</button>
          </div>
        </section>
    )
  }
}
