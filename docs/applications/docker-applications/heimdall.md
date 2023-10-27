# Heimdall

Heimdall是一款开源的仪表板和应用程序启动程序。它提供了一个集中管理和访问你的应用程序、服务和资源的界面。

docker安装

```
docker run -d \
  --name=heimdall \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -p 80:80 \
  -p 443:443 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/heimdall:latest
```
