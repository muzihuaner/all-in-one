# Emby

Emby（原名Media Browser）是一个主从式架构的媒体服务器软件，可以用来整理服务器上的视频和音频，并将音频和视频流式传输到客户端设备。Emby服务器端支持Microsoft Windows、Linux、MacOS、FreeBSD，客户端支持HTML5网页，Android和IOS等移动操作系统。

Emby同样支持Roku、Amazon Fire TV、Chromecast和Apple TV等流媒体设备，LG智能电视和三星智能电视等智能电视，以及Xbox 360和Xbox One等游戏机。Emby自带了非常多的插件，它可以帮助你搭建一个自己的影视媒体库，实现在线播放与观看视频。

官方网站：

[https://emby.media/](https://emby.media/)

官方版：

[https://hub.docker.com/r/emby/embyserver/](https://hub.docker.com/r/emby/embyserver/)

安装教程：

[https://post.smzdm.com/p/ax0r7pe9/](https://post.smzdm.com/p/ax0r7pe9/)

[https://mrchou.com/internet/how-to-set-emby-by-docker.html](https://mrchou.com/internet/how-to-set-emby-by-docker.html)

开心版：

https://hub.docker.com/r/amilys/embyserver

```
docker run -d --privileged \
    --name=embyserver \ #名称
    --network host \ #网络模式
    -v /docker/emby_happy_amilys:/config \ #配置文件
    -v /data:/data \ #媒体数据目录, 电影, 电视剧等
    --device=/dev/dri/ \ #核显
    --gpus=all \ #给容器新增gpu 使容器可以使用宿主机的gpu 
    -e NVIDIA_VISIBLE_DEVICES=all \ # nvidia显卡ID
    -e NVIDIA_DRIVER_CAPABILITIES=all \ #显卡驱动程序功能 utility, compute, all
    -p 8096:8096 \ #端口
    -p 8920:8920 \ #端口
    -e UID=0 \ #用户ID 通过id user查看对应的数字
    -e GID=0 \ #组ID  
    -e TZ=Asia/Shanghai \ #时区
    --restart unless-stopped \ #自动重启, 失败重启等
    amilys/embyserver:latest 
```

其他：

Xml TV电视指南数据

[http://epg.51zmt.top:8000/e.xml](http://epg.51zmt.top:8000/e.xml)
