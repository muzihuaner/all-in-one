**Chromium** 是 Google 开源的高性能浏览器，为 Chrome 浏览器的基础。通过 Docker 运行 Chromium 具有以下优势：

- **环境隔离**：避免与宿主机环境冲突
- **便携性**：一键部署标准化浏览器环境
- **安全性**：沙箱机制防止恶意网站攻击
- **无头模式支持**：适用于自动化测试/爬虫场景

https://docs.linuxserver.io/images/docker-chromium/#usage

**Docker CLI**

```
docker run -d \
  --name=chromium \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e CHROME_CLI=https://www.linuxserver.io/ `#optional` \
  -p 3000:3000 \
  -p 3001:3001 \
  -v /path/to/chromium/config:/config \
  --shm-size="1gb" \
  --restart unless-stopped \
  lscr.io/linuxserver/chromium:latest
```

**Docker-compose**

```
services:
  chromium:
    image: lscr.io/linuxserver/chromium:latest
    container_name: chromium
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - CHROME_CLI=https://www.linuxserver.io/ #optional
    volumes:
      - /path/to/chromium/config:/config
    ports:
      - 3000:3000
      - 3001:3001
    shm_size: "1gb"
    restart: unless-stopped
```
