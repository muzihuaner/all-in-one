# Jellyfin

Jellyfin是一个开源的媒体服务器软件，可以让您在任何设备上流式传输和共享音乐、电影、电视节目和其他媒体文件。它可以运行在Windows、macOS、Linux、Android和NAS系统上，并支持多种流行的流媒体客户端（如Kodi）。——来自Chatgpt

官方网站：

[https://jellyfin.org/](https://jellyfin.org/)

官方安装文档：

[https://jellyfin.org/docs/general/installation/](https://jellyfin.org/docs/general/installation/)

#### 拉取Jellyfin的docker镜像

* 首先，dockerhub上已经发布了jellyfin的docker镜像，[https://hub.docker.com/r/jellyfin/jellyfin](https://links.jianshu.com/go?to=https%3A%2F%2Fhub.docker.com%2Fr%2Fjellyfin%2Fjellyfin)，按照说明，只需要一行命令

```
docker pull jellyfin/jellyfin
```

然而我并不是这样做的。因为懒，直接docker安装了。

* 这是安装命令

```
docker run -d -p 8096:8096 -v /jellyfin/config:/config -v /media/xxx:/media jellyfin/jellyfin
```

上面的参数中需要说明的是：

> 1. -p 后面是jellyfin服务的端口号，安装时可以指定，这里使用默认的8096；
> 2. -v 后面是指定的配置路径，比如/media/ivy/新加卷/影音视频就是我原来的影音物理路径，/media就是jellyfin的映射路径

现在就可以通过http://本地ip:8096来访问jellyfin服务了。

#### 这样，我们的jellyfin服务就安装好了。

当然除此之外，还有什么显卡直通之类，可以自己研究一下

### 中国特供版

[https://hub.docker.com/r/nyanmisaka/jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin)

### jellyfin刮削插件MetaShark
https://github.com/cxfksword/jellyfin-plugin-metashark