/*
* 该路由器负责用户注册、登录的业务逻辑，会操作数据库
* */

//1.引入express
const express = require('express')
//引入用户模型对象
const Users = require('../models/users')
//2.获取Router构造方法
const {Router} = express;
//3.实例化一个router对象： new Router()
const router = new Router()



//注册路由
router.post('/register',async(req,res)=>{
  /*
  * 1.获取用输入
  * 2.校验数据的合法性
  * 3.查询数据库，该邮箱是否注册过
  * 4.如果注册过，驳回请求，如果没有，将内容写入数据库
  * */

  //1.获取用输入
  const {userName,pwd,rePwd,email} = req.body
  //定义一个错误容器
  const errMsg = {}

  //2.校验数据的合法性，建立正则验证规则
  const userNameReg = /^[a-zA-Z0-9_]{5,16}$/;
  const pwdReg = /^[a-zA-Z0-9_]{5,30}$/;
  const emailReg = /^[a-zA-Z0-9_]{5,20}@[a-zA-Z0-9_]{2,10}\.com$/;
  //校验
  if(!userNameReg.test(userName)){
    errMsg.userNameErr = '用户名输入不合法，格式应该为：字母、数字、下划线，且长度为5--16位';
  }
  if(!pwdReg.test(pwd)){
    errMsg.pwdErr = '密码输入不合法，格式应该为：字母、数字、下划线，且长度为5--30位';
  }
  if(!emailReg.test(email)){
    errMsg.emailErr = '邮箱输入不合法，格式应该为：邮箱名@服务器名.com';
  }
  if(pwd !== rePwd){
    errMsg.rePwdErr = '两次密码输入不一致，重新输入';
  }

  //判断用户输入是否存在错误（错误对象不为空）
  if(JSON.stringify(errMsg) !== '{}'){
      errMsg.userName = userName
      errMsg.email = email
      res.render('register',{errMsg})
      return;
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
      // res.send('用户注册成功')
      res.redirect('/login?email='+email)
      return
    }else{
      // res.send(`${email}邮箱已经被注册过，请重新指定邮箱`)
      errMsg.emailErr = '邮箱已经被注册过，请重新指定邮箱';
      res.render('register',{errMsg})
    }
  }catch(err){
    console.log(err);
    // res.send('网络不稳定，请稍后重试！')
    errMsg.netWorkErr = '网络不稳定，请稍后重试！'
    res.render('register',{errMsg})
  }


})
//登录路由
router.post('/login',async(req,res)=>{
  /*
  * 1.获取用户的输入
  * 2.直接去数据库中查找当前登录的信息（一般会再次校验数据的合法性）
  * 3.查到了，登录成功，查不到，登录失败
  * */
  //1.获取用户的输入
  const {pwd,email} = req.body
  //定义错误对象
  const errMsg = {}

  try{
    //查询数据库
    const finData = await Users.findOne({pwd,email})
    if(!finData){
      errMsg.loginErr = '邮箱或密码输入错误'
      // res.send('')
      res.render('login',{errMsg})
    }else{
      // res.redirect('https://www.baidu.com')
      // res.redirect('/userCenter?userName='+finData.userName)
      res.cookie('userid',finData._id,{maxAge:1000*30})
      res.redirect('/userCenter')
    }
  }catch(err){
    console.log(err);
    res.send('网络不稳定，请稍后重试！')
  }
})


module.exports = router