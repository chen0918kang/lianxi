const express = require('express')
const app = express()

// // 定义一个局部生效的中间件函数
const mw = function(req,res,next) {
  console.log('这是一个最简单的局部生效中间件函数')
  next()
}
const mw1 = function(req,res,next) {
  console.log('多个的局部生效中间件函数')
  next()
}

const mw110 = function(req,res,next) {
  console.log('测试全局中间件和局部中间件那个优先级高')
  next()
}
app.use(mw110)

app.get('/',mw,(req,res) =>{
  console.log('调用了这个路由')
  res.send('home hello')
})

app.get('/res1',[mw,mw1],(req,res) =>{
  console.log('调用了这个路由')
  res.send('home hello')
})

app.get('/res',mw1,(req,res) =>{
  console.log('调用了这个路由')
  res.send('home hello')
})


app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
})