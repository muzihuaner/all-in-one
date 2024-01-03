# nginx-proxy-manager


`nginx-proxy-manager` 是一个基于 Nginx 服务器的开源项目，它提供了一个用户友好的 Web 界面，用于简化和管理 Nginx 反向代理的配置。该工具旨在使用户能够轻松地设置和维护多个网站、应用程序或服务，并通过反向代理来处理它们的流量。

以下是 `nginx-proxy-manager` 的一些关键特性和功能：

1. **图形用户界面 (GUI):** `nginx-proxy-manager` 提供了一个直观的图形用户界面，使用户无需深入了解 Nginx 配置文件的复杂性，就能轻松管理代理规则。
2. **多域名支持:** 用户可以在同一个服务器上轻松管理多个域名或子域名的代理设置，而不必手动编辑 Nginx 配置文件。
3. **SSL 证书管理:** 支持自动获取和更新 SSL 证书，确保通过代理的流量是加密的。这对于提供安全的 HTTPS 连接至关重要。
4. **基于 Docker 容器化支持:** `nginx-proxy-manager` 可以与 Docker 等容器化平台无缝集成，使得在容器化环境中进行反向代理配置变得更加方便。
5. **简化的代理规则配置:** 用户可以通过界面轻松添加、编辑和删除代理规则，包括指定源和目标的 IP 地址和端口等信息。
6. **统计和日志:** 提供流量统计和日志功能，让用户可以了解代理服务的使用情况和性能。

修改docker-compose.yml

```
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

执行

```
docker-compose up -d
```

[访问http://ip:81](http://127.0.0.1:81/)

默认管理员:

```
Email:    admin@example.com
Password: changeme
```
