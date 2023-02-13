# lcmp-Web环境搭建

Docker方式部署Caddy+PHP+Mysql+PHPMyAdmin

### 一、前期准备

#### 1、安装Docker

```
curl -sSL https://get.docker.com/ | sh 
systemctl start docker 
systemctl enable docker

```

### 2、安装Docker Compose

```
apt-get install docker-compose -y
curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```

你也可以为Docker Compose创建一个快捷键，创建好以后，就可以直接用dc命令替代docker compose了。

```
chmod a+x /usr/local/bin/docker-compose
rm -rf `which dc`
ln -s /usr/local/bin/docker-compose /usr/bin/dc

```


### 二、Mysql+PHPMyAdmin的部署

1、创建文件夹

```
mkdir db && cd db

```


#### 2、创建docker-compose.yml文件

```
nano docker-compose.yml

```

**内容如下，请修改标注为 `请修改` 部分为你希望的内容。**

```
version: "2"

services:
  # mysql容器
  web-mysql:
    image: mysql:5.7.26
    container_name: web-mysql
    volumes:  
      - /root/db/mysql/data:/var/lib/mysql 
      - /root/db/mysql/example_db:/var/example_db 
      - /root/db/mysql/conf.d:/etc/mysql/conf.d
    environment:
      - MYSQL_USER=root
      - MYSQL_ROOT_PASSWORD=请修改root密码
      - MYSQL_ALLOW_EMPTY_PASSWORD=no
      - MYSQL_DATABASE=test
    ports:
      - 请修改你希望的端口号:3306
    command: mysqld --lower_case_table_names=1 --skip-ssl --character_set_server=utf8 --explicit_defaults_for_timestamp
    networks:
      - net-mysql
    restart: always
  
  # phpmyadmin容器
  web-pma:
    image: phpmyadmin/phpmyadmin:latest
    container_name: web-pma
    ports:
      - "请修改你希望的端口号:80"
    environment:
      - MYSQL_USER=root
      - MYSQL_PASSWORD=请修改root密码
      - MYSQL_ROOT_PASSWORD=请修改root密码
      - PMA_HOST=web-mysql
      - UPLOAD_LIMIT=300M
    networks:
      - net-mysql
    restart: always

networks:
  net-mysql:
    driver: bridge

```

#### 3、启动

```
docker-compose up -d

```

至此，Mysql+PHPMyAdmin就装完了，有了PHPMyAdmin，也就容易操作Mysql了。

### 三、安装Caddy+PHP

#### 1、拉取

```
git clone https://github.com/muzihuaner/lcmp-docker.git
mv lcmp-docker web
cd web

```

#### 2、 创建docker-compose、env、caddy配置文件

```
cp docker-compose.yml.sample  docker-compose.yml
cp .env.sample .env
cp services/caddy/etc/caddy/Caddyfile.sample services/caddy/etc/caddy/Caddyfile

```


#### 3、修改caddyfile

```
nano /root/web/services/caddy/etc/caddy/Caddyfile
```


#### 网站示例：

PHP

```
hellobitch.com {
        root * /srv/hellobitch.com
        encode gzip
        file_server
        php_fastcgi php:9000
}
```

静态

```
hellobitch.com {
        root * /srv/hellobitch.com
        encode gzip
        file_server
}
```

反代

```
hellobitch.com {
        reverse_proxy http://you.are.bitch
}
```

**4. 上传代码到 `~/web/www/`目录下**

**5. 在 `~/web/`目录授权, 避免php程序没有对应权限**

```
chown -R 1000:1000 www
```

**6. 在项目目录启动**

```
docker-compose up -d
```

## 注意事项：

**1. www下文件权限为644，文件夹权限为755.请勿使用777，这可能会带来安全风险**
