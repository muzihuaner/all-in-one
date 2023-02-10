---
sidebar_position: 1
---
# Pve安装教程

## 介绍

PVE，全称Proxmox Virtual Environment，是基于Debian的Linux系统，虚拟机内核为KVM。硬件兼容性优秀。界面功能不强，很多操作要靠命令行，但扩展能力几乎是无限的。

## 准备

1.U盘-需要制作启动盘
2.rufus软件-用于制作启动盘
3.pve镜像

## 资源下载


rufus-3.19.exe：[官网地址](https://rufus.ie/zh/ "官网地址")
proxmox-ve.iso: [官网地址](https://pve.proxmox.com/wiki/Main_Page "官网地址")

## pve安装

### 1.制作镜像

启动refus-3.19，选择U盘，然后选择pve的镜像，然后开始即可，注意会清空U盘的全部数据。

![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-1.png)

### 2.设置U盘启动

进入bios设置即可，有些主板默认usb优先级高的也不用设置。

### 3.安装pve

1. 选择一个硬盘格式化储存空间。
   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-2.png)
2. 设置国家地区，能联网的话会自动帮你选择。
   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-3.png)
3. 设置密码，邮箱随意。
   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-4.png)
4. 依次设置网口、主机名、ip、网关、DNS的信息，最好接入一个路由器，设置一个静态ip即可从另外一台机子浏览器访问。
   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-5.png)
5. 点击next后点击install进行安装。
6. 安装完毕重启后记得拔掉U盘。

### 4.配置PVE

以下操作需要在有互联网的环境：

1. 根据配置的ip地址访问PVE
   `https://192.168.1.201:8006/`
2. 进入pve的shell
   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-6.png)
3. PVE换国内源，加快访问速度

   ```shell
   # 直接复制如下命令进入shellwget https://mirrors.ustc.edu.cn/proxmox/debian/proxmox-release-bullseye.gpg -O /etc/apt/trusted.gpg.d/proxmox-release-bullseye.gpgecho "#deb https://enterprise.proxmox.com/debian/pve bullseye pve-enterprise" > /etc/apt/sources.list.d/pve-enterprise.listecho "deb https://mirrors.ustc.edu.cn/proxmox/debian/pve bullseye pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list   
   ```
4. 如果提示没有wget命令就先执行下方命令安装wget
   `apt install wget`
5. Debian换源

   ```shell
   mv /etc/apt/sources.list /etc/apt/sources.list.bknano /etc/apt/sources.list   
   ```
6. Sources.list加入源

   ```shell
   deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free# deb-src http://mirrors.ustc.edu.cn/debian stable main contrib non-freedeb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free# deb-src http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free# deb http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free# deb-src http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free   
   ```
7. 更新&安装ethtool

   ```shell
   apt updateapt upgrade -y   
   ```
8. 开启网卡和核显直通

   ```shell
   vim /etc/default/grub# 如果命令不存在也可用vi编辑器打开vi /etc/default/grub# 替换如下内容GRUB_CMDLINE_LINUX_DEFAULT="intel_iommu=on i915.enable_guc=3 quiet"   
   ```

   案例：

   ![](https://www.benzhu.xyz/wp-content/uploads/2022/08/pve-7.png)
