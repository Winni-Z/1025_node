/*
* 路由器：
*   可以理解为一个小型的App对象
* 作用：
*   对路由进行分类管理
* 用法：
*   1.获取router：express.Router
*   2.实例化一个router对象： new Router()
*   3.暴露实例化对象
* */

//1.引入express
const express = require('express')
//引入cookie-parser
const cookieParser = require('cookie-parser')
//引入模型对象
const Users = require('../models/users')
//2.获取Router构造方法
const {Router} = express;
//3.实例化一个router对象： new Router()
const router = new Router()
//4.引入path模块（path模块是node的核心模块，不用安装，直接引入，专门用来处理路径问题）
const {resolve} = require('path')
router.use(cookieParser())


//登录界面路由(UI路由)
router.get('/login',(req,res)=>{
  // const filePath = resolve(__dirname,'../public/login.html')
  // res.sendFile(filePath)
  const {email} = req.query
  res.render('login',{errMsg:{email}})
})

//注册页面路由(UI路由)
router.get('/register',(req,res)=>{
  // const filePath = resolve(__dirname,'../public/register.html')
  // res.sendFile(filePath)
  res.render('register',{errMsg:{}})
})

//个人中心路由
router.get('/userCenter',async(req,res)=>{
  // const {userid} = req.cookies
  const {userid} = req.session

  //判断前台是否携带cookie过来。
  if(userid){
    //如果有cookie，去数据库中查找
    const loginData = await Users.findOne({_id:userid})
    //如果查找到
    if(loginData){
      //跳转到个人中心
      res.render('user_center',{loginMsg:{userName:loginData.userName}})
    }else {
      //证明cookie被修改了
      res.redirect('/login')
    }
  }else{
    res.redirect('/login')
  }

})



module.exports = router

