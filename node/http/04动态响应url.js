const http = require('http')
const { isAbsolute } = require('path')
const server=http.createServer()
server.on('request',(req,res) =>{
// 1获取请求的url地址
const url = req.url
// 2设置默认的响应内容为404 not found
let Content = '<h1>404 Not found!</h1>'
// 3判断用户请求的是否为/ 或是/indexedDB.html 
if(url === '/' || url === '/index.html'){
  Content = '<h1>首页</h1>'
  // 4判断用户请求的是否为/isAbsolute.html
}else if(url === '/about.html'){
  Content = '<h1>关于</h1>'
}
// 5设置Countent-Type响应头 防止中文乱码
  res.setHeader('Content-Type','text/html; charset=utf-8')
// 6res.end把内容响应给客户端
res.end(Content)
})
server.listen(80,() =>{
  console.log('http server running at http://127.0.0.1')
})