# Home Assistant

Home Assistant 是一个开源的智能家居平台，旨在通过集成各种智能设备和服务，提供一个统一的、可自定义的家庭自动化解决方案。它可以允许用户监控、控制和自动化家中的各种设备，包括灯光、温度、安全系统、多媒体设备等等。

官方的docker run部署命令如下：

```
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=MY_TIME_ZONE \
  -v /PATH_TO_YOUR_CONFIG:/config \
  -v /run/dbus:/run/dbus:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable

```

Docker Compose格式

```
version: '3.8'

services:
  homeassistant:
    image: ghcr.io/home-assistant/home-assistant:stable
    container_name: homeassistant
    privileged: true
    restart: unless-stopped
    environment:
      - TZ=Asia/Shanghai # 替换为你的时区，例如 Asia/Shanghai
    volumes:
      - /share/Container/ha/config:/config       # 冒号左侧替换为你的配置路径
      - /run/dbus:/run/dbus:ro            # 挂载 dbus，确保主机的相关服务可用
    network_mode: host # host模式下默认端口为8123


```

部署完毕后，在网页端输入NAS_IP:8123即可访问HA

### 安装小米官方插件

```
# 在容器里执行
git clone https://github.com/XiaoMi/ha_xiaomi_home.git
cd ha_xiaomi_home
./install.sh /config
```

