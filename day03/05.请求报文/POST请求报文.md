## POST请求报文 (给服务器看的)
    POST http://127.0.0.1:3000/test2 HTTP/1.1
    Host: 127.0.0.1:3000
    Connection: keep-alive
    Content-Length: 17
    Cache-Control: max-age=0
    Origin: http://localhost:63342
    Upgrade-Insecure-Requests: 1
    Content-Type: application/x-www-form-urlencoded
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Referer: http://localhost:63342/1025_node/day03/05.%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87/test.html?_ijt=flh9dr2i1r8nltreac4rvmr88n
    Accept-Encoding: gzip, deflate, br
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7
    
    name=peiqi&age=12
    
###请求首行
    POST http://127.0.0.1:3000/test2 HTTP/1.1
###请求头
    Host: 127.0.0.1:3000
        -请求地址
    Connection: keep-alive
        -保持长连接
    Content-Length: 17
        -请求体长度（大小）
    Cache-Control: max-age=0
        -不走缓存（http 1.1提出的--------优先级别高）
    Origin: http://localhost:63342
        -请求的来源（只精确到端口号）
    Upgrade-Insecure-Requests: 1
        -告诉服务，浏览器可以使用http 1.1协议
    Content-Type: application/x-www-form-urlencoded
        -告诉服务器该请求是由一个form表单发出的，并且请求参数以urlencoded这种形式传递的。
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
        -用户代理，最开始是用来识别用户使用的是哪一个品牌的浏览器，后期不行了
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
        --告诉服务器浏览器能接收的文件格式，q代表的是优先级，默认值是1
    Referer: http://localhost:63342/1025_node/day03/05.%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87/test.html?_ijt=flh9dr2i1r8nltreac4rvmr88n
        --请求的来源（完整的请求地址）1.防盗链 2.广告计费
    Accept-Encoding: gzip, deflate, br
        --告诉服务器，浏览器能接受的压缩格式
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7
        --告诉服务器,浏览器能接受语言
###空行

###请求体
    name=peiqi&age=12
    (urlencoded这种形式传递的)