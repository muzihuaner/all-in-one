# DDNS-GO

自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务。

https://github.com/jeessy2/ddns-go

## 特性

* 支持Mac、Windows、Linux系统，支持ARM、x86架构
* 支持的域名服务商 `Alidns(阿里云)` `Dnspod(腾讯云)` `Cloudflare` `华为云` `Callback` `百度云` `Porkbun` `GoDaddy` `Google Domain`
* 支持接口/网卡/[命令](https://github.com/jeessy2/ddns-go/wiki/%E9%80%9A%E8%BF%87%E5%91%BD%E4%BB%A4%E8%8E%B7%E5%8F%96IP%E5%8F%82%E8%80%83)获取IP
* 支持以服务的方式运行
* 默认间隔5分钟同步一次
* 支持同时配置多个DNS服务商
* 支持多个域名同时解析
* 支持多级域名
* 网页中配置，简单又方便，默认勾选 `禁止从公网访问`
* 网页中方便快速查看最近50条日志
* 支持Webhook通知
* 支持TTL
* 支持部分DNS服务商[传递自定义参数](https://github.com/jeessy2/ddns-go/wiki/%E4%BC%A0%E9%80%92%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0)，实现地域解析等功能

## Docker中使用

* 挂载主机目录, 使用docker host模式。可把 `/opt/ddns-go` 替换为你主机任意目录, 配置文件为隐藏文件
  ```shell
  docker run -d --name ddns-go --restart=always --net=host -v /opt/ddns-go:/root jeessy/ddns-go
  ```
* 在浏览器中打开 `http://主机IP:9876`，修改你的配置，成功
* [可选] 使用 `ghcr.io` 镜像
  ```shell
  docker run -d --name ddns-go --restart=always --net=host -v /opt/ddns-go:/root ghcr.io/jeessy2/ddns-go
  ```
* [可选] 支持启动带参数 `-l`监听地址 `-f`间隔时间(秒)
  ```shell
  docker run -d --name ddns-go --restart=always --net=host -v /opt/ddns-go:/root jeessy/ddns-go -l :9877 -f 600
  ```
* [可选] 不使用docker host模式
  ```shell
  docker run -d --name ddns-go --restart=always -p 9876:9876 -v /opt/ddns-go:/root jeessy/ddns-go
  ```
