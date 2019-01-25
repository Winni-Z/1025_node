//引入express框架
const express = require('express')
//引入操作session的模块
const session = require('express-session');
//引入session持久化库
const MongoStore = require('connect-mongo')(session);
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
//4.配置模板引擎
app.set("view engine" , "ejs");
//5.配置模板目录
app.set("views","./views");
//session的配置对象
app.use(session({
  name: 'id',   //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否在存储内容之前创建会话
  resave: false ,//是否在每次请求时，强制重新保存session，即使他们没有变化
  //持久化
  store: new MongoStore({
    url: 'mongodb://localhost:27017/cookies_container',
    touchAfter: 24 * 3600 //修改频率（例：//在24小时之内只更新一次）
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作cookie
    maxAge: 1000*60*60 // 设置cookie的过期时间
  },
}));

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