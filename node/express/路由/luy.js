const express = require('express')
const app =express()
// 导入Router路由模块
const router = require('./router.js')
// 注册路由
app.use(router)

app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
  
  })