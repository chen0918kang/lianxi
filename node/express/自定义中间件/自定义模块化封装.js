const express = require('express')
const app = express()
const myBodyParser = require('./custom-body-parser')
// 解析表单数据的中间件
app.use(myBodyParser)
app.post('/user',(req,res)=>{
  res.send(req.body)
})


app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
})