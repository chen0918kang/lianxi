const fs = require('fs')

fs.writeFile('./files/1.txt','使用writeFile方法写入内容',function(err){
console.log(err)
})