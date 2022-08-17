// 1导入fs模块
const fs = require('fs')
// 2fs.readFile（）读取
fs.readFile('./成绩.txt','utf8',function(err,dataStr){
  // 3判断是否读取成功
  if(err){
    return console.log('文件读取失败！'+err.message)
  }
  else{
    console.log('文件读取成功，内容是：'+ dataStr)
  }
  //4成功后处理数据
// 1,先把数据，按照空格分割
const arrOld = dataStr.split(' ')
// 2，循环分割后的数组，对每一项数据进行字符串的替换操作
const arrNew = []
arrOld.forEach(item => {
arrNew.push(item.replace('=',':'))
})
// 3数据合并得到新字符串
const newArr = arrNew.join('\r\n')
console.log(newArr)
// 5处理后数据fs.writeFile写入新文件
fs.writeFile('./ok成绩.txt',newArr,function(err){
  if(err){
    return console.log('文件写入失败！'+err.message)
  }
  else{
    console.log('文件写入成功！')
  }
})
})

