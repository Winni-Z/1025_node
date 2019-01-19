module.exports = {
  
  foo() {
    console.log('module1-----foo()')
  },
  bar(){
    console.log('module1-----bar()')
  }
  
}

/*
* 在Commonjs中默认有一个关系：module.exports = exports = {}
*
* */

exports.demo = function () {
  console.log('module1-----demo()')
}