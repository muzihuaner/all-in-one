---
sidebar_position: 2
---
# 简介

## 什么是All in One？

All in One是一种集成计算机，它将显示器、主机和键盘组合在一起，构成一个整体。它的优势在于可以减少电脑的体积，使用更加方便，而且价格也比传统台式电脑要低得多。

——来自Chatgpt

**一体机** （英语：All-in-One PC，简称“AIO”）是一种把机箱（包括内部的微处理器、主机板、CD等组件）、喇叭、摄像头及显示器等整合为一体的桌上型电脑。

——来自维基百科

All in one是什么呢？从英文直译为“多合一”，所谓的All in one就是将若干个设备的特殊功能赋予一个高性能设备，功能可以同时工作，可以单独控制。

一般情况使用x86架构的设备作为硬件平台（当然也有ARM架构），**虚拟机系统**来做底层系统，将常见的**特定功能系统**如软路由、NAS、HTPC(家庭影院电脑)等安装到同一台物理机中，并且 **同时运行** 。在提高资源利用率，也提供了不少的可玩性。

——来自某网友

![1676009278056](image/whatisallinone/1676009278056.png)

## 底层虚拟机系统选择

### 虚拟机两种模式

虚拟机有两种模式Type1和Type2，Type 1在裸机上运行，而Type 2在操作系统上运行。

Type2即我们平常使用的VMware Workstation Pro（VM虚拟机）、VirtualBox之类运行在Windows系统之上的软件，软件通过Windows API调用，相比Type1模式对有额外损耗，并且有一些功能也无法实现。目前对底层虚拟机系统的必须的要求是：支持硬件直通，这是Type2所不具有的功能。比如显卡、网卡，需要直接直通给某虚拟机独占使用，因为不支持硬件直通会而外消耗CPU性能。

常用的可以实现all in one的虚拟机系统中方案中有PVE、ESXi、Windows Server + Hyper-v等

> 这里只是大概的描述而已，仅供参考，因为评定标准有很多，所以不一定准确

| **方案**    | **虚拟机损耗** | **待机消耗** | **上手难度** | **优点**                           | 缺点 |
| ----------------- | -------------------- | ------------------ | ------------------ | ---------------------------------------- | ---- |
| PVE               | 5%~10%               | 低                 | 10天               | 硬件兼容性好、支持虚拟机核显直通视频输出 | 待定 |
| ESXI              | 几乎无损耗           | 低                 | 3天                | 稳定、虚拟能效最好                       | 待定 |
| WinServer+Hyper-v |                      | 较高               | 1天                | 自带Windows桌面以及软件生态              | 待定 |

### PVE（Proxmox VE）

PVE使用Debian系统作为底层，可以安装Debian所支持的软件，免费开源，可玩性很高，甚至可以安装桌面。

> 可以这样理解：PVE=Debian+PVE管理工具

使用Linux中的KVM技术做虚拟化，对新硬件的兼容性极好，虚拟出来的性能大约是物理直接安装系统80%~90%。

* 注意事项：上手难度较大，需要有一定的Linux基础，当然如果是有需要学习。
* 推荐安装版本：其实版本区别不大，推荐安装7.0即以上版本，因为7.0后使用debian11为内核，旧版本可能教程不适用了。

> PVE官网下载：[Get the free Proxmox VE ISO installer](https://www.proxmox.com/en/downloads/category/iso-images-pve)

![1676010554123](image/whatisallinone/1676010554123.png "图.PVE的web控制面板")

### ESXI

ESXI为就是和VMWare公司开发的商业软件，使用自研的esxi作为虚拟化核心，面向的服务器硬件，对家用的网卡等基本上都需要自己打包驱动（当然也可以下载大佬们现成打包好的）。

* 很容易上手，而且虚拟机损耗很低，稳定性好。

![1676010802337](image/whatisallinone/1676010802337.png "图.ESXI的web控制面板")


### Windows Server + Hyper-V

Hyper-v是Windows系统下自带的个虚拟机应用。建议使用Windows Server或企业多会话版，此版本下Hyper-v是**支持PCIe设备直通到虚拟机**的。

Windows Server入门就更简单了，如果你本身就有Windows的使用需求，还可以可以省一个虚拟机，但是如果你不需要Windows图形化界面会比esxi和pve方案更浪费性能，而且也没有esxi、pve那样的虚拟机Web监控管理面板（Windows Admin Center体验很一般）。

* 适合本就需要安装Windows环境

> 微软官网的介绍：[Hyper-V 技术概述 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/virtualization/hyper-v/hyper-v-technology-overview)
>

![1676010915709](image/whatisallinone/1676010915709.png "图.Windows下的Hyper-V管理器")


## 特定功能的系统

软路由：

* OpenWRT、RouterOS、IKUAI
* 在提供最基础的网络的路由交换功能以及NAT、DHCP等服务，还可以实现终端监控控制等高级的功能，一般情况需要**网卡直通**到软路由虚拟机，避免使用虚拟网卡额外消耗CPU。

NAS：

* 群晖DSM、TrueNAS
* 对于多硬盘的设备，使用NAS系统来管理，可以直接 **直通SATA控制器或硬盘** 。其实文件共享如果需求不高也可以使用一些简单的FTP、SMB、WEBDEV之类的协议。

电视盒子（HTPC家庭影音类）：

* Windows、AndroidTV
* 核显设备通常比较难利用上板载的视频、音频接口，在esxi上是不可以，部分设备和主板是支持使用vbios在pve上通过直通核显。依据网友的实战经验，可以购买带有HDMI接口USB HUB，直通板载这个HUB实现音视频输出。也可以直接安装Windows Server，直接就是自带了图像界面，或者给PVE安装上桌面环境，做简单的网页浏览。


## 设备介绍

CPU要求支持虚拟化，对应到现在AMD和Intel即分别支持AMD-V、VT-X技术。不过现在CPU基本上都支持，有一些需要去bios中开启虚拟化选项。

内存需求看需求，直通硬件会需要预留额外的内存，但是还是建议多多益善，建议8G。


未完待续
