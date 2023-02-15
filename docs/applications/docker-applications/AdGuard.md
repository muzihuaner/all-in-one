# AdGuardHome

AdGuard是一款可以阻止网页上的广告和跟踪器的应用程序。它可以帮助您更快地加载网页，减少数据使用量，并保护您免受病毒和恶意软件的侵害。AdGuard还可以帮助您阻止弹出式广告，避免受到不安全的网站的影响，并保护隐私。——来自Chatgpt

官方网站：

[https://adguard.com/zh_cn/welcome.html](https://adguard.com/zh_cn/welcome.html)

安装与配置

[https://sspai.com/post/63088](https://sspai.com/post/63088)


Docker命令

```
docker run \
--name AdGuard_Home \
-v /etc/AdGuard_Home/:/opt/adguardhome/work \
-v /etc/AdGuard_Home/:/opt/adguardhome/conf \
-p 53:53/tcp -p 53:53/udp -p 67:67/udp -p 70:68/tcp -p 70:68/udp -p 3000:80/tcp -p 446:443/tcp -p 853:853/tcp -p 3000:3000/tcp \
--restart=always \
-d adguard/adguardhome
```
