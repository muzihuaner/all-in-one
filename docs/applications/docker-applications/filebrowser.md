# Filebrowser

File Browser（文件浏览器）是一种 **基于 GO语言 开发的开源轻量级文件管理系统** ，它能够在浏览器上管理你的文件，让您可以在浏览器上使用查看、下载、修改等各种功能。

File Browser 可以在指定目录中提供文件管理界面，可以上传、删除、预览、重命名和编辑文件。 它允许创建多个用户，每个用户都可以拥有自己的目录。 它可以用作独立应用程序或中间件。

功能概览：

* 简单好用的登录系统
* 通过流畅的界面管理文件
* 管理用户，添加权限，设置文件范围
* 编辑文件
* 执行自定义命令
* 个性化界面

项目地址：

[https://github.com/filebrowser/filebrowser](https://github.com/filebrowser/filebrowser)

官方安装文档：

[https://filebrowser.org/installation](https://filebrowser.org/installation)

Docker部署命令

```
docker run \
    -v /path/to/root:/srv \
    -v /path/to/filebrowser.db:/database/filebrowser.db \
    -v /path/to/settings.json:/config/settings.json \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    -p 8080:80 \
    filebrowser/filebrowser
```


访问你的浏览器，现在应该可以开始使用了。如果通过外网访问，别忘了在防火墙打开端口。

[![File Browser](https://img.iszy.xyz/20190318213056.png)](https://img.iszy.xyz/20190318213056.png "File Browser")

### 管理

这里的管理指的是在服务器上对 File Browser 进行管理，File Browser 内的操作我就不再赘述了。

* 关闭 File Browser: `docker stop filebrowser`
* 开启 File Browser: `docker start filebrowser`
* 卸载 File Browser: `docker rm filebrowser`
