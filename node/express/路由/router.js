const express = require('express')
// 引入
const router = express.Router()
// 创建路由对象
router.get('/home',(req,res) =>{
  res.send('get home')
})
router.get('/user',(req,res) =>{
  res.send('get user')

})
// 挂载

module.exports=router
// 导出
