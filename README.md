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

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 构建

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
