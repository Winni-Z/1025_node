//1.引入mongoose模块
const mongoose = require('mongoose');

let promise = new Promise((resolve,reject)=>{
  //2.连接到指定数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_test',{ useNewUrlParser: true });

  //3.绑定监听，看数据库的连接状态
  mongoose.connection.once('open',(err)=>{
    if(!err){
      console.log('数据库连接成功了！')
      resolve();
    }else{
      reject(err);
      console.log(err)
    }
  })
});



//第一种使用promise的方法
// promise
//   .then(()=>{
//   console.log('操作数据库的代码')
//   },(err)=>{
//     console.log(err)
//   })

//第二种写法
// promise
//   .then(()=>{
//     console.log('操作数据库的代码')
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

//第三种写法
// demo()
// async function demo() {
//   await promise;
//   console.log('操作数据库的代码')
// }

//第三种写法的优化
;(async()=>{
  await promise;
  console.log('操作数据库的代码')
})()