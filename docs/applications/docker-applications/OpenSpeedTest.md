# openspeedtest

OpenSpeedtest 是一个开源的网络测速工具，用于测量用户的网络连接速度。该项目的目标是提供一个简单易用的工具，让用户能够方便地测试其互联网连接的速度。

主要特点和功能包括：

1. **网页测速：** OpenSpeedtest 提供基于网页的测速服务，用户可以通过浏览器访问 openspeedtest/latest 页面进行测速，而无需安装额外的应用程序。
2. **多种测速指标：** 该工具可以测量多种网络指标，包括下载速度、上传速度、延迟（ping 值）等，从而全面了解用户的网络性能。
3. **开源：** OpenSpeedtest 是开源项目，用户可以查看和审查其源代码，这有助于确保透明度和安全性。
4. **跨平台支持：** 由于是基于网页的工具，用户可以在各种操作系统和设备上使用，只需有一个兼容的浏览器即可进行测速。
5. **用户友好：** OpenSpeedtest 的界面设计简洁直观，使用户能够轻松理解测速结果，无论其网络知识水平如何。

```
docker run --restart=unless-stopped --name openspeedtest -d -p 80:3000 -p 443:3001 openspeedtest/latest
```