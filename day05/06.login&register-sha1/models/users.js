/*
*
* 该模块主要负责建立students模型
* */

//1.引入mongoose模块
const mongoose = require('mongoose');

//2.获取Schema对象---------------------->请了一个保安
const Schema = mongoose.Schema;

//3.创建约束---------------------->告诉保安他的任务是干什么
let usersSchema = new Schema({
  userName:{
    type:String,
    required:true//必须的
  },
  pwd:{
    type:String,
    required:true//必须的
  },
  email:{
    type:String,
    required:true,//必须的
    unique:true//唯一的
  },
  date:{
    type:Date,
    default:Date.now()
  },
  enableFlag:{
    type:String,
    default:'Y'
  }
})

//4.创建模型对象--------------------->保安开始按照你的任务干活了
let UsersModel = mongoose.model('users',usersSchema)

module.exports = UsersModel