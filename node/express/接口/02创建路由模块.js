const express = require('express')
const router =express.Router()

router.get('/get',(req,res) =>{
  const query =req.query  //获取数据
// 响应处理结果
  res.send({
    status:0, // 0处理成功，1失败
    msg:'GET 请求成功！',
    data:query  
  })

})


// post接口
router.post('/post',(req,res) =>{
  const body =req.body
res.send({
  status:0,
  msg:'post请求成功!',
  data:body
})

})

module.exports = router