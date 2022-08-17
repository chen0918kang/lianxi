const itchenkang = require('./index')

const time = itchenkang.dateFormat(new Date())
console.log(time)

const htmlStr = '<h1 title = "abc">这是h1标签<span>&nbsp;123</span></h1>'
const str = itchenkang.htmlEscape(htmlStr)
console.log(str)
const str2 = itchenkang.htmlUnEscape(str)
console.log(str2);