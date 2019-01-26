const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get('/test',(req,res)=>{
  const {callback} =  req.query
  let arr = [{name:'peiqi',age:12},{name:'qiaozhi',age:13}]
  const str = callback+'('+ JSON.stringify(arr) +')'
  console.log('@@@@@@',str);
  res.send(str)
})



app.listen(3000,(err)=>{
  if(!err){
    console.log('ok')
  }else{
    console.log(err);
  }
})