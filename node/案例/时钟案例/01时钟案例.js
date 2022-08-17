// 导入fs模块
const fs = require('fs')
// 导入path模块
const path = require('path')

// 定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/
const regScript =  /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
// 读取失败
if(err){
  return console.log('读取html文件失败！'+err.message)
}
// 读取成功，调用三个方法拆分html，css，js文件
resolveCss(dataStr);
resolveJs(dataStr)
resolveHtml(dataStr)
})


// exec是检索文本,
// 如果检测到，则返回数组，数组【0】就是检测到的文本
// 如果没有检测到返回null
// 处理css样式
function resolveCss(htmlStr){
// 使用正则提取文本
 const rCss = regStyle.exec(htmlStr);
//  将提取出来的文本进行处理
const cssNew = rCss[0].replace('<style>','').replace('</style>','')
fs.writeFile(path.join(__dirname,'./clock/index.css'),cssNew,function(err){
  if(err){
    return console.log('写入css样式失败，'+err.message)
  }
  console.log('写入css样式成功！')
})
}

// js文件提取
function resolveJs(htmlStr){
  // 使用正则提取文本
   const rJs = regScript.exec(htmlStr);
  //  将提取出来的文本进行处理
  const jsNew = rJs[0].replace('<script>','').replace('</script>','')
  fs.writeFile(path.join(__dirname,'./clock/index.js'),jsNew,function(err){
    if(err){
      return console.log('写入js样式失败，'+err.message)
    }
    console.log('写入js样式成功！')
  })
  }

  // html文件提取
function resolveHtml(htmlStr){
  // 使用字符串的replace方法把内嵌的<script> 和 <style> 标签，替换为外联的<link> 和  <script src>标签
  const HtmlNew = htmlStr.replace(regStyle,'<link rel="stylesheet" href = "index.css">')
                         .replace(regScript,'<script src = "index.js"></script>')

// 将替换完成的html代码写入html文件中
  fs.writeFile(path.join(__dirname,'./clock/index.html'),HtmlNew,function(err){
    if(err){
      return console.log('写入html样式失败，'+err.message)
    }
    console.log('写入html样式成功！')
  })
  }