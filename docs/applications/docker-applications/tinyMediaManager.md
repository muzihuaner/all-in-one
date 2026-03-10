# tinyMediaManager

tinyMediaManager 是一款用 Java 和 Swing 构建的媒体管理工具，旨在为 Kodi（原 XBMC）、Emby、Jellyfin 和 Plex 等媒体中心提供元数据。由于它基于 Java，tinyMediaManager 具有跨平台特性，可在 Windows、Linux、macOS 以及其他操作系统上运行。

官方网站

https://www.tinymediamanager.org/

https://github.com/dzhuang/tinymediamanager5-docker

中文优化版

```
docker run -d --name=tinymediamanager \
-v /share/Container/tinymediamanager/config:/config \
-v /share/Container/tinymediamanager/media:/media \
-e GROUP_ID=0 -e USER_ID=0 -e TZ=Europe/Madrid \
-p 5800:5800 \
-p 5900:5900 \
dzhuang/tinymediamanager:latest-v5
```

Docker Compose

```
services:
  tinymediamanager:
    image: dzhuang/tinymediamanager:latest-v5
    container_name: tinymediamanager
    network_mode: bridge
    environment:
      - GROUP_ID=<根据自己的用户修改>
      - USER_ID=<根据自己的用户修改>
      - TZ=Asia/Shanghai
    volumes:
      - ./config:/config
      - <媒体库目录>:/media
    ports:
      - 5800:5800
      - 7878:7878
    restart: unless-stopped
```

## TinyMediaManager配置

1. 访问`http://<机器的IP>:5800`进入TinyMediaManager 页面
2. https://ghostdavid.pages.dev/posts/TinyMediaManager-userguide/

