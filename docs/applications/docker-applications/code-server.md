# code-server

Code-Server是在远程服务器上运行的 Vscode，可通过浏览器访问。
使用一致的开发环境在 Chromebook、平板电脑和笔记本电脑上编写代码。
如果您有 Windows 或 Mac 工作站，则更容易为 Linux 开发。
利用大型云服务器来加速测试、编译、下载等。
在旅途中延长电池寿命。
所有密集计算都在您的服务器上运行。
您不再运行过多的 Chrome 实例。(谷歌翻译)

官方网站：

[https://coder.com/](https://coder.com/)

### 支持的架构

| 架构   | 兼容性 | Tag                       |
| ------ | ------ | ------------------------- |
| x86-64 | ✅     | amd64-`<version tag>`   |
| arm64  | ✅     | arm64v8-`<version tag>` |
| armhf  | ✅     | arm32v7-`<version tag>` |

### 部署

docker-compose

```
---
version: "2.1"
services:
  code-server:
    image: dockerproxy.com/linuxserver/code-server:latest
    container_name: code-server
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      - PASSWORD=password #按需修改
      - HASHED_PASSWORD= #按需修改
      - SUDO_PASSWORD=password #按需修改
      - SUDO_PASSWORD_HASH= #按需修改
      - PROXY_DOMAIN=code-server.my.domain #按需修改
      - DEFAULT_WORKSPACE=/config/workspace #按需修改
    volumes:
      - /path/to/appdata/config:/config
    ports:
      - 8443:8443
    restart: unless-stopped
```

docker cli

```
docker run -d \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -e PASSWORD=password `#按需修改` \
  -e HASHED_PASSWORD= `#按需修改` \
  -e SUDO_PASSWORD=password `#按需修改` \
  -e SUDO_PASSWORD_HASH= `#按需修改` \
  -e PROXY_DOMAIN=code-server.my.domain `#按需修改` \
  -e DEFAULT_WORKSPACE=/config/workspace `#按需修改` \
  -p 8443:8443 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  dockerproxy.com/linuxserver/code-server:latest

```

## 参数

Docker镜像在使用的时候需要配置一些参数，这些参数使用 `:` 分隔，分别表示 `宿主机:容器内`。例如 `-p 8080:80` 指的是将容器内的 `80`端口映射到宿主机上的 `8080`端口，即通过宿主机网络访问的话，访问 `8080`端口即是访问容器内的 `80`端口。

### 端口（-p）

| port     | 说明    |
| -------- | ------- |
| `8443` | WEB界面 |

### 环境变量（-e）

| env                                    | 说明                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `PUID=1000`                          | 用户的 UID，详见下面的说明                                                                             |
| `PGID=1000`                          | 用户的 GID，详见下面的说明                                                                             |
| `TZ=Europe/London`                   | 设置时区，在国内的话可以使用 Asia/Shanghai                                                             |
| `PASSWORD=password`                  | Web界面的密码，如果不设置则不会启用认证                                                                |
| `SUDO_PASSWORD=password`             | 如果设置了该项，则在服务器的终端上用该密码使用sudo                                                     |
| `PROXY_DOMAIN=code-server.my.domain` | 反向代理相关的设置，[具体参阅这里](https://github.com/cdr/code-server/blob/master/doc/FAQ.md#sub-domains) |

### 卷映射（-v）

| volume      | 说明             |
| ----------- | ---------------- |
| `/config` | 配置文件所在路径 |

## 从文件加载环境变量

可以使用前缀名为 `FILE__` 的文件来加载环境变量。

例：

```
-e FILE__PASSWORD=/run/secrets/mysecretpassword
```

将把 `/run/secrets/mysecretpassword` 文件中的内容作为 `PASSWORD` 变量的值。

## UID和GID

当使用 `-v` 映射卷的时候，宿主机和容器内会出现关于权限的问题，我们的镜像可以通过指定 `PUID` 和 `GUID` 来避免此类问题。

可以使用你目前正在使用的用户的UID和GID进行设置，这样就不会存在权限问题。

可以通过如下的方式查看当前用户的UID和GID：

```SHELL
$ id $user
  uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)

```

## 安装说明

访问WEB界面：`http://ip:8443`

[![image-20210605150345025](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210605150345.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210605150345.png "image-20210605150345025")

如果要使用GitHub，把ssh密钥放在 /config/.ssh 文件夹

然后在菜单中打开终端，设置github的用户名和邮箱

```
git config --global user.name "username"
git config --global user.email "email address"
```

想换成中文，在拓展那里搜索“Chinese”,找到“简体中文”安装，重新加载页面即可。
