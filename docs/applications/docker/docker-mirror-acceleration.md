---
sidebar_position: 6
---
# Docker 镜像加速

国内从 DockerHub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，例如：


```
#下面的加速器可能随时失效，需要自己找
https://docker.registry.cyou
https://docker-cf.registry.cyou
https://dockerpull.com
https://dockerproxy.cn
https://docker.1panel.live
https://hub.rat.dev
https://dhub.kubesre.xyz
https://docker.hlyun.org
https://docker.kejilion.pro
https://registry.dockermirror.com
https://docker.chenby.cn
https://ccr.ccs.tencentyun.com
https://hub.littlediary.cn
https://hub.firefly.store
https://docker.nat.tf
https://hub.crdz.gq
https://noohub.ru
https://docker.nastool.de
https://hub.docker-ttc.xyz
https://freeno.xyz
https://docker.hpcloud.cloud
https://dislabaiot.xyz
https://ginger20240704.asia
https://doublezonline.cloud
https://dockerproxy.com
```


### Linux Docker镜像仓库配置
``` 
echo '{"registry-mirrors": ["https://docker.1ms.run"]}' | sudo tee /etc/docker/daemon.json > /dev/null
systemctl daemon-reload
systemctl restart docker
```
### Windows

对于使用 Windows  的系统，在系统右下角托盘 Docker 图标内右键菜单选择 Settings，打开配置窗口后左侧导航菜单选择 Daemon。在 Registrymirrors 一栏中填写加速器地址 **https://docker.1ms.run** ，之后点击 Apply 保存后 Docker 就会重启并应用配置的镜像地址了。

![](https://www.runoob.com/wp-content/uploads/2019/10/38507F68-E30F-4CCA-AE9D-9E9EEF60EC83.jpg)

### 检查加速器是否生效

检查加速器是否生效配置加速器之后，如果拉取镜像仍然十分缓慢，请手动检查加速器配置是否生效，在命令行执行 **docker info**，如果从结果中看到了如下内容，说明配置成功。

```
$ docker info
RegistryMirrors:
    https://docker.1ms.run
```
