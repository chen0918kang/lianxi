// 导入
const express = require('express')
// 创建
const app =express()
// 监听get 和post请求

app.get('/user',(req,res) =>{
  res.send({name : 'ck',age:18,gender:'男'})
})

app.post('/userck',(req,res) =>{
  res.send('请求成功')})
  
app.get('/',(req,res) =>{
  // 通过req.query可以获取到客户端发过来的查询参数
  console.log(req.query)
  res.send(req.query)
})

app.get('/user/:id/:name',(req,res) =>{
  // 等到匹配的动态路径参数值
  console.log(req.params)
  res.send(req.params)
  res.send(req.query)
})







// 启动
app.listen(80,()=>{
  console.log('express server running at http://127.0.0.1')
})