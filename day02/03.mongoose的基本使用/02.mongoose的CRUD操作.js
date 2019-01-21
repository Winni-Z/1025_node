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


;(async()=>{
  await promise;
  //1.获取Schema对象---------------------->请了一个保安
  const Schema = mongoose.Schema;

  //2.创建约束---------------------->告诉保安他的任务是干什么
  let studentsSchema = new Schema({
    name:{
      type:String,
      unique:true, //唯一
      required:true//必须的
    },
    age:Number,
    sex:String,
    hobby:Array, //[String]
    info:Schema.Types.Mixed, //能接收所有类型值
    date:{
      type:Date,
      default:Date.now()
    },
    enableFlag:{
      type:String,
      default:'Y'
    }
  })

  //3.创建模型对象--------------------->保安开始按照你的任务干活了
  let StudentsModel = mongoose.model('students',studentsSchema)

  //4.创建Document对象----------------->有人要进入你家，保安开始检查
/*  let stu1 = new StudentsModel({
    name:'静静',
    age:17,
    sex:'女',
    hobby:['敲代码'],
    info:'美的不行了！'
  })

  //5.保存文档对象---------------->进入了你家
  stu1.save((err,data)=>{
    if(!err){
      console.log('数据保存成功',data)
    }else{
      console.log(err)
    }
  })*/


//第二种保存的方式
//   StudentsModel.create({
//     name:'成龙',
//     age:32,
//     sex:'男',
//     hobby:['敲代码'],
//     info:'技术非常好66666'
//   },(err,data)=>{
//     if(!err) console.log('ok',data)
//     else console.log(err)
//   })

  StudentsModel.deleteOne({
    name:'成龙'
  },(err,data)=>{
    if(!err) console.log('ok',data)
    else console.log(err)
  })


})()