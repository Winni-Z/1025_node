/*
* 关于cookie：
*   1.是什么？
*     本质上就是浏览器所存储的一个字符串，里面包含着一些客户端和服务器交互时产生的信息。
*     存储的形式是以：key-value的形式存储的。
*     浏览器请求时会自动携带cookie，只要有该域名下的cookie，就必须携带
*
*   2.分类：
*       -会话cookie（关闭浏览器后，cookie自动消失）
*       -持久化cookie（看设置的过期时间有没有到）
*
*   3.工作原理（例子：兜里的小纸条）
*        备注：cookie不一定都由后台产生，前端通过js一样能生成cookie，很少使用。
*              cookie一般都由后台“种”的。
*       -当浏览器第一次请求服务器的时候，服务器可能返回一个或多个cookie，包裹在响应头中。
*       -当浏览器接收到这个cookie，将这个cookie保存起来。
*             -如果是会话cookie，保存在运行浏览器的那块内存中。
*             -如果是持久化cookie，保存在用户电脑的硬盘中，并且过期后自动删除。
*       -当浏览器再次向服务器发起请求的时候，自动携带着之前所有cookie，包裹在请求头中，发送给服务器。
*       -服务接收到cookie之后，查看cookie中的内容，根据内容作出一些具体的业务逻辑。
*
*    4.应用：
*       用于解决http无状态这一特性，（7天免登录）
*
*    5.在不同的语言、不同框架中使用cookie的具体语法是不一样的，但是原理和过程是一样的。
*
* */

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const PORT = 3000

/*
* 在express框架中，设置cookie无需任何的中间件或者库，直接使用：res.cookie()
* 使用cookie-parser之后，将浏览器发过来的所有cookie，解析成对象，挂载到request上,名叫cookies
* */
//返回一个cookie给浏览器
app.get('/test1', (req, res) => {
  /*
  *
  * */
  //返回一个会话cookie
  // res.cookie('panta','fangjiahuijiale')

  //返回一个持久化cookie
  res.cookie('panta','fangjiahuijiale',{maxAge:1000*30})
  res.send('test1----ok')
});


//在express框架中，要获取cookie，要借助一个第三方中间件，叫做cookie-pareser
//获取客户端过来的cookie
app.get('/test2',(req,res)=>{
  const {panta} = req.cookies
  res.send('test2--------ok')
});

//告诉浏览器删除一个cookie
app.get('/test3',(req,res)=>{

  // 删除cookie的第一种方法
  req.clearCookie()
  res.send('test3-----------ok')

  //删除cookie的第二种方法
  // res.cookie('panta','fangjiahuijiale',{maxAge:0})
  // res.send('test3-----------ok')

})


app.listen(PORT,(err)=>{
  if(!err) console.log(`服务器启动成功了，端口号为：${PORT}`)
  else console.log(err)
})