# RustDesk

RustDesk 服务端下载：https://github.com/rustdesk/rustdesk-server/releases

RustDesk 客户端下载：[https://github.com/rustdesk/rustdesk/releases](https://github.com/rustdesk/rustdesk/releases/tag/1.2.3-2)

RustDesk 官方部署教程：https://rustdesk.com/docs/zh-cn/

------

## 1：RustDesk 概览[#](https://www.cnblogs.com/TaoSec/p/18239044#1rustdesk-概览)[#](https://www.cnblogs.com/HGNET/p/18564238#1rustdesk-概览)

### 1.1：项目简介[#](https://www.cnblogs.com/TaoSec/p/18239044#11项目简介)[#](https://www.cnblogs.com/HGNET/p/18564238#11项目简介)

RustDesk 它是一个远程控制开源项目，该项目支持自己搭建服务器。

RustDesk 默认提供免费公共中继服务，但 RustDesk 的中继服务器在海外，所以延迟非常明显，所以可以自己搭建服务器。

### 1.2：工作原理[#](https://www.cnblogs.com/TaoSec/p/18239044#12工作原理)[#](https://www.cnblogs.com/HGNET/p/18564238#12工作原理)

RustDesk 会先用 TCP 21116 信令服务 NAT 打洞，如果打洞成功，直接 P2P 直连，RustDesk 不参与中继。

RustDesk 如果没有打洞成功，则走 TCP 21117 中继服务，延迟、画质取决于中继服务器的带宽。

| hbbs 监听端口                  | hbbr 监听端口               |
| ------------------------------ | --------------------------- |
| 21115(tcp)：用作 NAT 类型测试  | 21117(tcp)：中继服务        |
| 21116(tcp)：NAT 打洞与连接服务 | 21119(tcp)：支持 Web 客户端 |
| 21118(tcp)：支持 Web 客户端    |                             |
| 21116(udp)：ID 注册与心跳服务  |                             |

## 2：部署 RustDesk 服务[#](https://www.cnblogs.com/TaoSec/p/18239044#2部署-rustdesk-服务)[#](https://www.cnblogs.com/HGNET/p/18564238#2部署-rustdesk-服务)

这里使用Docker

请注意 TCP 21115-21119 和 1 个 UDP 21116 都要在安全组放行，如果有宝塔，宝塔的防火墙也要放行。

**rust.abc.com 改成你的域名**

```plaintext
docker run --name rustdesk-server --net=host -e "RELAY=rust.abc.com" -e "ENCRYPTED_ONLY=1" -v "/root/docker_data/rustdesk:/data" -d rustdesk/rustdesk-server-s6:latest
```

## 3：部署客户端[#](https://www.cnblogs.com/TaoSec/p/18239044#3部署客户端)[#](https://www.cnblogs.com/HGNET/p/18564238#3部署客户端)

### 3.1：客户端[#](https://www.cnblogs.com/TaoSec/p/18239044#31win-客户端)[#](https://www.cnblogs.com/HGNET/p/18564238#31win-客户端)

[https://github.com/rustdesk/rustdesk/releases](https://github.com/rustdesk/rustdesk/releases/tag/1.2.3-2)

 

| Architecture    | Windows                                                      | Ubuntu                                                       | Mac                                                          | AppImage                                                     | Flatpak                                                      | Android                                                      |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| x86-64 (64-bit) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.exe) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.deb) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.dmg) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.AppImage) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.flatpak) | -                                                            |
| x86-32 (32-bit) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86-sciter.exe) | -                                                            | -                                                            | -                                                            | -                                                            | -                                                            |
| AArch64 (ARM64) | -                                                            | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-aarch64.deb) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-aarch64.dmg) | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-aarch64.AppImage) | -                                                            | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-aarch64-signed.apk) |
| ARMv7 (32-bit)  | -                                                            | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-armv7-sciter.deb) | -                                                            | -                                                            | -                                                            | [Download](https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-armv7-signed.apk) |

ID服务器和Key是必填项，其他可以根据实际情况填

[![img](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222342949-772029890.png)](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222342949-772029890.png)

**示例：** `笔记本` 和 `无影云电脑` 都安装了 RustDesk for Win 客户端，并且 ID/中继服务器 均配置完成。笔记本获取无影电脑的 ID 值和密码，连接成功。

[![img](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222350760-1217142525.png)](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222350760-1217142525.png)

[![img](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222355724-1381991231.png)](https://img2024.cnblogs.com/blog/2116636/202406/2116636-20240608222355724-1381991231.png)

 