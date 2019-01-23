//1.引入express框架
const express = require('express');
//2.创建一个app应用对象
const app = express();
//3.隐藏掉X-Powered-By: Express
app.disable('x-powered-by')
//4.定义端口号
const PORT = 3000
//5.配置模板引擎
app.set("view engine" , "ejs");
//6.配置模板目录
app.set("views","./views")


/*
* 1.安装：npm i ejs --save
* 2.配置模板引擎：app.set("view engine" , "ejs");
* 3.配置模板目录：app.set("views","./views")
* 4.渲染数据
* */


//处理GET请求
app.get('/test1',(req,res)=>{
  const data = [{name:"a",age:12},{name:"b",age:13}]
  res.render('demo',{data})
})


app.listen(PORT,err=>{
  if(!err){
    console.log(`服务器启动成功了，端口号是${PORT}`)
  }else{
    console.log(err)
  }
})