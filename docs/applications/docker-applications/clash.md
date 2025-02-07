你懂的~

## 创建项目

1. 创建一个目录 clash，进入
2. 创建 `configs` 文件夹，放入自己的订阅文件，修改订阅文件名为`config.yaml`
3. 创建 `docker-compose.yml`

```
version: '3'

services:
  # Clash
  clash:
    image: dreamacro/clash:latest
    container_name: clash
    volumes:
      - ./configs/config.yaml:/root/.config/clash/config.yaml
    ports:
      - "7890:7890/tcp"
      - "7890:7890/udp"
      - "9090:9090"
    restart: always

  clash-dashboard:
    image: centralx/clash-dashboard
    container_name: clash-dashboard
    ports:
      - "7880:80"
    restart: always
```

这里

- clash的控制接口映射在 9090 端口上
- dashboard 映射在了宿主 7880 端口，默认只能通过 http 访问，可根据需要再做反向代理

## 修改订阅配置文件

### 开放控制端口

如果要使用clash-dashboard，则必须将clash的控制接口9090端口开放访问。

请检查订阅的配置文件中`external-controller`这一项是`0.0.0.0:9090`，否则dashboard无法获取和控制clash配置信息，一般这里默认是`127.0.0.1`

```
external-controller: '0.0.0.0:9090'
```

![image.png](https://oss.silon.vip/img/3290fdf04944ef9365b4aa6f86319b85.image.png)

### 添加控制配置密码（用于dashboard）

```
# 在external-controller下一行
secret: '你的密码'
```

![image.png](https://oss.silon.vip/img/4040b08aa28dbc1748988b7d8417943e.image.png)

## 运行

```
docker-compose up --build -d
```

![image.png](https://oss.silon.vip/img/8b46e0e0ea9e2c036965aaa3f10e5fb7.image.png)

![image.png](https://oss.silon.vip/img/f4b61e24d7745872d4a4bb08db43ba6e.image.png)


当然你还可以使用其他控制面板
```
docker run -p 1234:80 -d --name yacd --rm ghcr.io/haishanh/yacd:master
```