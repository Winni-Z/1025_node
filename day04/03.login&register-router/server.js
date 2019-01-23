//引入express框架
const express = require('express')
//引入ui路由
const uiRouter = require('./router/uiRouter')
//引入users路由(业务路由)
const usersRouter = require('./router/userRouter')
//引入数据库操作模块
const db = require('./db')
//引入模型对象
const Users = require('./models/users')
//创建app服务对象
const app = express()
//定义端口号
const PORT = 3000
//引入中间件去解析post请求体
app.use(express.urlencoded({extended:true}))
//隐藏服务器框架名称
app.disable('x-powered-by')
//使用内置中间件暴露静态资源
app.use(express.static('public'))

db
  .then(()=>{
      //使用路由器
      app.use(uiRouter)
      app.use(usersRouter)
  })
  .catch((err)=>{
    console.log(err);
  })

//监听端口号
app.listen(PORT,(err)=>{
  if(!err){
    console.log('服务器启动成功了，端口号为'+PORT)
  }else{
    console.log(err);
  }
})