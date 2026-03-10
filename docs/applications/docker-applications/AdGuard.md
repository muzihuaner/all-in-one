# AdGuardHome

AdGuard DNS 是市场上最注重隐私的 DNS 服务之一。 它支持如此可靠的加密协议，例如 DNS-over-HTTPS，DNS-over-TLS和DNS-over-Quic。 它可以在无过滤模式下作为常规DNS 解析器工作，也可以提供 DNS 级别的内容过滤：识别指向广告，跟踪器和/或成人内容的域名（可选），并以空响应回复。 AdGuard 拥有自己的数据库，经常更新提供广告、跟踪器和欺诈服务的网域名称。

![AdGuard DNS 的大致工作原理](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

大约 75% 的 AdGuard DNS 流量被加密。 这实际上就是内容屏蔽 DNS 服务器与其他服务器的区别。 如果查看一下 CloudFlare 或 Quad9 的统计数据，您就会发现加密 DNS 只占所有查询的一小部分。

AdGuard DNS 存在两种主要的形式：[公共 AdGuard DNS](https://adguard-dns.io/kb/zh-CN/public-dns/overview/)，以及[私有 AdGuard DNS](https://adguard-dns.io/kb/zh-CN/private-dns/overview/)。 这些服务都不需要安装应用程序。 它们易于设置和使用，可为用户提供阻止广告、跟踪器、恶意网站和成人内容（如需要）所需的最低限度功能。 而且它们对可用的设备类型没有任何限制。

尽管他们有许多相似之处，私有 AdGuard DNS 服务和公共 AdGuard DNS 服务是两种不同的产品。 它们的主要区别在于用户可以自定义私有 AdGuard DNS，而公共 AdGuard DNS 则不能。

## AdGuard 产品中的 DNS 过滤模块

AdGuard 的所有主要服务，包括 AdGuard VPN，都有 **DNS 过滤模块**，用户可以选择自己信任的供应商提供的 DNS 服务器。 当然，AdGuard DNS 默认、AdGuard DNS 无过滤和 AdGuard DNS 家庭保护都在列表中。 此外，AdGuard 应用程序允许用户[简单轻松配置和使用 AdGuard DNS](https://adguard-dns.io/public-dns.html)，无论是公共还是私有的。

官方网站：

https://adguard-dns.io/kb/zh-CN/

安装与配置

[https://sspai.com/post/63088](https://sspai.com/post/63088)


Docker CLI

```
docker run --name adguardhome\
    --restart unless-stopped\
    -v /my/own/workdir:/opt/adguardhome/work\
    -v /my/own/confdir:/opt/adguardhome/conf\
    -p 53:53/tcp -p 53:53/udp\
    -p 67:67/udp -p 68:68/udp\
    -p 80:80/tcp -p 443:443/tcp -p 443:443/udp -p 3000:3000/tcp\
    -p 853:853/tcp\
    -p 784:784/udp -p 853:853/udp -p 8853:8853/udp\
    -p 5443:5443/tcp -p 5443:5443/udp\
    -d adguard/adguardhome

```

Docker Compose

```
services:
  adguardhome:
    image: adguard/adguardhome
    container_name: adguardhome
    restart: unless-stopped
    # 卷挂载：请确保将左侧路径更改为你的实际物理路径
    volumes:
      - /my/own/workdir:/opt/adguardhome/work
      - /my/own/confdir:/opt/adguardhome/conf
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "67:67/udp"
      - "68:68/udp"
      - "80:80/tcp"
      - "443:443/tcp"
      - "443:443/udp"
      - "3000:3000/tcp"
      - "853:853/tcp"
      - "784:784/udp"
      - "853:853/udp"
      - "8853:8853/udp"
      - "5443:5443/tcp"
      - "5443:5443/udp"
```

