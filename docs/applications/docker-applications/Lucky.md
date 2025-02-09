# Lucky

Lucky最初是作为一个小工具，由开发者为自己的个人使用而开发，用于替代socat，在小米路由AX6000官方系统上实现公网IPv6转内网IPv4的功能。Lucky的设计始终致力于让更多的Linux嵌入式设备运行，以实现或集成个人用户常用功能，降低用户的硬件和软件操作学习成本，同时引导使用者注意网络安全。随着版本更新和网友反馈，Lucky不断迭代改进，拥有更多功能和更好的性能，成为用户值得信赖的工具。

Lucky 的核心程序完全采用 Golang 实现，具有高效、稳定、跨平台等优点。其后台前端则采用 Vue3.2 技术进行开发，具有良好的用户体验和响应速度。此外，Lucky 的管理后台采用前后端分离的架构，第三方开发者也可以自由使用OpenToken轻松调用Lucky的各种功能接口。

## 功能模块

目前已经实现/集成的主要功能模块有

- 端口转发
- 动态域名(DDNS)
- Web服务
- Stun内网穿透
- 网络唤醒
- 计划任务
- ACME自动证书
- 网络存储

官网 https://lucky666.cn/

### Docker镜像

```text
#host模式, 同时支持IPv4/IPv6, Liunx系统推荐
docker run -d --name lucky --restart=always --net=host gdy666/lucky
# 桥接模式, 只支持IPv4,windows 不推荐使用docker版本
docker run -d --name lucky --restart=always -p 16601:16601 gdy666/lucky
#挂载主机目录, 删除容器后配置不会丢失。可替换 /root/luckyconf 为主机目录, 配置文件为lucky.conf
docker run -d --name lucky --restart=always --net=host -v /root/luckyconf:/goodluck gdy666/lucky
```



> [!NOTE]
>
> lucky 在docker容器内部存放配置的文件夹路径是 /goodluck

#### docker compose

```text
    services:
      lucky:
        image: gdy666/lucky
        container_name: lucky
        volumes:
          - 容器外持久化路径:/goodluck
        network_mode: host
        restart: always
```

#### unraid 带图标的

```text
    services:
      lucky:
        image: gdy666/lucky
        container_name: lucky
        labels:
          net.unraid.docker.icon: "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/Lucky/icon.png"
          net.unraid.docker.webui: "http://[IP]:[PORT:16601]"
        volumes:
          - 容器外持久化路径:/goodluck
        network_mode: host
        restart: always
```



> [!NOTE]
>
> "在 Docker 安装的 Lucky 环境中，部分环境支持直接在 Lucky 后台上传 tar.gz 升级包进行升级。如果您的环境不支持此功能，请在 GoodLuck 对应的映射目录下创建一个名为 'bin' 的文件夹，并将相应架构的 tar.gz 升级包中的 'lucky' 文件放入该文件夹然后重启容器。Docker 版本中，'bin' 目录下的 Lucky 程序启动优先于容器内预置的 Lucky。当您混用多种升级方式并发现 Lucky 升级无效时，可以尝试删除 'bin' 目录下的 Lucky 文件，或将该文件替换为最新版本。

> [!WARNING]
>
> ***Linux环境不推荐使用bridge模式***
> 在bridge模式下，Lucky不支持IPv6，而且IPv4也可能会出现端口无法访问的情况。
> 如果你遇到了端口无法访问的问题，请尝试使用host模式。
> 如果host模式仍然无法解决问题，你可以尝试更换其他端口。
> 总之，如果不必使用Docker，建议不要使用Docker。

> [!WARNING]
>
> Windows环境可以使用Docker安装Lucky，但是并不推荐使用此方式。
> 相反，我们建议使用安装服务的方式来实现开机启动。
> 在Lucky后台设置页面下方可以找到安装/卸载Windows服务的选项。
> 在安装服务之前，请确保Lucky文件已经放置在你想要存放的位置。 ***安装Windows服务需要管理员权限运行Lucky***

