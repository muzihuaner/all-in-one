# qbittorrent

qBittorrent是一款跨平台的免费开源BitTorrent客户端，用于在Windows、Linux和macOS上下载文件。它提供了一个简单易用的界面，可以帮助用户快速、安全地下载文件。——来自Chatgpt
![](https://sleele.com/wp-content/uploads/uPic/svOCHj.png)

官方网站:[https://www.qbittorrent.org/](https://www.qbittorrent.org/)

镜像说明

https://docs.linuxserver.io/images/docker-qbittorrent/#parameters

Docker CLI

```
docker run -d \
  --name=qbittorrent \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e WEBUI_PORT=8080 \
  -e TORRENTING_PORT=6881 \
  -p 8080:8080 \
  -p 6881:6881 \
  -p 6881:6881/udp \
  -v /path/to/qbittorrent/appdata:/config \
  -v /path/to/downloads:/downloads `#optional` \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:latest
```


Docker-compose
```
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      - WEBUI_PORT=8080
      - TORRENTING_PORT=6881
    volumes:
      - /path/to/qbittorrent/appdata:/config
      - /path/to/downloads:/downloads #optional
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```
