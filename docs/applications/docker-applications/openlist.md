# OpenList

OpenList 是一个支持多种存储的文件列表程序🗂️，是一个有韧性、长期治理、社区驱动的 AList 分支🔀，旨在防御基于信任的开源攻击🛡️。

https://doc.oplist.org/

### Docker CLI

```
mkdir -p /etc/openlist
docker run --user $(id -u):$(id -g) -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

创建 `docker-compose.yml` 文件。

```
mkdir -p /opt/openlist
cd /opt/openlist
vim docker-compose.yml
```

写入以下内容，然后保存并退出：

```
# docker-compose.yml
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    user: '0:0' # Please replace `0:0` with the actual user ID and group ID you want to use to run OpenList.
    volumes:
      - './data:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - UMASK=022
    restart: unless-stopped
```

执行

```
docker compose up -d
```

## 环境变量

| 名称                      | 默认值 | 说明                                                         |
| :------------------------ | :----- | :----------------------------------------------------------- |
| `PUID`                    | `0`    | 运行身份 UID，在 v4.1.0 以后的版本中废弃                     |
| `PGID`                    | `0`    | 运行身份 GID，在 v4.1.0 以后的版本中废弃                     |
| `UMASK`                   | `022`  | https://en.wikipedia.org/wiki/Umask                          |
| `TZ`                      | `UTC`  | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai` |
| `RUN_ARIA2`               |        | 是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 `true`，否则为 `false` |
| `OPENLIST_ADMIN_PASSWORD` |        | 通过环境变量指定管理员密码                                   |
