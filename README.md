# [**All-in-One 搞基手册**](http://localhost:3000/)

这个网站使用 [Docusaurus 2](https://docusaurus.io/) 构建, a modern static website generator.

### 安装

```
$ yarn
```

### 开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映出来，而无需重新启动服务器。

```
$ yarn build
```

此命令将静态内容生成到 `build` 目录中，并且可以使用任何静态内容托管服务提供。

## 部署

使用 SSH:

```
$ USE_SSH=true yarn deploy
```

不使用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub 页面进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。
