/*
* 1.JS由哪几部分组成？
*   1.DOM 文档对象 ------- 很多的API能对DOM进行（增删改查）
*   2.BOM 浏览器对象 ------ 很多的API，（location，history）
*   3.ES 规范
*
* 2.NodeJs有哪些组成部分/
*   1.没有DOM，因为服务端不需要。
*   2.没有BOM，因为没有浏览器窗口。
*   3.几乎ES规范的所有内容。
*   4.没有了window，但是取而代之的是一个叫做global的全局变量.
*     console
*     setTimeOut()
*     ...
*
* 3.global上有什么东西？
*    console
*    process.nextTick //立即执行函数
*    Buffer
*    clearImmediate
*    clearInterval
*    clearTimeout
*    setImmediate //立即执行函数
*    setInterval
*    setTimeout
*
*
* */


// console.log(window)
// console.log(global)

/*
* 主线程上的代码
  process.nextTick执行了
  setTimeout执行了
  setImmediate执行
* */



//立即执行函数
setImmediate(()=>{
  console.log('setImmediate执行')
})

// process.nextTick
// process.nextTick(()=>{
//   console.log('process.nextTick执行了')
// })

//延时定时器
setTimeout(()=>{
  console.log('setTimeout执行了')
})

// console.log('主线程上的代码')

/*
* 在NodeJS中事件轮询机制：
*  整体分为六个阶段：
*
*  第一个阶段：timers（定时器阶段）
*           1.计时。
*           2.定时器到点了，执行定时器中的回调函数。
*
*  第二个阶段：pending callbacks（系统阶段）
*
*  第三个阶段：idle, prepare（准备阶段）
*
*  第四个阶段：poll（轮询阶段，核心阶段）
*               --如果轮询队列不为空，队列中有回调函数：
*                   从队列中拿出回调函数，同步执行（一个一个执行），直到队列为空 或 达到系统最大限度
*               --如果轮询队列为空：
*                     --如果有设置setImmediate
*                         进入下一个check阶段（目的是：执行setImmediate定义的回调函数）
*                     --如果没有设置setImmediate
*                         在此阶段停留，等待回调函数被插入到轮询队列中
*                         定时器到点了，进入下一个check阶段
*
*  第五个阶段：check（专门用于执行setImmediate定义的回调函数）
*
*  第六个阶段：close callbacks（关闭回调阶段，例如：clearImmediate）
*
*  特殊的process.nextTick，优先级别很高，能在任意一个阶段被优先执行。
*
*
* */









