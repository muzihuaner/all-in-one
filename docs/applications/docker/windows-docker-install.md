---
sidebar_position: 3
---
# Windows Docker 安装

Docker 并非是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境。

Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机。

因此，Docker 必须部署在 Linux 内核的系统上。如果其他系统想部署 Docker 就必须安装一个虚拟 Linux 环境。

![](https://www.runoob.com/wp-content/uploads/2016/05/CV09QJMI2fb7L2k0.png)

在 Windows 上部署 Docker 的方法都是先安装一个虚拟机，并在安装 Linux 系统的的虚拟机中运行 Docker。

## Windows 系统

Docker Desktop 是 Docker 在 Windows 操作系统上的官方安装方式，这个方法依然属于先在虚拟机中安装 Linux 然后再安装 Docker 的方法。

Docker Desktop 官方下载地址： [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)

 **注意：** 此方法仅适用于 Windows 10 操作系统专业版、企业版、教育版和部分家庭版！

### 安装 Hyper-V

Hyper-V 是微软开发的虚拟机，类似于 VMWare 或 VirtualBox，仅适用于 Windows 10。这是 Docker Desktop for Windows 所使用的虚拟机。

但是，这个虚拟机一旦启用，QEMU、VirtualBox 或 VMWare Workstation 15 及以下版本将无法使用！如果你必须在电脑上使用其他虚拟机（例如开发 Android 应用必须使用的模拟器），请不要使用 Hyper-V！

### 开启 Hyper-V

![](https://www.runoob.com/wp-content/uploads/2017/12/1513668234-4363-20171206211136409-1609350099.png)

程序和功能

![](https://www.runoob.com/wp-content/uploads/2017/12/1513668234-4368-20171206211345066-1430601107.png)

启用或关闭Windows功能

![](https://www.runoob.com/wp-content/uploads/2017/12/1513668234-9748-20171206211435534-1499766232.png)

选中Hyper-V![](https://www.runoob.com/wp-content/uploads/2017/12/1513668234-6433-20171206211858191-1177002365.png)

也可以通过命令来启用 Hyper-V ，请右键开始菜单并以管理员身份运行 PowerShell，执行以下命令：

```
Enable-WindowsOptionalFeature-Online-FeatureNameMicrosoft-Hyper-V -All
```

### 安装 Docker Desktop for Windows

点击 [Get started with Docker Desktop](https://hub.docker.com/?overlay=onboarding)，并下载 Windows 的版本，如果你还没有登录，会要求注册登录：

![](https://www.runoob.com/wp-content/uploads/2016/05/5AEB69DA-6912-4B08-BE79-293FBE659894.png)

### 运行安装文件

双击下载的 Docker for Windows Installer 安装文件，一路 Next，点击 Finish 完成安装。

![](https://www.runoob.com/wp-content/uploads/2017/12/1513669129-6146-20171206214940331-1428569749.png)

![](https://www.runoob.com/wp-content/uploads/2017/12/1513668903-9668-20171206220321613-1349447293.png)

安装完成后，Docker 会自动启动。通知栏上会出现个小鲸鱼的图标![](https://www.runoob.com/wp-content/uploads/2017/12/1513582421-4552-whale-x-win.png)，这表示 Docker 正在运行。

桌边也会出现三个图标，如下图所示：

我们可以在命令行执行 docker version 来查看版本号，docker run hello-world 来载入测试镜像测试。

如果没启动，你可以在 Windows 搜索 Docker 来启动：

![](https://www.runoob.com/wp-content/uploads/2017/12/1513585082-6751-docker-app-search.png)

启动后，也可以在通知栏上看到小鲸鱼图标：

![](https://www.runoob.com/wp-content/uploads/2017/12/1513585123-3777-whale-taskbar-circle.png)

> 如果启动中遇到因 WSL 2 导致地错误，请安装 [WSL 2](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)。

安装之后，可以打开 PowerShell 并运行以下命令检测是否运行成功：

```
docker run hello-world
```

在成功运行之后应该会出现以下信息：

![](https://www.runoob.com/wp-content/uploads/2016/05/EmkOezweLQVIwA1T__original.png)

---

## win7、win8 系统

win7、win8 等需要利用 docker toolbox 来安装，国内可以使用阿里云的镜像来下载，下载地址：[http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/](http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/)

安装比较简单，双击运行，点下一步即可，可以勾选自己需要的组件：

![](https://www.runoob.com/wp-content/uploads/2016/05/691999-20180512142142130-1831870973.png)

docker toolbox 是一个工具集，它主要包含以下一些内容：

* Docker CLI - 客户端，用来运行 docker 引擎创建镜像和容器。
* Docker Machine - 可以让你在 Windows 的命令行中运行 docker 引擎命令。
* Docker Compose - 用来运行 docker-compose 命令。
* Kitematic - 这是 Docker 的 GUI 版本。
* Docker QuickStart shell - 这是一个已经配置好Docker的命令行环境。
* Oracle VM Virtualbox - 虚拟机。

下载完成之后直接点击安装，安装成功后，桌边会出现三个图标，如下图所示：

![](https://www.runoob.com/wp-content/uploads/2017/12/icon-set.png)

点击 Docker QuickStart 图标来启动 Docker Toolbox 终端。

如果系统显示 User Account Control 窗口来运行 VirtualBox 修改你的电脑，选择 Yes。

![](https://www.runoob.com/wp-content/uploads/2017/12/1513667960-3359-b2d-shell.png)

**$** 符号那里可以输入以下命令来执行。

```
$ docker run hello-world
 Unable to find image 'hello-world:latest' locally
 Pulling repository hello-world
 91c95931e552:Download complete
 a8219747be10:Download complete
 Status:Downloaded newer image for hello-world:latest
 HellofromDocker.
 This message shows that your installation appears to be working correctly.

 To generate this message,Docker took the following steps:
  1.TheDockerEngine CLI client contacted the DockerEngine daemon.
  2.TheDockerEngine daemon pulled the "hello-world" image from the DockerHub.
     (Assuming it was not already locally available.)
  3.TheDockerEngine daemon created a new container from that image which runs the
     executable that produces the output you are currently reading.
  4.TheDockerEngine daemon streamed that output to the DockerEngine CLI client, which sent it
     to your terminal.

 Totry something more ambitious, you can run an Ubuntu container with:
  $ docker run -it ubuntu bash

 For more examples and ideas, visit:
  https://docs.docker.com/userguide/
```
