/*
* 流式文件读取：
*   fs.createReadStream(path[, options])
*        --path：写入文件的位置（路径）
*           --options ：配置对象
*                 --flags：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "r" ：读取
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*                 --fd:文件描述符（文件索引）,默认：null
*                 --autoClose:自动关闭，当文件写入完毕的时候（水管里没有水了），自动关闭已经打开的文件，默认：true
*                 --start:写入开始的位置，默认：0
*                 --end：结束的位置（一般不用），默认：Infinity
*                 --highWaterMark:每一次读取文件时候的大小，默认为 64 * 1024
*           --callback：回调函数
* */

let fs = require('fs')
let rs = fs.createReadStream('../music.mp3')
let ws = fs.createWriteStream('./new2.mp3')

rs.on('open',()=>{
  console.log('可读流打开了')
})

rs.on('close',()=>{
  console.log('可读流关闭了')
  ws.end()
})

ws.on('open',()=>{
  console.log('可写流打开了')
})

ws.on('close',()=>{
  console.log('可写流关闭了')
})


//给可读流绑定一个data事件:
// 1.就会触发自动读取文件的操作
// 2.当没有东西可读取的时候，自动关闭可读流
rs.on('data',(data)=>{
  /*
  * 对于数组来说，输出arr.length是指数组的长度
  * 对于Buffer，输出的是所占用空间的大小（字节 byte）\
  * 对于流式文件读取来说，默认每一次流中数据的大小是64KB
  * */
  console.log(data.length)
  ws.write(data)
  // ws.end()
})
