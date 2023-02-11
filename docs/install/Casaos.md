# CasaOS安装教程

CasaOS是一个基于Docker生态系统的开源家庭云系统，专为家庭场景而设计。致力于打造全球最简单、最易用、最优雅的家居云系统。

![](https://casaos.io/images/macbook@2x_95e9feca.png)

    支持一键安装各类 NAS / 家庭智能应用，可快速在本地搭建与托管电影、音乐、游戏等家庭娱乐服务。CasaOS 里面的主要功能实现是通过 docker 应用，里面已经集成一些常用应用的 docker。

官方网站:[https://casaos.io/](https://casaos.io/)

项目地址:[https://github.com/IceWhaleTech/CasaOS](https://github.com/IceWhaleTech/CasaOS)

## 安装

打开SSH工具输入

```bash
wget -qO- https://get.casaos.io | bash
```

或者

```bash
curl -fsSL https://get.casaos.io | bash
```

## 系统架构兼容性

* amd64 / x86-64
* arm64
* armv7

## 系统兼容性

官方支持

* Debian 11 (✅ 测试通过，推荐)
* Ubuntu Server 20.04 (✅ 测试通过)
* Raspberry Pi OS (✅ 测试通过)

社区支持

* Elementary 6.1 (✅ 测试通过）
* Armbian 22.04 (✅ 测试通过)
* Alpine (🚧 尚未完全测试）
* OpenWrt (🚧 尚未完全测试）

## 卸载 CasaOS

v0.3.3 及以上版本

```shell
casaos-uninstall
```

 v0.3.3之前的版本

```shell
curl -fsSL https://get.icewhale.io/casaos-uninstall.sh | sudo bash
```
