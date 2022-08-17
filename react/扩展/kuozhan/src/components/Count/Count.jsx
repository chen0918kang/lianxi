import React from 'react'
import  ReactDOM  from 'react-dom'

//函数组件的hooks
export default  function Count(){

const [count,changeCount] = React.useState(0)
const [name,changeName] = React.useState('ck')
  function add(){
    // changeCount(count+1)
    changeCount(count => ( count+1 ) )
  }

  function change(){
    changeName('cs')
  }
  // 卸载组件
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const mySef = React.useRef()
function tiShi(){
alert(mySef.current.value)
}

  React.useEffect(() => {
    let timer = setInterval(()=>{
      changeCount(count => ( count+1 ) )
    },1000)
    return ()=>{
     clearInterval(timer)
    }
  },[])

  return(
    <div>
        <h2>当前求和为:{count}</h2>
        <button onClick={add}>点我加一</button>
        <hr/>
        <h2>我的名字是:{name}</h2>
        <button onClick={change}>点我更改名字</button>
        <button onClick={unmount}>卸载组件</button>
        <input type="text"  ref={mySef}/>
        <button onClick={tiShi}>点我提示内容</button>
    </div>

    
  )
}
