# Transmission

Transmission是一款跨平台的BitTorrent客户端，用于在Mac OS X、Linux和Windows系统上下载和共享文件。它提供了一个简单易用的界面，可以让用户快速开始下载和共享文件。——来自Chatgpt

![](https://cdn.xiaoz.top/wp-content/uploads/2020/11/transmission.png)

官方网站：

[https://transmissionbt.com/](https://transmissionbt.com/)

安装参考：

[https://www.xiaoz.me/archives/15485](https://www.xiaoz.me/archives/15485)

[https://cloud.tencent.com/developer/article/2072005](https://cloud.tencent.com/developer/article/2072005)

```
docker run -d --name="transmission" \
  -e USERNAME=xiaoz \
  -e PASSWORD=xiaoz.me \
  -p 9091:9091 \
  -p 51413:51413 \
  -p 51413:51413/udp \
  -v /data/downloads:/root/Downloads \
  -v /data/transmission:/root/.config/transmission-daemon \
  --restart=always \
  helloz/transmission
```
