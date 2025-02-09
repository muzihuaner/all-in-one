你懂的~

## 创建项目

1. 创建一个目录 clash，进入
2. 创建 `configs` 文件夹，放入自己的订阅文件，修改订阅文件名为`config.yaml` 配置文件从Clash软件获取
3. 创建 `docker-compose.yml`

```
version: '3'

services:
  # Clash
  clash:
    image: dreamacro/clash:latest
    container_name: clash
    volumes:
      - /vol2/1000/clash/configs/config.yaml:/root/.config/clash/config.yaml
    ports:
      - "7890:7890/tcp"
      - "7890:7890/udp"
      - "9090:9090"
    restart: always

  clash-dashboard:
    image: haishanh/yacd:latest
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
docker-compose up -d
```

在线网页控制面板  
https://metacubex.github.io/metacubexd/#/  
https://yacd.metacubex.one/

启动完毕。

访问：http://IP:7880/ 添加clash服务的地址

![image-20220703170428513](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/image-20220703170428513.png)

### 代理使用

以`iOS`手机为例,基本都一致，在【无线局域网】设置中，已连接的`WIFI`右边的信息图标：

配置`HTTP`代理

![image-20220703170819896](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/image-20220703170819896.png)

然后就可以尝试访问https://google.com测试一下了。