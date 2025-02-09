# Aira2

Aria2是一款自由、跨平台命令行界面的下载管理器，该软件根据GPLv2许可证进行分发。支持的下载协议有：HTTP、HTTPS、FTP、Bittorrent和Metalink。我们经常用Aria2替代迅雷等下载工具，Aria2多线程下载，完全可以跑满带宽。

这里推荐[P3TERX](https://p3terx.com/archives/docker-aria2-pro.html)的Aria2 Pro

Aria2 Pro是作者[P3TERX](https://p3terx.com/archives/docker-aria2-pro.html)经过长时间使用和研究官方文档后总结出来的Aria2优化版，特点是BT 下载率高、速度快，重启后不丢失任务进度、不重复下载，BT 下载完成自动清除垃圾文件、自动清除小文件(文件大小过滤功能)，支持与 RCLONE 联动，自动上传 OneDrive 、Google Drive 等网盘 ，百度网盘转存到其它网盘 ，多网盘自由选择。

[![Aria2 Pro-功能强大Aria2 Docker 容器镜像：在线Web管理,下载速度快,功能强](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_00-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_00.png)

本篇文章就来分享一下[Aria2 Pro Docker](https://wzfou.com/tag/aria2-pro-docker/)的安装与使用方法

## 一、Aria2 Pro Docker介绍

网站：

1. 作者：https://p3terx.com/archives/docker-aria2-pro.html
2. GitHub: https://github.com/P3TERX/docker-aria2-pro
3. Docker Hub: https://hub.docker.com/r/p3terx/aria2-pro

**镜像特点：**

**使用 Aria2 完美配置方案**

> BT 下载率高、速度快
>
> 重启后不丢失任务进度、不重复下载
>
> 删除正在下载的任务自动删除未完成的文件
>
> 下载错误自动删除未完成的文件
>
> 下载完成自动删除控制文件(`.aria2`后缀名文件)
>
> 下载完成自动删除种子文件(`.torrent`后缀名文件)
>
> 下载完成自动删除空目录
>
> BT 下载完成自动清除垃圾文件(文件类型过滤功能)
>
> BT 下载完成自动清除小文件(文件大小过滤功能)
>
> 有一定的防版权投诉、防迅雷吸血效果
>
> 更好的 PT 下载支持

**使用 Aria2 Pro Core 项目最新静态编译二进制文件**

> 多平台：`amd64`, `i386`, `arm64`, `armhf`（VPS、群辉、树莓派等常见平台完美支持）
>
> 全功能：`Async DNS`, `BitTorrent`, `Firefox3 Cookie`, `GZip`, `HTTPS`, `Message Digest`, `Metalink`, `XML-RPC`, `SFTP`
>
> 单服务器线程数最大值无上限（已破##解线程数限制）
>
> 防掉线程优化
>
> 内存消耗优化
>
> 读写性能优化
>
> 最新依赖库，下载更安全、稳定、快速
>
> 持续更新最新版本
>
> 支持与 RCLONE 联动
>
> 自动上传 OneDrive 、Google Drive 等网盘
>
> 百度网盘转存到其它网盘
>
> 多网盘自由选择
>
> 支持新一代互联网协议 IPv6
>
> 下载完成自动移动文件到指定目录（文件自动归档/分类）
>
> 定时自动更新 BT tracker 列表（无感知、无重启），保持 BT 下载高速率
>
> 用户文件权限自动配置功能
>
> 配置文件持久化，支持使用 watchtower 更新容器。
>
> 极简设计，专注下载，简单易用，少即是多。

## 二、Aria2 Pro Docker安装

2.1 Docker环境

参考 **Docker安装与部署**

2.3 Aria2 Pro安装

最基本的启动命令如下，你只需要完整替换 `<TOKEN>`字段(RPC密钥)即可启动。

```
docker run -d \
    --name aria2-pro \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network host \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=<TOKEN> \
    -e RPC_PORT=6800 \
    -e LISTEN_PORT=6888 \
    -v $PWD/aria2-config:/config \
    -v $PWD/aria2-downloads:/downloads \
    p3terx/aria2-pro
```

配置本机防火墙开放必要的入站端口，内网机器在路由器设置端口转发到相同端口。

### 2.4 安装AriaNg

1. docker地址：https://hub.docker.com/r/p3terx/ariang

使用你喜欢的 WebUI 或 App 进行连接，强烈推荐 AriaNg。你可以直接使用：http://ariang.mayswind.net/latest，或者直接用Docker在VPS上安装AriaNg：

```
docker run -d \
    --name ariang \
    --log-opt max-size=1m \
    --restart unless-stopped \
    -p 6880:6880 \
    p3terx/ariang
```

## 三、Aria2 Pro Docker使用

### 3.1 AriaNg配置

安装完成后，现在打开 ip:6880 访问AriaNg的web管理界面，在AriaNg设置中RPC填入你的密钥。

[![Aria2 Pro Docker设置密钥](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_04-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_04.png)

确保你的Aria2的连接状态为正常。

[![Aria2 Pro Docker连接状态](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_05-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_05.png)

### 3.2 Aria2离线下载

现在你可以在AriaNg新建离线下载了。

[![Aria2 Pro Docker打开下载](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_06-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_06.png)

受益于主机的带宽的优势，Aria2离线下载速度还是非常快的。

[![Aria2 Pro Docker下载速度](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_07.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_07.png)

### 3.3 修改下载路径

默认的Aria2 Pro Docker下载路径是在以下路径：

[![Aria2 Pro Docker下载路径](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_08-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_08.png)

当然，你可以自己修改参数如下：

> `-v $PWD/aria2-config:/config` – 配置目录映射，配置文件持久化。左边为宿主机路径供自定义，**不要有中文、不要混用配置文件，首次使用请确保目录为空。**
>
> `-v $PWD/aria2-downloads:/downloads` – 下载目录映射。左边为宿主机路径供自定义， **不要有中文** 。
>
> `-e SPECIAL_MODE=move` – 开启**文件自动归档/分类**功能，即在文件下载完成后把文件移动到指定目录。默认移动到下载目录下的 `completed`子目录。

> **TIPS:** 注意确认目录是否存在、权限是否正确。

### 3.5 BT与PT设置

BT和PT下载相关参数设置如下：

> `-e UPDATE_TRACKERS=false` – 禁用自动更新 BT tracker 。 **PT 下载和想手动填写设置 BT tracker 需求必须禁用** 。
>
> `-e CUSTOM_TRACKER_URL=<URL>`：自定义 BT tracker 列表获取链接，多个链接可以用半角逗号(`,`)进行分隔。如果没有指定则默认从 `https://trackerslist.com/all_aria2.txt`进行获取。
>
> `-e UMASK_SET=022` – umask 设置，默认值 `022`。决定你下载下来的文件的权限，对权限不敏感或不理解直接填写 `000`。
>
> `-e TZ=<TIME_ZONE>` – 时区设置，默认时区为 `Asia/Shanghai`，若无特殊需求无需自定义。

 **同时使用 BT 与 PT。** 使用 Aria2 Pro 镜像创建名为 `aria2-bt`的容器 RPC 端口设置为 `6801`，BT 端口设置为 `6999`，配置目录设置为 `~/aria2-bt-config`，下载目录设置为 `~/bt-downloads`。启动命令示例：

```
docker run -d \
    --name aria2-bt \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network host \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=P3TERX \
    -e RPC_PORT=6801 \
    -e LISTEN_PORT=6999 \
    -v ~/aria2-bt-config:/config \
    -v ~/bt-downloads:/downloads \
    p3terx/aria2-pro
```

如果你的Aria2 无法下载磁力链接、BT种子和速度慢，建议打开**自动更新 BT-Tracker** 功能即可，Aria2 Pro 则是默认开启的。然后再看一下端口有没有开放：

**# BT监听端口(TCP)**

```
# BT监听端口(TCP)
listen-port=51413
# DHT网络监听端口(UDP)
dht-listen-port=51413
```
