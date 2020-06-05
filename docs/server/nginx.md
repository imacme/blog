# 2020-05-27

1. max_clients 理论计算公式

max_clients = worker_processes * worker_connections / 4



nginx作为http服务器的时候：

max_clients = worker_processes * worker_connections

nginx作为反向代理服务器的时候：

max_clients = worker_processes * worker_connections / 4


最终的结论：



从用户的角度，http 1.1协议下，由于浏览器默认使用两个并发连接,因此计算方法：



   nginx作为http服务器的时候：

    max_clients = worker_processes * worker_connections/2

   nginx作为反向代理服务器的时候：

    max_clients = worker_processes * worker_connections/4



或者从一般建立连接的角度：客户并发连接为1.

   nginx作为http服务器的时候：

    max_clients = worker_processes * worker_connections

   nginx作为反向代理服务器的时候：

    max_clients = worker_processes * worker_connections/2



nginx做反向代理时，和客户端之间保持一个连接，和后端服务器保持一个连接。



clients与用户数：



  同一时间的clients(客户端数)和用户数还是有区别的，当一个用户请求发送一个连接时这两个是相等的，但是当一个用户默认发送多个连接请求的时候，clients数就是用户数*默认发送的连接并发数了。
  