# Sun-Panel

简单、易用、美观

一个NAS、服务器导航面板、简易docker管理器、Homepage、浏览器首页

## 特点[](https://doc.sun-panel.top/zh_cn/introduce/project.html#特点)

- 🍉 界面简洁，功能强大，资源占用少
- 🍊 上手简单，可视化操作，可0代码使用
- 🍠 一键切换内、外网模式链接
- 🍵 支持docker部署（支持Arm系统）
- 🎪 支持多账号隔离使用
- 🎏 支持查看系统状态
- 🫙 支持自定义js、css
- 🍻 简单使用可以无需连接外部数据库
- 🍾 丰富图标风格自由搭配，支持[iconify图标库](https://icon-sets.iconify.design/)
- 🚁 支持网页内置小窗口打开（部分三方网站屏蔽此功能）
- 🐳 简单的docker管理器，支持查看容器状态、控制容器的开启和关闭



## 默认账号密码

账号：**[admin@sun.cc](mailto:admin@sun.cc)**

密码：**12345678**

### Docker命令

```
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v /var/run/docker.sock:/var/run/docker.sock \
--name sun-panel \
hslr/sun-panel:latest
```

容器端口默认：3002，`--restart=always` 自动重启，`-d` 后台运行

## docker-compose 运行

```
version: "3.2"

services:
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - ./conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock # 挂载docker.sock
      # - ./runtime:/app/runtime # 挂载日志目录
      # - /mnt/sata1-1:/os # 硬盘挂载点（根据自己需求修改）
    ports:
      - 3002:3002
    restart: always
```

运行

```
docker-compose up -d
```

官方文档： https://doc.sun-panel.top/zh_cn/