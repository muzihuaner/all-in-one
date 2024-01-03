# freshrss

freshrss 是一个开源的、轻量级的 RSS 聚合器，用于订阅和阅读网站提供的 RSS（Really Simple Syndication）或 Atom 格式的内容。RSS 是一种用于发布经常更新的网站内容的标准格式，允许用户通过订阅器获取更新，而无需访问网站。

FreshRSS 提供了一个简单而直观的用户界面，用户可以使用它来集中管理和浏览他们感兴趣的不同网站的最新内容。一旦用户添加了他们喜欢的 RSS 或 Atom 源，FreshRSS 将定期检查这些源以获取更新，并将最新的文章或新闻以整洁的方式呈现给用户。

一些 FreshRSS 的特性包括：

1. **易用性：** 具有直观的用户界面，方便用户添加、管理和阅读他们订阅的内容。
2. **多平台支持：** 可以在不同的操作系统上运行，包括 Linux、Windows 和 macOS。
3. **自托管：** 用户可以选择在自己的服务器上部署 FreshRSS，从而拥有更多的控制权和隐私保护。
4. **标签和过滤：** 用户可以为订阅的源添加标签，以便更好地组织和过滤内容。
5. **定制：** 允许用户调整阅读器的外观和设置，以满足其个人偏好。

```
docker run -d --restart unless-stopped --log-opt max-size=10m
  -p 8080:80
  -e TZ=Europe/Paris
  -e 'CRON_MIN=1,31'
  -v freshrss_data:/var/www/FreshRSS/data
  -v freshrss_extensions:/var/www/FreshRSS/extensions
  --name freshrss
  freshrss/freshrss
```
