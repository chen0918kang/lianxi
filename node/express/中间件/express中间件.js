const express = require('express')
const app = express()

// // 定义一个最简单的中间件函数
// const mw = function(req,res,next) {
//   console.log('这是一个最简单的中间件函数')
//   next()
// }
// // 定义全局生效的中间件
// app.use(mw)

// 简化中间件函数
app.use((req,res,next) =>{
  console.log('这是一个最简单的中间件函数')
  const time = Date.now()
  res.TIme = time
  next()
})

app.get('/',(req,res) =>{
  console.log('调用了这个路由')
  res.send('home hello'+res.TIme)
})
app.get('/list',(req,res) =>{
  res.send('list hello'+res.TIme)
})

app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
})