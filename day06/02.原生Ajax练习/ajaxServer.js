const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/getCode',(req,res)=>{
  console.log('验证码路由被触发了！')

  setTimeout(()=>{
    res.send(Math.floor(Math.random()*10000).toString())
  },2000)
})


app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})