# MC服务器

**服务端**

* 新建一个 Linux的虚拟机，系统最好是Ubuntu或者Debian
* 内存最好大一点，建议至少4G
* 使用 `docker`进行部署，方便管理。
* 使用 Frp或者公网IP进行分发
* 基友通过局域网访问本机端口加入游戏。

**客户端**

* 客户端使用 `HMCL`安装游戏。
* 安装 `Optifine`来使用光影。

网络结构图

至于为什么不直接在自己的 windows 里用 `docker`部署 mc。是因为我觉得这样部署了之后以后想上云会比较简单，而且直接在 windows 里用 docker 的话也会启动一个轻量级 `linux`虚拟机，感觉还是自己建虚拟机用起来更舒服。ok，接下来就开始动手。

# 服务端部署

首先安装Docker环境，这里就不说了，可以看前面

## 安装 mc 服务器

基础准备好了之后我们就可以开始安装 `mc`的服务端了，得益于 `docker`的高封装性。我们可以直接下载一个可用的完整服务器。这里用的服务器镜像是 [itzg/minecraft-server](https://links.jianshu.com/go?to=https%3A%2F%2Fhub.docker.com%2Fr%2Fitzg%2Fminecraft-server%2F) ，这个是目前下载次数最高的 mc 镜像，可以任意指定游戏版本。输入以下命令来 **下载镜像** 并  **新建一个文件夹用于保存 mc 服务器文件** ：

```
# 拉取镜像
docker pull itzg/minecraft-server
# 新建游戏保存文件夹
mkdir /root/mc-server
```

等待下载完成之后输入以下命令来运行服务器：

```
docker run -d \
-p 25565:25565 \
-e EULA=TRUE \
-e VERSION=1.19.3 \
-v /root/mc-server:/data \
--restart always \
--name mc itzg/minecraft-server
```

解释一下参数的意思：

| 参数                         | 含义                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| `-d`                       | 后台运行容器                                                                               |
| `-p 25565:25565`           | 将容器的 `25565`端口(`:`后)映射到主机的 `25565`端口(`:`前)                         |
| `-e EULA=TRUE`             | 同意 `EULA`协议                                                                          |
| `-e VERSION=1.19.3`        | 指定服务器的版本(最好和你要玩的游戏版本一致，<br />当然也可以去掉这一项，下载最新版本的。) |
| `-v /root/mc-server:/data` | 将主机的 `/root/mc-server`目录挂载到容器的 `/data`目录                                 |
| `--restart always`         | 容器一旦停止立刻重启                                                                       |
| `--name mc`                | 指定容器名为 `mc`                                                                        |

然后使用如下命令即可查看 mc 服务器的状态

```
docker ps
```

可以看到后面的 `STATUS`状态表明服务器正在启动 `(health: starting)`，第一次启动可能会久一点（要下载服务器软件包），待其变为 `(healthy)`时即代表服务器启动成功。

```
CONTAINER ID    IMAGE                    COMMAND     CREATED           STATUS                            PORTS                                 NAMES
eb0a7ef02dca    itzg/minecraft-server    "/start"    5 seconds ago     Up 3 seconds (health: starting)   0.0.0.0:25565->25565/tcp, 25575/tcp   mc
```

这时候再访问 `/home/mc-server`文件夹就发现，里边已经是一个完整的 mc 服务器包了。编辑其中的 `server.properties`即可修改服务器的配置。具体配置项含义请参考 [MC中文wiki - server.properties](https://links.jianshu.com/go?to=https%3A%2F%2Fminecraft-zh.gamepedia.com%2Findex.php%3Ftitle%3DServer.properties%26variant%3Dzh) 。修改完成后 `:wq`保存，然后执行如下命令即可重启服务器应用修改：

```
docker restart mc
```

至此服务端已经搭建好了，但是现在游戏服务只开放在虚拟机的 `25565`端口上，

我们打开 mc 访问 `ip:25565`就可以连上服务器了。接下来来安装 mc 客户端。

# 安装 mc 客户端

这里要下载如下四个东西：

| 软件               | 作用                                  | 下载地址                                         |
| ------------------ | ------------------------------------- | ------------------------------------------------ |
| java               | 运行 HMCL 启动器及 mc                 | [下载](https://www.java.com/zh_CN/)                 |
| HMCL 启动器        | 下载并管理游戏本体                    | [下载](http://hmcl.huangyuhui.net/download#)        |
| optifine（非必须） | 光影的前置插件                        | [下载](https://optifine.net/downloads)              |
| 光影包（非必须）   | 我用的是 `Slidur's Shaders`这个随意 | [下载](http://www.mcbbs.net/thread-860071-1-1.html) |

`java`的安装非常简单这里也不说了，一路确定下来就行。然后启动 `HMCL`，点击  **游戏列表 > 安装新游戏版本 > 选择自己想玩的版本** ，我这里是 `1.19.3`。等待下载完成后会自动安装，等提示安装成功后即可。


## 安装光影

要想使用光影的话就要先安装前置插件 `optifine`。点此 [OptiFine - Download](https://optifine.net/downloads) 下载 `optifine`，注意选择对应版本。注意，点击下载会先跳转到一个广告页面，注意规避。这里我使用 `HMCL`安装 `optifine`时虽然可以安装成功，但是启动游戏时会报错，所以只得手动下载安装。

下载完成后应该是一个名如 `OptiFine_1.14.3_HD_U_F1.jar`的文件。 **直接运行，在打开的窗口中选择你游戏安装的 `.minecraft`目录点击 `Install`即可。** 一会后会弹出安装成功。

安装 optifine

安装好了之后打开 `.minecraft\shaderpacks`文件夹，将你下载好的光影包放进去即可。如果你没有这个文件夹的话可以新建一个，或者启动游戏，依次点击 **选项 > 视频设置 > 光影 > 光影包文件夹** 也可以打开。**记得在启动器里选择 `optifine`版本的 mc。它默认是启动原版的。**安装了optifine的mc

然后启动游戏选择光影包即可。

# 加入游戏

因为虚拟机就跑在我的工控机上，所以我直接用 `ip:25565`就可以连接服务器，然后在路由器获取我电脑的局域网 ip。然后交给基友，就可以愉快的开黑啦。

# 问题解决

 **unknow host** ：如果显示未知主机的话检查你的 `:`是不是用的中文冒号。

 **连接超时** ：一共需要做两次端口转发，**`docker`转发到虚拟机** 和  **虚拟机转发到本地主机** 。确保都做好了。

 **服务器状态显示旧版** ：刷新几次就好了，或者直接连.

**登入失败:无效会话(请尝试重启游戏及启动器)：**

原因很简单：你并没有用Minecraft的正版账号登录。解决方法很简单：正版账号登录游戏或服务器关闭正版账号验证：
在Minecraft server的目录下。终端输入：

```
vim server.properties
```

将**online-mode:true**的true改为false，然后保存退出。然后重启一下容器。

## 如何替换服务器上地图存档

如何替换服务器上的地图存档为自己本地的地图存档呢？其实很简单，将本地Minecraft的 `.minecraft`内的 `saves`内的地图文件，重命名为 `world`，并上传到Minecraft目录内，替换掉原本的 `world`文件并重启Minecraft服务器即可。

你也可以直接上传到Minecraft根目录，然后修改 `server.properties`内 `level-name`字段后的 `world`为你上次的存档文件夹。

# 参考

* [dockerhub - itzg/minecraft-server](https://links.jianshu.com/go?to=https%3A%2F%2Fhub.docker.com%2Fr%2Fitzg%2Fminecraft-server%2F)
* [使用 Docker 部署 Minecraft Server](https://links.jianshu.com/go?to=https%3A%2F%2Ftrafficmgr.net%2F2019%2F02%2F01%2Fdocker-minecraft%2F%23%25E5%25BC%2580%25E7%25AE%25B1%25E5%258D%25B3%25E7%2594%25A8)
* [在Ubuntu中用docker部署MC原版服务器](https://www.jianshu.com/p/5eefebb53929)
* [搭建Minecraft服务器(需个人服务器) _](https://www.mintimate.cn/2019/06/21/Minecraft%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E9%98%B6/)
