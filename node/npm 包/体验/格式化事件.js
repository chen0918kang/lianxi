// 引入自定义模块
const TIME = require('./自定义事件模块.js')

// 调用方法格式化时间
const dt = new Date()
const newDt = TIME.dateFormat(dt)
console.log(newDt)