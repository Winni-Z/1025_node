/*
* 1.什么是包？
*   你的工程，你写的项目就称之为一个包的，但是要符合包的格式才可以。
*
* 2.包的结构：
*	  package.json 	描述文件
    bin 	可执行二进制文件
    lib 	js代码
    doc	文档
    test	单元测试
    初始化包的命令:npm init
    包名要求：不能有中文、不能大写字母

* 3.npm与node的关系？
*   安装ndoe之后，自动会安装一个npm包管理器。
*
* 4.npm的常用命令：
*   一、搜索：
*        1.通过命令行搜索：npm search xxxx
*        2.通过网站搜索:https://www.npmjs.com/
*
*   二、安装：（前提：必须初始化了包，必须要有package.json文件）
*
*       1. npm install xxxx --save 或 npm i xxxx -S 或 npm i xxx
*       （下载安装xxxx包到当前工程，并讲该包写入包的描述文件,并添加到生产依赖dependencies中。）
*
*       2.npm install xxx --save-dev 或 npm i xxx -D
*       (下载安装xxxx包到当前工程，并讲该包写入包的描述文件,并添加到开发依赖devDependencies中。)
*
*       3.npm install 或 npm i ：安装所有package.json里声明的包
*
*       4.npm install xxxx@2.0.0 :安装xxxx包的指定版本
*
*       5.npm install xxxx -g ：全局安装xxx包（一般来说，带有指令的需要全局安装）
*         查看全局安装位置：npm get prefix
*
*
*   三、移除：
*
*         npm remove xxxxx ：移除xxxx包，并修改package.json。
*
*   四、其他：
*
*       1. 安装好的包，存放于当前目录下的node_modules文件夹。
*
*       2.package-lock.json文件中存储着已安装包的详细信息。主要用于下一次安装包的时候，速度快一些。
*
*       3.npm view xxxx versions ：查看远程npm服务器上xxxx包的所有版本
*
*       4.npm view xxxx version : 查看远程npm服务器上xxxx包的最新版本
*
*       5.npm ls xxx ： 查看当前工程安装的xxx包版本信息
*
*       6.npm audit fix ：修复一些内容
*
*
*
*   版本号：
*   "^2.x.x" ：锁定大版本，以后安装包的时候，保证2.x.x即可，对于x来说，直接下载最新的
*   "~2.2.x"：锁定小版本,以后安装包的时候，保证2.2.x即可，对于x来说，直接下载最新的
*   "2.2.1"：锁定完整版本，必须是2.2.1
* */