//1.引入数据库操作模块
const db = require('./db');
//2.引入students模型
const StudentsModel = require('./model/students')


;(async()=>{
  await db;
  StudentsModel.create({
    name:'成龙',
    age:18,
    sex:'男',
    hobby:['敲代码'],
    info:'技术非常好66666'
  },(err,data)=>{
    if(!err) console.log('ok',data)
    else console.log(err)
  })
})()