/*
* 1.在NodeJs中，所有的模块（js文件）都被自动包裹了一个外层函数。
*   function (exports, require, module, __filename, __dirname) {}
*         --exports：用于暴露模块
*         --require：用于引入模块
*         --module：用于暴露模块
*         --__filename:当前文件的路径（绝对路径）
*         --__dirname：当前文件所在文件夹路径（绝对路径）
*
* 2.这个外层函数有什么用？
*     1.让我们可以直接使用Commonjs的模块语法。
*     2.隐藏内部实现（作用域）
*     3.出于安全性考虑
* */



// console.log(arguments.callee.toString())
console.log(__filename) //C:\Users\tianyu\Desktop\1025_node\day01\03.NodeJs中函数的特点\index_function.js
console.log(__dirname) //C:\Users\tianyu\Desktop\1025_node\day01\03.NodeJs中函数的特点


//arguments的使用
// demo('hello','atguigu')
// function demo(str1,str2) {
//   //在函数内部，输出整个外层函数内容
//   console.log(arguments.callee.toString())
// }