**Chromium** 是 Google 开源的高性能浏览器，为 Chrome 浏览器的基础。通过 Docker 运行 Chromium 具有以下优势：

- **环境隔离**：避免与宿主机环境冲突
- **便携性**：一键部署标准化浏览器环境
- **安全性**：沙箱机制防止恶意网站攻击
- **无头模式支持**：适用于自动化测试/爬虫场景

```
docker run -d \
  --name=chromium \
  --restart=unless-stopped \
  -v /opt/docker/chromium/config:/config \
  -p 3000:3000 \
  -p 3001:3001 \
  -e PUID=0 -e PGID=0 -e CUSTOM_USER=admin -e PASSWORD=<密码> \
registry.cn-guangzhou.aliyuncs.com/fnapp/trim-chromium:latest
```

