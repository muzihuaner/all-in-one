# Frp

frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。

项目地址：

[https://github.com/fatedier/frp](https://github.com/fatedier/frp)

## 为什么使用 frp ？

通过在具有公网 IP 的节点上部署 frp 服务端，可以轻松地将内网服务穿透到公网，同时提供诸多专业的功能特性，这包括：

* 客户端服务端通信支持 TCP、KCP 以及 Websocket 等多种协议。
* 采用 TCP 连接流式复用，在单个连接间承载更多请求，节省连接建立时间。
* 代理组间的负载均衡。
* 端口复用，多个服务通过同一个服务端端口暴露。
* 多个原生支持的客户端插件（静态文件查看，HTTP、SOCK5 代理等），便于独立使用 frp 客户端完成某些工作。
* 高度扩展性的服务端插件系统，方便结合自身需求进行功能扩展。
* 服务端和客户端 UI 页面。

---

这里推荐stilleshan的一键安装脚本

项目地址：

[https://github.com/stilleshan/frpc](https://github.com/stilleshan/frpc)

### 使用

以下分为四种部署方法,请根据实际情况自行选择:

1. 群晖 NAS docker 安装 **[支持 docker 的群晖机型首选]**
2. 群晖 NAS 一键脚本安装 **[不支持 docker 的群晖机型]**
3. Linux 服务器 一键脚本安装 **[内网 Linux 服务器或虚拟机]**
4. Linux 服务器 docker 安装 **[内网 Linux 服务器或虚拟机]**

---

### 1. 群晖 NAS docker 安装 **[支持 docker 的群晖机型首选]**

[详情点击查看教程](https://www.ioiox.com/archives/26.html)

### 2. 群晖 NAS 一键脚本安装 **[不支持 docker 的群晖机型]**

[详情点击查看教程](https://www.ioiox.com/archives/6.html)

### 3. Linux 服务器 一键脚本安装

> *本脚本目前同时支持 Linux X86 和 ARM 架构*

安装

```shell
wget https://raw.githubusercontent.com/stilleshan/frpc/master/frpc_linux_install.sh && chmod +x frpc_linux_install.sh && ./frpc_linux_install.sh
# 以下为国内镜像
wget https://github.ioiox.com/stilleshan/frpc/raw/branch/master/frpc_linux_install.sh && chmod +x frpc_linux_install.sh && ./frpc_linux_install.sh
```

使用

```shell
vi /usr/local/frp/frpc.ini
# 修改 frpc.ini 配置
sudo systemctl restart frpc
# 重启 frpc 服务即可生效
```

卸载

```shell
wget https://raw.githubusercontent.com/stilleshan/frpc/master/frpc_linux_uninstall.sh && chmod +x frpc_linux_uninstall.sh && ./frpc_linux_uninstall.sh
# 以下为国内镜像
wget https://github.ioiox.com/stilleshan/frpc/raw/branch/master/frpc_linux_uninstall.sh && chmod +x frpc_linux_uninstall.sh && ./frpc_linux_uninstall.sh
```

### 4. Linux 服务器 docker 安装

为避免因 **frpc.ini** 文件的挂载,格式或者配置的错误导致容器无法正常运行并循环重启.请确保先配置好 **frpc.ini** 后在运行启动.

**git clone** 本仓库,并正确配置 **frpc.ini** 文件.

```shell
git clone https://github.com/stilleshan/frpc
# git clone 本仓库镜像
git clone https://github.ioiox.com/stilleshan/frpc
# 国内镜像
vi /root/frpc/frpc.ini
# 配置 frpc.ini 文件
```

执行以下命令启动服务

```shell
docker run -d --name=frpc --restart=always -v /root/frpc/frpc.ini:/frp/frpc.ini stilleshan/frpc
```

> 以上命令 -v 挂载的目录是以 git clone 本仓库为例,也可以在任意位置手动创建 frpc.ini 文件,并修改命令中的挂载路径.

服务运行中修改 **frpc.ini** 配置后需重启 **frpc** 服务.

```shell
vi /root/frp/frpc.ini
# 修改 frpc.ini 配置
docker restart frpc
# 重启 frpc 容器即可生效
```
