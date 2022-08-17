import React from 'react'
import ReactDOM from 'react-dom'

class App  extends React.Component {
  state ={
    Comments:[
      {id:1, name:'jack',content:'你好第一条！'},
      {id:2, name:'tom',content:'你好第而条！'},
      {id:3, name:'al',content:'你好第三条！'}
    ],
    username:'',
    usercontent:''
  }
  
  zhuanHua= (e) => {
    const {name,value} = e.target
    this.setState({
      [name]: value
    }) 
  }
  add = () =>{
    const { Comments, username, usercontent} = this.state
    
   if(username.trim()===''||
   usercontent.trim()===''){
     alert('请输入评论人与评论内容')
     return
   }
   
    const newComments = [{
      id:Comments.length+1,
      name:username,
      content:usercontent
    },...Comments]
   this.setState({
     Comments:newComments,
     username:'',
     usercontent:''
   }) 
    
   
  }

  
  render() {
    return (
    <div className='app'>
        <div>
            <input className='user' type='text' placeholder="请输入评论人"  value={this.state.username} name="username"
            onChange= {this.zhuanHua}
            />
            <br/>
            <textarea 
            className='content'
            cols='30'
            rows='10'
            placeholder="请输出评论内容"
            value={this.state.usercontent}
            name="usercontent"
            onChange= {this.zhuanHua}
            />
            <br/>
            <button onClick = {this.add}> 发表评论</button>
        </div>
    
  {/* 条件渲染*/}
    {
      this.state.Comments.length === 0 ?
      ( <div className='no-comment'> 暂无评论</div>)
      :
      ( <ul>
         {
         this.state.Comments.map(item => (
           <li key = {item.id}>
             <h3>评论人：{item.name}</h3>
             <p>评论内容：{item.content}</p>
           </li> 
         ) )  
           
         }
        </ul>)
      
    }
       
       
    </div>
    ) 
  }
}


ReactDOM.render(<App />,document.querySelector('#root'))