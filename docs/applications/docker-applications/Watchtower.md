# Watchtower

Watchtower 是一个用于自动更新 Docker 容器的开源工具。它能够检测您运行的 Docker 容器是否有新版本可用，并自动更新这些容器，从而帮助您保持容器应用程序的安全性和稳定性。

**主要功能：**

- **自动容器更新**：Watchtower 可以定期检查 Docker Hub 或者其他容器仓库中的镜像，如果发现新版本，它将自动下载新的镜像并更新正在运行的容器。
- **定期检查**：您可以配置 Watchtower 以定期检查容器，以确保容器始终处于最新状态。您可以设置检查的时间间隔。
- **邮件通知**：Watchtower 可以配置为在更新容器时发送邮件通知，以便您及时了解容器的变化情况。
- **灵活性**：您可以选择性地排除某些容器不受自动更新的影响，以满足特定需求。
- **日志记录**：Watchtower 会记录容器更新的日志，以便您可以随时查看更新历史。
- **支持多种容器仓库**：除了 Docker Hub，Watchtower 还支持其他容器仓库，因此您可以使用自己喜欢的容器镜像。

### Docker部署命令

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```

官方文档：https://containrrr.dev/watchtower/
