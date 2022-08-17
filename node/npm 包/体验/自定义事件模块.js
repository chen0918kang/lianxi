
// 格式化时间函数
function dateFormat(dtStr){
const dt =new  Date()

const y =dt.getFullYear()
const m =padZero(dt.getMonth() +1)
const d =padZero(dt.getDate())

const hh =padZero(dt.getHours())
const mm =padZero(dt.getMinutes())
const ss =padZero(dt.getSeconds())

return `现在的时间是${y}年${m}月${d}日,${hh}:${mm}:${ss}`;
}

// 补零函数
function padZero(n){
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}