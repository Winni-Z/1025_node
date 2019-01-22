//1.引入express框架
const express = require('express');
//2.创建一个app应用对象
const app = express();
//3.隐藏掉X-Powered-By: Express
app.disable('x-powered-by')
//4.定义端口号
const PORT = 3000
/*
* request(请求对象上的常用方法)
*     -request.query  get请求查询字符串的参数，拿到的是一个对象
*     -request.params get请求路由的参数，拿到的是一个对象
*     -request.body post请求体的参数，拿到的是一个对象
* response(响应对象)
*     -response.download  告诉浏览器下载一个文件
*
* */

//根路由
app.get('/',(request,response)=>{
  // response.send('根路由返回的')
  response.download('./music.mp3')
})

//一级路由
app.get('/test1',(request,response)=>{
  response.send('一级路由返回的')
})

//二级路由
app.get('/test1/demo1',(request,response)=>{
  response.send('二级路由返回的')
})

//参数路由
app.get('/shop/:id',(request,response)=>{
  console.log(request.params);
  response.send('参数路由返回的')
})

//处理POST请求
app.post('/test2',(request,response)=>{
  response.send('ok')
})



app.listen(PORT,err=>{
  if(!err){
    console.log(`服务器启动成功了，端口号是${PORT}`)
  }else{
    console.log(err)
  }
})