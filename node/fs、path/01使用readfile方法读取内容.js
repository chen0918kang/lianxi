// 导入fs模块，来操作文件
const fs = require('fs')
// 调用fs.readFile（）
fs.readFile('./files/1.txt','utf8',(err,dataStr) => {
  // 打印失败结果
  console.log(err);
  console.log("----------")
  // 打印成功结果n
  console.log(dataStr);
})