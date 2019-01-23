//引入express框架
const express = require('express')
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


//注册路由
app.post('/register',(req,res)=>{
  /*
  * 1.获取用输入
  * 2.校验数据的合法性
  * 3.查询数据库，该邮箱是否注册过
  * 4.如果注册过，驳回请求，如果没有，将内容写入数据库
  * */

  //1.获取用输入
  const {userName,pwd,rePwd,email} = req.body

  //2.校验数据的合法性，建立正则验证规则
  const userNameReg = /^[a-zA-Z0-9_]{5,16}$/;
  const pwdReg = /^[a-zA-Z0-9_]{5,30}$/;
  const emailReg = /^[a-zA-Z0-9_]@[a-zA-Z0-9_]{2,10}\.com$/;

  //3.使用正则进行校验
  userNameReg.test(userName)


  res.send('ok')
})

//登录路由
app.post('/login',(req,res)=>{

})


//监听端口号
app.listen(PORT,(err)=>{
  if(!err){
    console.log('服务器启动成功了，端口号为'+PORT)
  }else{
    console.log(err);
  }
})