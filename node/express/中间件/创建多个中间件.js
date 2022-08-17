const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw1 = function(req,res,next) {
  console.log('这是第一个最简单的中间件函数')
  next()
}
const mw2 = function(req,res,next) {
  console.log('这是第二个最简单的中间件函数')
  next()
}
const mw3 = function(req,res,next) {
  console.log('这是第三个最简单的中间件函数')
  next()
}
const mw4 = function(req,res,next) {
  console.log('这是第四个最简单的中间件函数')
  next()
}

app.use(mw1,mw2,mw3,mw4)


app.get('/',(req,res) =>{
  console.log('调用了这个路由')
  res.send('home hello'+res.TIme)
})


app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
})