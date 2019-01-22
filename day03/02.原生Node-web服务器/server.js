//1.引入http模块，在node中http模块是他的核心模块，无下载，直接引用。
const http = require('http');
//2.引入querystring模块
const {parse} = require('querystring')

//3.创建服务对象
const server = http.createServer((request,response)=>{

  /*
  * 关于请求：
  *   1.request 是请求对象，用户发送的消息都包含在这里
  *   2.response是响应对象，服务器给客户端的响应都在这里
  *   3.在浏览器的地址栏里输入网址，这种请求方式，是GET请求
  * */

  const str = request.url.split('?')[1]
  console.log(parse(str));

  //设置响应头
  response.setHeader('content-type','text/html;charset=utf-8')
  //返回响应
  response.end('<h1>这是原生Node服务器返回的内容，哈哈</h1>')

})


//服务器启动，监听端口号（项目必须运行在某个端口上）
server.listen(3000,(err)=>{
  if(!err){
    console.log('服务器启动成功了，端口号为：3000')
  }else{
    console.log(err)
  }
})
