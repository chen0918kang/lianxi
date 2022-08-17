const fs = require('fs');
fs.writeFile('./files/2.txt','使用writeFile方法写入内容',(err) => {
  if(err){
    return console.log('文件写入失败！'+err.message)
  }
  else{
    console.log('文件写入成功！')
  }
})