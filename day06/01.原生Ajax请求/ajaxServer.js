const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/testAjax',(req,res)=>{
  console.log(req.query);

  res.send('这是服务器端ajax——get的回应2')
  // res.sendFile(__dirname+'/music.mp3')
})

app.post('/testAjax2',(req,res)=>{
  console.log(req.body);
  res.send('这是服务器端ajax——post的回应')
})


app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})