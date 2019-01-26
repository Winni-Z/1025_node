const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// app.get('/getCode',(req,res)=>{
//   console.log('验证码路由被触发了！')
//
//   setTimeout(()=>{
//     res.send(Math.floor(Math.random()*10000).toString())
//   },2000)
// })

app.get('/testAjax',(req,res)=>{
  console.log(req.query);

  res.send('testAjax-------ok')
})

app.post('/testAjax2',(req,res)=>{
  console.log(req.body);

  res.send('testAjax2-------ok')
})


app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})