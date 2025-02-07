# MC服务器

MCSManager 是一款开源，分布式，一键部署，支持 `Minecraft` 和 `Steam 游戏服务器` 的控制面板。

MCSManager 在 `Minecraft` 和 `其他游戏` 社区内中已有一定的流行程度，它可以帮助你集中管理多个物理服务器，动态在任何主机上创建游戏服务端，并且提供安全可靠的多用户权限系统，可以很轻松的帮助你管理多个服务器。

## [Linux 自动安装](https://docs.mcsmanager.com/zh_cn/#linux-自动安装)

因为需要注册到系统服务，一键安装脚本**必须使用 root 权限**运行。

bash

```
sudo su -c "wget -qO- https://script.mcsmanager.com/setup_cn.sh | bash"
```

### [启动方式](https://docs.mcsmanager.com/zh_cn/#启动方式)

bash

```
# 先启动面板守护进程。
# 这是用于进程控制，终端管理的服务进程。
systemctl start mcsm-daemon.service
# 再启动面板 Web 服务。
# 这是用来实现支持网页访问和用户管理的服务。
systemctl start mcsm-web.service

# 重启面板命令
systemctl restart mcsm-daemon.service
systemctl restart mcsm-web.service

# 停止面板命令
systemctl stop mcsm-web.service
systemctl stop mcsm-daemon.service
```

TIP

如果 `systemctl` 命令**无法启动**面板，可以参考下文的 `手动安装` 中的 `启动方式` 来启动 MCSManager。 但这需要你用其他后台运行程序来接管它，否则当你的 `SSH` 终端断开之时，手动启动的 MCSManager 面板也会随之被系统强制结束。

面板 Web 服务是提供用户管理与网页访问功能的服务，守护进程是提供进程管理和容器管理的服务，两者缺一不可。如果某个功能不正常，可以只重启这一部分的服务来热修复问题。

## [Linux 手动安装](https://docs.mcsmanager.com/zh_cn/#linux-手动安装)

bash

```
# 切换到安装目录，你也可以换成其他的目录。
cd /opt/

# 下载 NodeJS 运行时环境，如果你已经安装了 NodeJS，请忽略此步骤。
wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz
tar -xvf node-v20.11.0-linux-x64.tar.xz

# 添加 NodeJS 到系统环境变量
ln -s /opt/node-v20.11.0-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v20.11.0-linux-x64/bin/npm /usr/bin/npm

# 进入你的安装目录
mkdir /opt/mcsmanager/
cd /opt/mcsmanager/

# 下载 MCSManager（如果无法下载可以先科学上网下载再上传到服务器）
wget https://github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz

# 解压到安装目录
tar -zxf mcsmanager_linux_release.tar.gz
```

### [启动方式](https://docs.mcsmanager.com/zh_cn/#启动方式-1)

```
# 安装依赖库
./install.sh

# 请使用 Screen 程序打开两个终端窗口（或者其他接管程序）

# 先启动节点程序
./start-daemon.sh

# 在第二个终端启动 Web 面板服务
./start-web.sh

# 为网络界面访问 http://localhost:23333/
# 一般来说，网络应用会自动扫描并连接到本地守护进程。
# 默认需要开放的端口：23333 和 24444
```

### [关闭面板](https://docs.mcsmanager.com/zh_cn/#关闭面板)

只需分别进入两个终端执行 `Ctrl+C` 即可。

## [Windows 安装](https://docs.mcsmanager.com/zh_cn/#windows-安装)

仅需点击[官网](https://mcsmanager.com/)首页的下载按钮即可，解压后即可运行，无任何安装依赖，不污染注册表。

### [启动方式](https://docs.mcsmanager.com/zh_cn/#启动方式-2)

执行 `start.bat` 或 `运行.bat` 等，如果压缩包内部含有 `启动器.exe`，则可使用它来启动面板。

### [如何关闭？](https://docs.mcsmanager.com/zh_cn/#如何关闭)

在面板两个终端控制台窗口输入 `Ctrl+C` 即可正常关闭。
