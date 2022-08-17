const express = require('express')
const app = express()


// 配置解析表单数据的中间件  必须放在路由模块前面
app.use(express.urlencoded({ extended:false }))
// 配置cors中间件，解决接口跨域问题
const cors = require('cors')
app.use(cors())


// 导入路由模块
const router = require('./router')
// 注册路由模块
app.use('/api',router)



app.listen(80,() =>{
  console.log('express server running at http://127.0.0.1')
})