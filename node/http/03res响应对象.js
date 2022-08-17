// 1导入http模块
const http = require('http')
// 2创建web服务器实例
const server = http.createServer()
// 3为服务器实例绑定request事件，监听客户端的请求
server.on('request',(req,res)=> {
  const str =`Your request url is ${req.url},and request method is ${req.method},非常感谢为你提供本次服务`
  console.log(str)
  res.setHeader('Content-Type','text/html; charset=utf-8')
  res.end(str)

})

// 4，启动服务器
server.listen(80,function(){
  console.log('server running at http://127.0.0.1')
})