import React from 'react'
import {Navigate,NavLink,Outlet} from 'react-router-dom'

export default function Home() {

const [count,change] = React.useState(0)

    function changeShow(){
        change(count+1)
    }
    function computedClassName({ isActive }) {
      return isActive ? "list-group-item cdx" : "list-group-item";
    }
  return (
    <div>
        <h3>我是Home的内容</h3>
        <h3>当前函数组件的值:{count}</h3>
        <button onClick={changeShow}>+1</button>
        {count === 3 ?<Navigate to="/about"/> :<h4>count未达到3,继续渲染此页面</h4> }
        <div>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className={computedClassName} replace  to = "new">News</NavLink>
                  </li>
                  <li>
                    <NavLink className={computedClassName}  to="message">Message</NavLink>
                  </li>
                </ul>
                <div>
                <Outlet/>
                </div>
              </div>
            </div>
    </div>
  )
}
