import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
// 检测redux状态变化，重新渲染
store.subscribe(()=> {
  ReactDOM.render(<App/>,document.getElementById('root'))
})

