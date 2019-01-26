const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/testAjax',(req,res)=>{
  console.log(req.query);

  res.send('这是服务器端ajax——get的回应')
  // res.sendFile(__dirname+'/music.mp3')
})


app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})