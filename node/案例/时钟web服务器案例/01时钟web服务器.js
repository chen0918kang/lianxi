const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer()

server.on('request',(req,res) =>{
// 映射地址
  const url=req.url
  let fpath = ''

if(url === '/'){
  fpath = path .join(__dirname,'./clock/index.html')
}
else{
  fpath = path.join(__dirname,'./clock',url)
}

fs.readFile(fpath,'utf8',(err,dataStr) =>{
  if(err){
    return res.end('404 Not Found')
  }
  res.end(dataStr)
})

})

server.listen(80,()=>{
  console.log("http server running at http://127.0.0.1");
})