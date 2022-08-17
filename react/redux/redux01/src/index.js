import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'
// 引入store 和Provider 可以省略在app下的子组件分别引入store={store} 
    ReactDOM.render(
        <Provider store={store} >
              <App/>
        </Provider>  ,document.getElementById('root'))
// 检测redux状态变化，重新渲染 在react-redux中可以没有这一段
// import store from './redux/store'
// store.subscribe(()=> {
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })

