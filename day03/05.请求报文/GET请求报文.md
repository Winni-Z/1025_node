## GET请求报文（给服务器看的）
    GET http://127.0.0.1:3000/test1 HTTP/1.1
    Host: 127.0.0.1:3000
    Connection: keep-alive
    Pragma: no-cache
    Cache-Control: no-cache
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7
    空行
    空行
    
### 请求首行
    GET http://127.0.0.1:3000/test1 HTTP/1.1
    请求方式 协议名://ip地址:端口号/路由 协议版本
### 请求头
    Host: 127.0.0.1:3000
        -请求地址
    Connection: keep-alive
        -保持长连接
    Pragma: no-cache
        -不走缓存（http 1.0提出的）
    Cache-Control: no-cache
        -不走缓存（http 1.1提出的--------优先级别高）
    Upgrade-Insecure-Requests: 1
        -告诉服务，浏览器可以使用http 1.1协议
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
        -用户代理，最开始是用来识别用户使用的是哪一个品牌的浏览器，后期不行了
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
        -告诉服务器浏览器能接收的文件格式，q代表的是优先级，默认值是1
    Accept-Encoding: gzip, deflate, br
        -告诉服务器，浏览器能接受的压缩格式
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7
         -告诉服务器,浏览器能接受语言
### 空行

### 请求体
     GET请求没有请求体