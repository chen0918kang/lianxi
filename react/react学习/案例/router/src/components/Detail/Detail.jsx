import React, { Component } from 'react'
// import qs from 'qs'

      const DetailData = [
            {id:'01',content:'你好,中国'},
            {id:'02',content:'你好,世界'},
            {id:'03',content:'你好,宇宙'}
      ]
export default class Detail extends Component {
 
     render() {
      // 取出params参数
        // const {id,title} = this.props.match.params
      // 取出search参数
        //  const {search} = this.props.location
        //  const {id,title} = qs.parse(search.slice(1))  //slice是为了把多余？晒出
        // 取出state参数
        const {id,title} = this.props.location.state || {}

        
      // 查找相同id 取出
        const findResult = DetailData.find(item => {
            return item.id === id
          }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
