const express = require('express')
const router =express.Router()
// 挂载路由

router.get('/get',(req,res) => {

const query = req.query

      res.send({
        status: 0,
        msg: 'GET请求成功',
        data: query
        })
})


const acm = ['http://streetwill.co/posts/895-auc','http://streetwill.co/posts/894-auc','http://streetwill.co/posts/893-auc']
router.post('/post',(req,res) => {


   res.send({
       status: 0,
       msg: 'POST请求成功',
       data: acm
     })
  })


module.exports = router