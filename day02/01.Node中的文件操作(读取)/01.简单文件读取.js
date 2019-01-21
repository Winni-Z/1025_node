/*
* 简单文件读取：
*   fs.readFile(path[, options], callback)
*       --path:文件路径
*       --options：配置对象（可选）
*        --flag：打开文件要进行的操作,默认值"w"
*              "w" : 写入
*              "r" ：读取
*              "a" ：追加
*        --encoding：编码，默认值是"utf-8"
*       --callback：回调函数
* */

let fs = require('fs')

//简单文件读取
fs.readFile('../music.mp3',(err,data)=>{
  //如果打开成功
  if(!err) {
    console.log(data)
    //输出的data是十六进制的Buffer对象，思考：为什么？
    fs.writeFile('./new.mp3',data,(err)=>{
      if(!err)  console.log('文件写入成功！')
      else console.log(err)
    })
  }
  else{
    console.log(err)
  }
})