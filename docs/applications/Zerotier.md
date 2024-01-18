# Zerotier


内网穿透神器ZeroTier使用教程

随着可用的公网 IPv4 地址越来越少，现在的运营商基本不给家用宽带分配公网 IP 了。如果你想通过外网访问到内网的资源，目前只能采用内网穿透的软件来实现。而一般常规的内网穿透软件都需要一个公网 IP 才能正常工作，比如：「[FRP](https://mp.weixin.qq.com/s?__biz=MzI3MTI2NzkxMA==&mid=2247485670&idx=1&sn=df62f2df93f112a7bc0b8d7e843bbc16&chksm=eac529cfddb2a0d9b0fb22324f3eaf5cffeb8e0a56d16efb87ad97d3cca6479e96e12c68eb88&token=211998253&lang=zh_CN#rd)」 或 「[Ngork](https://mp.weixin.qq.com/s?__biz=MzI3MTI2NzkxMA==&mid=2247483754&idx=1&sn=c701d750ea87421446ec2f3202beab33&chksm=eac52043ddb2a955c282f8337d6c0fc63034f3f9e378ae1b1fcc0b53be1f20c8b4f55c159c94&token=211998253&lang=zh_CN#rd)」 等。这样你就不得不租用一个拥有公网 IP 的服务器才能实现上述需求，显然增加了不少使用成本。

做为一个 `月薪 3000` 的屌丝怎么可能折腾得起呢？今天，我们就来介绍一款不需要公网 IP 实现内网穿透的工具 `ZeroTier` 。`ZeroTier` 是一个专门用来建立点对点虚拟专用网（`P2P VPN`）的工具，它提供在线管理界面和全平台的客户端，不需要复杂设置，只要安装客户端并加入到自己创建的网络即可。

> 1. 官方网站地址：[https://www.zerotier.com](https://www.zerotier.com/)
> 2. 项目地址：[https://github.com/zerotier](https://github.com/zerotier)

## ZeroTier 原理

`ZeroTier` 这一类 `P2P VPN` 是在互联网的基础上将自己的所有设备组成一个私有的网络，可以理解为互联网连接的局域网。最常见的场景就是在公司可以用手机直接访问家里的 `NAS`，而且是点对点直连，数据传输并不经由第三方服务器中转。

`Zerotier` 在多设备之间建立了一个 `Peer to Peer VPN（P2PVPN）` 连接，如：在笔记本电脑、台式机、嵌入式设备、云资源和应用。这些设备只需要通过 `ZeroTier One` ( ZeroTier 的客户端) 在不同设备之间建立直接连接，即使它们位于 `NAT` 之后。连接到虚拟 `LAN` 的任何计算机和设备通常通过 `NAT` 或路由器设备与 `Internet` 连接，`ZeroTier One` 使用 `STUN` 和隧道来建立 `NAT` 后设备之间的 `VPN` 直连。

简单一点说，`Zerotier` 就是通过 `P2P` 等方式实现形如交换机或路由器上 `LAN` 设备的内网互联。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102229.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102229.png "img")

img

`ZeroTier` 官方搭建了一个行星根服务器叫做 `地球 Earth`，这个行星根服务器是唯一且是免费的，它记录了所有的路径信息，一般情况下大家都直接用的这个。

行星根服务器 R 记录了所有的路径信息，设备 A 能通过 `ZeroTier` 唯一地址标识找到需要连接的设备 B。这个过程如下：

1. A 想要将数据包发送到 B，但由于它没有直接路径，因此将其向上发送到 R。
2. 如果 R 有直接链接到 B，它会转发数据包给 B。否则它会继续向上游发送数据包，直到达到行星根 (planet)。行星根知道所有节点，所以如果 B 在线，最终数据包将到达 B。
3. R 还向 A 发送一个消息，包含有关它如何到达 B 的提示。同时，将消息发给 B，通知 B 它如何到达 A。
4. A 和 B 获取它们的消息并尝试相互发送测试消息，可能会对 NAT 或状态防火墙进行穿透。如果这样可以建立直接链路，则不再需要中继。
5. 如果无法建立直接路径，则通信可以继续中继 (速度慢)

除此之外还有 12 个遍布全球的根服务器，这些是收费的服务。由于 Earth 在国外，如果使用免费套餐，连接时的延迟可能会很高。不过 `ZeroTier` 能自己创建根服务器 `月球 Moons`，这样我们就能在大局域网中得到更好的体验了。

## 注册与客户端安装

### 注册帐号

登录官网注册即可，填写你的邮箱和密码。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102236.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102236.png "img")

img

注册之后是这样的，保持默认就好。每个免费套餐可以享受 100 台设备的内网互联，一般够用了。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102244.jpeg)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102244.jpeg "img")

img

### 网络配置

注册好之后，我们来建立一个 Network 并分配内网网段。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102253.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102253.png "img")

img

创建一个新的网络之后，我们会得到一个 `Network ID`。这是客户端连接到行星服务器的唯一识别码，需要牢记。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102301.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102301.png "img")

img

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102308.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102308.png "img")

img

### 客户端配置

`ZeroTier` 支持 `Windows`、`macOS`、`Linux` 三大桌面平台，`iOS`、`Android` 两大移动平台，`QNAP（威连通）`、`Synology（群晖）`、`Western Digital MyCloud NAS（西部数据）` 三个 `NAS` 平台，还支持 `OpenWrt/LEDE` 开源路由器项目。

> 下载地址：[https://www.zerotier.com/download/](https://www.zerotier.com/download/)

这里我们以 `iOS` 和 `Mac` 设备为例介绍一下客户端如何与 `Planet` 相连接并分配到内网地址。

`iOS` 下载好 `ZeroTier One` 之后，填入刚刚的 `Network ID`，配置好 `VPN` 后就会启动连接。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102317.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102317.png "img")

img

`macOS` 使用方法同理，并且可以直接使用命令行进行操作。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102324.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102324.png "img")

img

直接使用命令行进行操作的方法如下：

|

```
1
2
3
4
5
6
7
8
9
10
```

 |

```
# 启动
$ zerotier-one -d

# 获取地址和服务状态
$ zerotier-cli status

# 加入、离开、列出网络
$ zerotier-cli join # Network ID
$ zerotier-cli leave # Network ID
$ zerotier-cli listnetworks
SHELL
```

|  |  |
| - | - |

这时会根据 `MAC` 地址分配给设备一个唯一认证字符串 `Node ID`，可用来在 `Web` 配置界面保留该设备不被删除以及帮助我们区分设备。

### 认证设备和组网

回到一开始注册的网页，会发现设备列表当中新增了两台设备，在前面的方框打钩即可。根据 `Node ID` 判断设备的类型，牢记设备被分配的 `IP` 。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102332.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102332.png "img")

img

### 测试设备间互访

为了测试不同网络访问：`MBP` 连接电信网络，`iPhone` 连接移动 `4G` 网络。

[![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102340.png)](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210922102340.png "img")

img

从图中我们可以看到已经成功连接上了 `Mac` 的 `SSH`。由于免费的根服务器在国外，可能访问速度不太稳定。

> 除非你有两台路由器，一台放在家里，另一台放在公司等地，并且有大量设备连接于这两台路由器且需要内网穿透，否则不要在路由器上面部署 `ZeroTier`，仅使用单设备客户端即可。并且为了连接的稳定性，强烈建议自己部署 `Moon` 节点。

## 延伸阅读

上面的示例中，我们只介绍了 `ZeroTier` 的基本使用。`ZeroTier` 的功能远不止这些，如果你非常感兴趣还可以参考下面这些文档：

> 1. Openwrt 使用 ZeroTier 实现内网穿透
>
> 链接：[https://qingsay.com/zerotier-openwrt.html](https://qingsay.com/zerotier-openwrt.html)
>
> 1. 无公网 IP 搞定群晖 + ZEROTIER ONE 实现内网穿透
>
> 链接 1：[https://www.hao4k.cn/thread-29377-1-1.html](https://www.hao4k.cn/thread-29377-1-1.html)
>
> 链接 2：[https://zhuanlan.zhihu.com/p/73558450](https://zhuanlan.zhihu.com/p/73558450)
>
> 1. 使用 ZeroTier 建立 IPv6 隧道
>
> 链接：[https://moe.best/tutorial/zerotier-ipv6.html](https://moe.best/tutorial/zerotier-ipv6.html)
>
> 1. 在容器中不依赖 TUN/TAP 使用 ZeroTier 实现 P2P VPN
>
> 链接：[http://www.senra.me/nat-traversal-series-zerotier-p2p-vpn-can-be-used-in-container-without-tuntap/](http://www.senra.me/nat-traversal-series-zerotier-p2p-vpn-can-be-used-in-container-without-tuntap/)
>
> 1. Zerotier 简明教程
>
> 链接：[https://jiajunhuang.com/articles/2019_09_11-zerotier.md.html](https://jiajunhuang.com/articles/2019_09_11-zerotier.md.html)
>
> 1. 使用 Docker 创建 ZeroTier Moon 节点
>
> 链接：[https://www.cnblogs.com/webenh/p/11263421.html](https://www.cnblogs.com/webenh/p/11263421.html)
>
> 1. Zerotier 2.0 的愿景图
>
> 链接：[https://www.zealic.com/2019/10/zerotier2/](https://www.zealic.com/2019/10/zerotier2/)

## 总结

从上面的介绍，我们可以看到 `ZeroTier` 在使用上非常简单、也支持多设备多平台，并且可以无需公网服务器。但由于其免费的根服务器在国外，可能网速会一定影响，建议自建私有根服务器。

## 参考文档

1. [https://www.google.com](https://www.google.com/)
2. [https://zhih.me/zerotier-getting-started/](https://zhih.me/zerotier-getting-started/)
3. [https://www.newlearner.site/2019/07/30/zerotier.html](https://www.newlearner.site/2019/07/30/zerotier.html)
