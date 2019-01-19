/*
* 1.Buffer是什么？
*    1.他是一个类似于数组的对象，用于存储数据（存储的是二进制数据）。
*    2.Buffer的效率很高，存储和读取很快，直接对计算机的内存进行操作。
*    3.Buffer的大小一旦确定了，不可修改。
*    4.每个元素大小为1字节。
*    5.Buffer是Node中的非常核心模块，不需要引入即可使用
* 2.进制：
*   十六进制：00-----ff
*   十进制：0----255
*   二进制：00000000--------11111111
*
*
*   1字节（byte） =  8位（bit）;
*   1KB = 1024byte
*   1MB = 1024KB
*   1GB = 1024MB
*   1TB = 1024GB
*   1PB = 1024TB
*   ...
* */


//1.将一个字符串保存到Buffer中
// let str = 'Hello atguigu';
// // console.log(str);
// let buf = Buffer.from(str);
// console.log(buf.toString());

//2.新建一个Buffer对象(废弃了，原因：效率低)
// let buf = new Buffer(10)
// console.log(buf);

//3.新建一个Buffer对象(效率稍低)
// let buf = Buffer.alloc(10)
// console.log(buf);

//4.新建一个Buffer对象(效率最高的，不安全)
// let buf = Buffer.allocUnsafe(10)
// console.log(buf.toString());