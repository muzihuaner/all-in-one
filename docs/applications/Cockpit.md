# Cockpit

Cockpit 是 RedHat 维护的 Linux 服务器面板工具。它具备很强的开放能力，可以集成各种应用到面板的菜单上，如果善于使用它，你会发现它就是容器时代最好的面板之一。

官方网站：

[http://cockpit-project.org/](http://cockpit-project.org/)

### CentOS

Cockpit 支持 CentOS 7以及之后的版本:

1. 安装cockpit:
   ```
   sudo yum install cockpit
   ```
2. 启动 cockpit:
   ```
   sudo systemctl enable --now cockpit.socket
   ```
3. 打开防火墙（非必须）:
   ```
   sudo firewall-cmd --permanent --zone=public --add-service=cockpit
   sudo firewall-cmd --reload
   ```

### Debian

这些命令需要像 `bash` 这样的 POSIX 兼容 shell。对于 `fish` 等其他 shell，暂时运行 `bash -i`。

从版本 10 (Buster) 开始，Cockpit 在 Debian 中可用。

1. 要获取最新版本，我们建议启用 [backports 存储库](https://backports.debian.org/)（以 root 身份）：
   ```
   . /etc/os-release
   echo "deb http://deb.debian.org/debian ${VERSION_CODENAME}-backports main" > \
       /etc/apt/sources.list.d/backports.list
   apt update
   ```
2. 安装或者更新安装包:
   ```
   apt install -t ${VERSION_CODENAME}-backports cockpit
   ```

更新与 Cockpit 相关的包和任何依赖项时，请确保使用上面的“-t ...-backports”，以便包含反向端口。

### Ubuntu

这些命令需要像 `bash` 这样的 POSIX 兼容 shell。对于 `fish` 等其他 shell，暂时运行 `bash -i`。

Cockpit 在 Ubuntu 17.04 及更高版本中可用，[作为官方 backport](https://help.ubuntu.com/community/UbuntuBackports) 适用于 16.04 LTS 及更高版本。

我们建议从 backports 安装或更新最新版本。默认情况下启用此存储库，但如果您自定义了 apt 源，则可能需要[手动启用它们](https://help.ubuntu.com/community/UbuntuBackports#Enabling_Backports)

```
. /etc/os-release
sudo apt install -t ${VERSION_CODENAME}-backports cockpit
```

在 Linux Mint 上，使用 `UBUNTU_CODENAME` 而不是 `VERSION_CODENAME` ，如下所示：

```
sudo apt install -t ${UBUNTU_CODENAME}-backports cockpit
```

更新与 Cockpit 相关的包和任何依赖项时，请确保使用上面的“-t ...-backports”，以便包含反向端口。
