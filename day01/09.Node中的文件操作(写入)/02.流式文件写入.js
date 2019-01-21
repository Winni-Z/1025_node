/*
  流式文件写入：
*   特点：以流的形式操作文件，不再是将文件一次性的装载到内存中了，效率高，减少服务器的压力。
*   fs.createWriteStream(path[, options])
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
*           --callback：回调函数
* */

let fs = require('fs')

let ws = fs.createWriteStream('./hello2.txt',{
  start:30
})

//检测可写流打开
ws.on('open',()=>{
  console.log('可写流打开了！')
})

//检测可写流关闭
ws.on('close',()=>{
  console.log('可写流关闭了！')
})

ws.write('佩奇是谁？')
ws.write('他是一猪？')
ws.write('盘ta！？')

// ws.close()
ws.end()

/*
* 在Node 10 以下的版本（8版本）中直接调用 ws.close()，可能会造成，文件没有写入完毕，就关闭了流，导致数据的丢失。
*
* */
