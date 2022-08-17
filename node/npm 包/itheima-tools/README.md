##安装
```
npm install itchenkang
```

##导入
```js
const itchenkang = require('index.js)
```

##格式化时间
```js
// 调用dateFormat 对时间进行格式化
const time = itchenkang.dateFormat(new Date())
console.log(time)
// 现在的时间是2022年04月19日,20:09:51
```

##转义HTML中的特殊字符
```
const htmlStr = '<h1 title = "abc">这是h1标签<span>&nbsp;123</span></h1>'
const str = itchenkang.htmlEscape(htmlStr)
<!-- 调用htmlEscape对字符串转义 -->
console.log(str)
<!-- &lt;h1 title = &quot;abc&quot;&gt;这是h1标签&lt;span&gt;&amp;nbsp;123&lt;/span&gt;&lt;/h1&gt; -->
```

##还原HTML中的特殊字符
```
<!-- 调用htmlUnEscape对转义的字符串进行还原 -->
const str2 = itchenkang.htmlUnEscape(str)
console.log(str2);
<!-- <h1 title = "abc">这是h1标签<span>&nbsp;123</span></h1> -->
```

##开源协议
ISC