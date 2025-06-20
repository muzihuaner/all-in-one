# qbittorrent

qBittorrent是一款跨平台的免费开源BitTorrent客户端，用于在Windows、Linux和macOS上下载文件。它提供了一个简单易用的界面，可以帮助用户快速、安全地下载文件。——来自Chatgpt
![](https://sleele.com/wp-content/uploads/uPic/svOCHj.png)

官方网站:[https://www.qbittorrent.org/](https://www.qbittorrent.org/)


docker-compose.yml 
```
version: "3"
services:
  qbittorrentee:
    image: superng6/qbittorrentee
    container_name: qbittorrentee
    environment:
      - PUID=1026
      - PGID=100
      - TZ=Asia/Shanghai
      - WEBUIPORT=8082
      - ENABLE_DOWNLOADS_PERM_FIX=true
    volumes:
      - ./qbittorrentee/config:/config
      - ./qbittorrentee/downloads:/downloads
    ports:
      - 6881:6881
      - 6881:6881/udp
      - 8082:8082
    restart: unless-stopped
```
启动
'''
docker-compose up -d

'''


docker cli

'''
docker run -d \
  --name=qbittorrent \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e WEBUI_PORT=8082 \
  -e TORRENTING_PORT=6881 \
  -p 8082:8082 \
  -p 6881:6881 \
  -p 6881:6881/udp \
  -v ./qbittorrentee/config:/config \
  -v ./qbittorrentee/downloads:/downloads \
  --restart unless-stopped \
  lscr.io/linuxserver/qbittorrent:latest
'''