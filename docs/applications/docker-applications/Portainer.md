# Portainer

Portainer是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作(包括上传下载镜像，创建容器等操作)、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面。


**项目地址：[https://github.com/portainer/portainer](https://github.com/portainer/portainer)**

### 2.1 下载与安装

```bash

//docker拉取镜像
docker pull portainer/portainer-ce:latest
```

### 2.2 启动运行

单机运行模式，直接运行在当前宿主机。并分配9000端口.

```
docker volume create portainer_data

docker run -d --name portainer -p 9000:9000 --restart=always \
     -v /var/run/docker.sock:/var/run/docker.sock \
     -v portainer_data:/data  portainer/portainer-ce
```

### 2.3 打开管理工具

宿主主机IP+9000端口开启

### 2.4 首次登陆需要注册用户，给admin用户设置密码

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131025204-536015520.jpg)

### 2.5 连接到本地

单机版这里选择local即可，选择完毕，点击Connect即可连接到本地docker：

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131032366-823671350.png)

### 2.6 对镜像的管理

可对本地的镜像列表做方便的增删改查。在镜像列表可以直接从DockerHub, pull一个镜像，可以从远程pull，也可以从私有库中pull。从私有库中pull，需要将私有库的地址提前进行配置(Registries)。

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131038504-75142072.jpg)

### 2.7 私有镜像仓库管理

可以设置对gitlab或者私有镜像仓库的链接设置

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131046854-270447165.jpg)

### 2.8 对容器的管理

#### 2.8.1 创建容器

单击左侧的“App Templates”按钮。这将显示一些现成的可用模板，例如Nginx，Httpd，MySQl，WordPress等。选择要部署的容器，只需单击相应的模板。

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131053258-38547017.jpg)

#### 2.8.2 容器管理

在此界面可以对所有容器进行增删改查操作，并且可以对单个容器或者批量容器进行重启，开始，停止，关闭等操作。

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131101976-721867479.jpg)

#### 2.8.3 对某容器进行业务操作

对某容器日志查看，命令行输入，状态查看等

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131108520-1561694222.jpg)

##### 2.8.3.1 日志查看

portainer会自动提取日志文件，可对某日志截取最后行数，并且实时打印日志

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131118444-601649670.jpg)

很人性化的一个功能是能对日志进行搜索

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131124054-910277949.jpg)

##### 2.8.3.2 对容器资源使用统计

对容器应用的CPU使用，内存使用以及网络使用情况进行统计

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131131116-1142586838.jpg)

##### 2.8.3.3 命令窗口使用

最方便的就是不用再登录linux，直接基于浏览器就能登录任一容器内部的命令行做配置等其他操作。

![](https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131137604-377887786.jpg)
