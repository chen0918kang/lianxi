const fs = require('fs');
fs.readFile('./files/1.txt','utf8',(err,dataStr) => {
  if(err){
    return console.log('文件读取失败！'+err.message)
  }
  else{
    console.log('文件读取成功，内容是：'+ dataStr)
  }
})