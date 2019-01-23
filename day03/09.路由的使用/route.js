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
*     -request.body post请求体的参数，拿到的是一个对象（借助一个中间件）
*     -request.get() 获取请求头
* response(响应对象)
*     -response.send()    给浏览器做出一个响应
*     -response.end()     给浏览器做出一个响应（容易乱码）
*     -response.download  告诉浏览器下载一个文件
*     -response.sendFile 给浏览器发送一个文件（浏览器会自动打开）
*     -response.redirect 重定向到一个新的地址（url）
*     -response.set('demo',123)  自定义响应头内容
*     -response.get() 获取响应头指定key对应的value（自定义的响应头一定能拿得到）
* */

//根路由
app.get('/',(request,response)=>{
  // response.send('根路由返回的')
  // response.end()
  // response.download('./music.mp3')
  // response.sendFile(__dirname+'/public/demo.html')
  // response.sendFile(__dirname+'/public/demo.jpg')
  // response.sendFile(__dirname+'/public/music.mp3')
  // response.redirect('https://www.baidu.com')
  // response.json({name:'peiqi',age:12})
  // response.set('demo',123)
  // const str = response.get('demo')
  // console.log(str);

  // const str = request.get('host')
  // console.log(str);
  // response.send('ok')
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