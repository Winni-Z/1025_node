//1.引入express
const express = require('express');

//2.引入body-parser模块---解析post请求的请求体，解析并挂载到request上
// const bodyParser = require('body-parser')

//3.创建app应用对象
const app = express();
//4.端口号
const PORT = 3000

//5.使用第三方中间件去解析post请求参数
// app.use(bodyParser.urlencoded({extended:true}))

//6.使用express内置的中间件，去解析post请求参数
app.use(express.urlencoded({extended:true}))

//6.内置中间件，用来暴露静态资源
app.use(express.static('public'))

/*
* 中间件（middleWare）
*    中间件实质上就是一个函数，有三个参数（request,response,next）
*
* 组成：
*   1.request 对象
*   2.response 对象
*   3.next 函数
*
* 作用：
*   1.执行任意业务代码。
*   2.修改请求和响应对象（request,response）
*   3.调用下一个中间件
*
* 分类：
*   1.应用级中间件：
*       修改请求和响应对象，拦截非法请求
*   2.第三方中间件：
*       不是express提供的，我们自己下载的
*       app.use(bodyParser.urlencoded({extended:true}))
*   3.内置中间件：
*       express内置的中间件
*       app.use(express.urlencoded({extended:true}))
*
*   4.路由器中间件
*       Router
*
*    1.在express中，路由和中间件定义的时，根据定义的顺序（代码的顺序）把中间件和路由放在一个
*       类似于数组的容器中，当请求到达的时候，依次取出数组容器中的路由和中间件，
*       匹配能处理该请求的路由和中间件。应用级中间件默认接收所有请求。
*    2.在express中还可以使用普通定义函数的方式，去定义中间件，使用的时候在路由中，在传入一个回调函数即可。
*    3.客户端发来一次请求之后，服务器会做出一次回应，并且在回应之后，不可以再修改req，res对象。
*    4.客户端的一次请求，到达服务器的时候，就是一个请求对象和一个响应对象，其他所有的中间件和路由
*       都是对其的引用。
* */

//1.应用级中间件
//1.1应用级中间件（第一种用法，使用use）
/*app.use((req,res,next)=>{
  const str = req.query
  console.log(str,'应用级中间件被调用了');
  // res.send('应用级中间件的回应')//意味着本次请求已经终止了
  const domain = req.get('host')
  if(domain !== 'localhost:3000'){
    //非法请求
    res.send('禁止盗用本站的链接')
    return
  }else{
    next() //让下一个符合要求的中间件或路由起作用
  }
})*/
//1.2应用级中间件（第二种用法,类似于直接定义函数）
function middle1 (req,res,next){
  req.xxxxx = 123
  const str = req.query
  console.log(str,'应用级中间件被调用了');
  // res.send('应用级中间件的回应')//意味着本次请求已经终止了
  const domain = req.get('host')
  if(domain !== 'localhost:3000'){
    //非法请求
    res.send('禁止盗用本站的链接')
    return
  }else{
    next() //让下一个符合要求的中间件或路由起作用
  }
}

//2.第三方中间件(使用use的方式调用第三方中间件)，例如：body-parser

//根路由
app.get('/',middle1,(req,res)=>{
  const str = req.query
  console.log(str,'根路由被调用了',req.xxxxx);
  res.send('根路由的回应')
})

app.get('/test2',(req,res)=>{
  const str = req.query
  console.log(str,'test2路由被调用了');
  res.send('test2路由的回应')
})

app.post('/test3',(req,res)=>{
  const data = req.body
  console.log(data);
  res.send('post ok')
})

// app.get('/test4',(req,res)=>{
//
//   res.sendFile(__dirname+'/public/test_post.html')
// })



//监听端口
app.listen(PORT,(err)=>{
  if(!err){
    console.log(`服务器启动成功，端口号是${PORT}`)
  }else {
    console.log(err);
  }
})