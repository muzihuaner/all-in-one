# qbittorrent

qBittorrent是一款跨平台的免费开源BitTorrent客户端，用于在Windows、Linux和macOS上下载文件。它提供了一个简单易用的界面，可以帮助用户快速、安全地下载文件。——来自Chatgpt
![](https://sleele.com/wp-content/uploads/uPic/svOCHj.png)

官方网站:[https://www.qbittorrent.org/](https://www.qbittorrent.org/)

安装教程参考:[https://sleele.com/2020/04/09/docker-qbittorrent-optimizing/](https://sleele.com/2020/04/09/docker-qbittorrent-optimizing/)


```
docker create  \
    --name=qbittorrent  \
    -e WEBUIPORT=8080  \
    -e PUID=1026 \
    -e PGID=100 \
    -e TZ=Asia/Shanghai \
    -p 6881:6881  \
    -p 6881:6881/udp  \
    -p 8080:8080  \
    -v /配置文件位置:/config  \
    -v /下载位置:/downloads  \
    --restart unless-stopped  \
    superng6/qbittorrent:latest
```
