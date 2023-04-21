# Webdav

### 什么是webdav？
WebDAV(Web Data Transfer) 是一种用于在 Web 浏览器和 Web 服务器之间传输数据的协议。WebDAV 是一种轻量级协议，它允许用户在 Web 浏览器中管理计算机上的文件和文件夹，并且可以与不同版本的 Web 浏览器进行兼容性。

WebDAV 允许用户通过 Web 界面对文件和文件夹进行上传、下载、重命名、删除等操作，同时也支持通过 HTTP 请求发送文件、设置文件属性等操作。WebDAV 通常用于在 Web 应用程序中管理文件和文件夹，例如在 Web 服务器上创建、编辑、存储和传输文件。

WebDAV 也支持远程文件访问，这意味着用户可以在 Web 浏览器中访问远程计算机上的文件，并且可以通过 Web 界面进行编辑和存储。WebDAV 协议的使用使得在 Web 浏览器中管理文件和文件夹变得更加简单和灵活。

### 搭建 WebDAV 服务

这里用到了 [Simple Go WebDAV server](https://github.com/hacdias/webdav) 项目

#### 1.下载到指定目录
```
wget https://github.com/hacdias/webdav/releases/download/v4.2.0/linux-amd64-webdav.tar.gz
tar -xvzf linux-amd64-webdav.tar.gz 
mv webdav /usr/bin/webdav 
rm -rf linux-amd64-webdav.tar.gz

```
#### 2.创建 WebDAV 目录
```
mkdir -p /root/webdav
```
####3.修改配置文件
```
vim webdav.yaml
```
写入下面的内容
```
# Server related settings
address: 0.0.0.0
port: 8080 #你要指定的端口比如8080
auth: true
tls: false
cert: cert.pem
key: key.pem
prefix: /
debug: false

# Default user settings (will be merged)
scope: .
modify: true
rules: []

# CORS configuration
cors:
  enabled: true
  credentials: true
  allowed_headers:
    - Depth
  allowed_hosts:
    - http://localhost:8080 #这里要和前面一样
  allowed_methods:
    - GET
  exposed_headers:
    - Content-Length
    - Content-Range

users:
  - username: admin
    password: admin
    scope: /root/webdav #你要放文件的目录

```

这里设置的端口是 68080，账号密码均为 admin，WebDAV 目录是 /root/webdav/ 可自行更改
####4.创建 Systemd 自启服务
```
vim /usr/lib/systemd/system/webdav.service
```
写入
```
[Unit]
Description=WebDAV server
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/bin/webdav --config /root/webdav.yaml #这里改成你的配置文件的路径
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
#### 管理命令
```
systemctl daemon-reload
systemctl start webdav
systemctl enable webdav
systemctl status webdav
```

当使用 Nginx 或 Apache 等反向代理时，请注意以下字段以避免导致 502 错误
```
location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
    }
```
