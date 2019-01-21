/*
* 1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作。
* 2.在NodeJs中，你给我们提供了一个模块，叫做fs模块，专门用户操作文件。
* 3.fs模块是Node的核心模块，使用的时候，要引入进来，不用下载安装。
*
*   简单文件写入：
*   fs.writeFile(file, data[, options], callback)
*           --file : 写入文件的路径+文件名
*           --data ：写入的数据
*           --options ：配置对象
*                 --flag：打开文件要进行的操作,默认值"w"
*                     "w" : 写入
*                     "r" ：读取
*                     "a" ：追加
*                 --mode：文件的操作权限，默认值是0o666
*                     0o111:文件可被执行的权限
*                     0o222：文件被写入的权限
*                     0o444：文件被读取的权限
*                 --encoding：编码，默认值是"utf-8"
*           --callback：回调函数
*
*  在Node中有一个这样的设计，叫做：错误优先。
*
*
*  备注：对于简单文件写入而言，每一次进行文件写入操作的时候，会一次性把所有要写入的内容装载到内存中
* */

let fs = require('fs')

fs.writeFile('./hello.txt','佩奇是谁？他是一头小猪，全家都是猪\n',{
  flag:'a',
  mode:0o666,
  encoding:'utf-8'
},(err)=>{
  if(!err) console.log('文件写入成功');
  else console.log(err)
})