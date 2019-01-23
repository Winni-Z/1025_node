//引入express框架
const express = require('express')
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

    //注册路由
    app.post('/register',async(req,res)=>{
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
      const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com$/;
      //校验
      if(!userNameReg.test(userName)){
        res.send('用户名输入不合法，格式应该为：字母、数字、下划线，且长度为5--16位')
        return
      }
      if(!pwdReg.test(pwd)){
        res.send('密码输入不合法，格式应该为：字母、数字、下划线，且长度为5--30位')
        return
      }
      if(!emailReg.test(email)){
        res.send('邮箱输入不合法，格式应该为：邮箱名@服务器名.com')
        return
      }
      if(pwd !== rePwd){
        res.send('两次密码输入不一致，重新输入')
        return
      }

      try{
        /*
        * try中写一些可能出现错误的代码，一旦代码出现错误，那么会终止代码的执行，然后马上跳转到
        * catch中，并且携带着错误信息，程序员在catch中处理一些事情。
        * */
        //3.去数据库中查找该邮箱是否注册过
        const findData = await Users.findOne({email})
        if(!findData){
          //4.如果没有注册过，将信息写入到数据库中.
          await Users.create({userName,pwd,email})
          console.log(`${userName},${email}注册成功`)
          res.send('用户注册成功')
          return
        }else{
          res.send(`${email}邮箱已经被注册过，请重新指定邮箱`)
        }
      }catch(err){
        console.log(err);
        res.send('网络不稳定，请稍后重试！')
      }


    })
    //登录路由
    app.post('/login',async(req,res)=>{
      /*
      * 1.获取用户的输入
      * 2.直接去数据库中查找当前登录的信息（一般会再次校验数据的合法性）
      * 3.查到了，登录成功，查不到，登录失败
      * */
      //1.获取用户的输入
      const {pwd,email} = req.body

      try{
        //查询数据库
        const finData = await Users.findOne({pwd,email})
        if(!finData){
          res.send('用户名或密码输入错误')
        }else{
          res.redirect('https://www.baidu.com')
        }
      }catch(err){
        console.log(err);
        res.send('网络不稳定，请稍后重试！')
      }
    })

    //登录界面路由(UI路由)
    app.get('/login',(req,res)=>{
      res.sendFile(__dirname+'/public/login.html')
    })
    //注册页面路由(UI路由)
    app.get('/register',(req,res)=>{
      res.sendFile(__dirname+'/public/register.html')
    })
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