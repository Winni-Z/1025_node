//1.引入express框架
const express = require('express');
//2.创建一个app应用对象
const app = express();
//3.隐藏掉X-Powered-By: Express
app.disable('x-powered-by')

//路由（后台路由），概念：对前端请求url类型的分类，目的是方便后台去处理请求
/*
* 满足一下两点即可进入该路由
*   1.请求方式必须是GET
*   2.请求路径（url）必须是：http://localhost:3000/test1
* GET与POST请求：
*   1.什么时候用GET请求？
*       -单纯获取东西的时候用GET请求
*       -输入URL请求网址的时默认的时GET请求
*       -请求中包含一些非敏感数据的参数的时候，采用GET
*   2.什么时候用POST请求？（对于POST请求，他的请求参数是在地址栏上不可见的）
*       -请求参数中包含一些敏感数据时，采用POST
*       -客户端携带一些请求参数，并且该请求可能会向数据库中写入内容的时候，用POST
* */

//处理GET请求
app.get('/test1',(request,response)=>{
  /*
  *  1.request 是请求对象，用户发送的消息都包含在这里
  *  2.response是响应对象，服务器给客户端的响应都在这里
  * */
  const str =  request.query
  console.log(str);

  /*
  * 在express中:
  *   1.当调用send方法时，会自动识别你所响应的内容，自动加上响应头。
  *   2.自动将用户的查询字符串解析成一个对象（键值对的形式存在）挂载到request上
  * */
  response.send('<h1>这是express服务器所返回的内容</h1>')
})
//处理POST请求
app.post('/test2',(request,response)=>{

})

app.listen(3000,err=>{
  if(!err){
    console.log('服务器启动成功了，端口号是3000')
  }else{
    console.log(err)
  }
})