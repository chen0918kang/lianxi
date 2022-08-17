// 导入内置querystring模块
const qs= require('querystring')
const bodyParser = (req,res,next)=> {
  // 业务逻辑
  let str = ''
  // 监听data事件
  req.on('data',(chunk)=>{
  str+=chunk
  })
  req.on('end',()=>{
  // 解析数据格式
  const body = qs.parse(str)
  req.body = body
  next()
  
  })
  }

  module.exports = bodyParser