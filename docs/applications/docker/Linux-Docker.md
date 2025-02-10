---
sidebar_position: 2
---
# Linux docker 安装

使用官方脚本一键安装docker|安装docker-compose  
docker官方提供了傻瓜式安装脚本，为你做好所有工作，免去了手动安装的繁琐。
```
curl -fsSL https://get.docker.com | bash -s docker
```
可在此命令后附带--mirror参数设置镜像源，以提高国内服务器下载docker的速度

如使用阿里云镜像:
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

```