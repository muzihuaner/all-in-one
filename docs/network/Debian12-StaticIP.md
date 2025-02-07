# Debian 12 Linux 设置静态 IP

新安装的Debian系统，默认一般使用DHCP获取IP地址，除非在安装过程中，使用了指定的IP地址。本文将介绍如何在Debian系统中，配置使用静态IP地址，配置网关，以及设置DNS服务器。

这些配置通过修改配置文件，很容易实现。在 Redhat 系列的 Linux 环境中，我们一般修改网卡的网络配置文件，对应的文件名为 /etc/sysconfig/network-scripts/ifcfg-eXX，其中eXX即为网络设备名。网络设备的列表可以他通过 ifconfig 命令获取。同样的，在 Debian 环境下，我们只需要修改网络的配置文件便可以了。相比之下，配置过程要比 Redhat 更为方便，只需要修改 /etc/network/interfaces 文件。

**Debian 系统设置静态 IP 地址、网关**

首选备份原始的网络配置文件

```bash
cp /etc/network/interfaces  /etc/network/interfaces.bak  #备份原有配置文件
```

然后编辑interfaces

```bash
nano /etc/network/interfaces #编辑网卡配置文件
```

修改后，注意后面的地址要放在最后面

```bash
iface enp6s18 inet static
        address 192.168.1.2/24
        gateway 192.168.1.1
        # dns-* options are implemented by the resolvconf package, if installed
        dns-nameservers 119.29.29.29 223.5.5.5

iface enp6s19 inet static
        address 192.168.2.2/24
```

设置dns

```bash
cp  /etc/resolv.conf   /etc/resolv.conf.bak    #备份原有dns配置文件
nano /etc/resolv.conf   #编辑配置文件
# 加入下面2个随便一个或者全部
nameserver 8.8.8.8   #设置首选dns
nameserver 8.8.4.4   #设置备用dns
```

重启网络

```bash
service networking restart   #重启网络
```
