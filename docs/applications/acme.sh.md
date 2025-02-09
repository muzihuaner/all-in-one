# acme.sh

**acme.sh** 实现了 `acme` 协议，可以从 `ZeroSSL`，`Let's Encrypt` 等 CA 生成免费的证书。

# 1. 安装 acme.sh

https://github.com/acmesh-official/acme.sh

安装很简单，一条命令:

```
curl https://get.acme.sh | sh -s email=my@example.com
```

或者

```
wget -O -  https://get.acme.sh | sh -s email=my@example.com
```

普通用户和 root 用户都可以安装使用。

安装过程进行了以下几步:

1. 把 acme.sh 安装到你的 **home** 目录下:

```
~/.acme.sh/
```

并创建 一个 shell 的 alias，例如 `.bashrc`，方便你的使用: `alias acme.sh=~/.acme.sh/acme.sh`

1. 自动为你创建 cronjob， 每天 0:00 点自动检测所有的证书，如果快过期了，需要更新，则会自动更新证书。

更高级的安装选项请参考: https://github.com/acmesh-official/acme.sh/wiki/How-to-install

**安装过程不会污染已有的系统任何功能和文件**，所有的修改都限制在安装目录中: `~/.acme.sh/`

**注意**：如果安装完成后提示 `-bash: acme.sh: command not found`，需要手动执行 `source ~/.bashrc`

# 2. 生成证书

**acme.sh** 实现了 **acme** 协议支持的所有验证协议。

一般有两种方式验证: HTTP 和 DNS 验证。

## HTTP 验证

### 直接签发

只需要指定域名，并指定域名所在的网站根目录. **acme.sh** 会全自动的生成验证文件，并放到网站的根目录，验证完成后会聪明的删除验证文件，整个过程没有任何副作用。

```
acme.sh --issue -d mydomain.com -d www.mydomain.com --webroot /home/wwwroot/mydomain.com/
```

### 使用 Apache 模式

如果你用的 **Apache** 服务器，**acme.sh** 还可以智能的从 **Apache** 的配置中自动完成验证，你不需要指定网站根目录:

```
acme.sh --issue --apache -d example.com -d www.example.com -d cp.example.com
```

### 使用 Nginx 模式



如果你用的 **Nginx** 服务器，或者反代，**acme.sh** 还可以智能的从 **Nginx** 的配置中自动完成验证，你不需要指定网站根目录:

```
acme.sh --issue --nginx -d example.com -d www.example.com -d cp.example.com
```

**注意，无论是 Apache 还是 Nginx 模式，acme.sh 在完成验证之后，会恢复到之前的状态，都不会私自更改程序本身的配置. 好处是你不用担心配置被搞坏，也有一个缺点，你需要自己配置 SSL 项，否则只能成功生成证书，你的网站还是无法正常使用 HTTPS。**

### 使用独立服务模式

如果服务器上没有运行任何 Web 服务，**80** 端口是空闲的，那么 **acme.sh** 还能假装自己是一个 WebServer，临时监听 **80** 端口，完成验证:

```
acme.sh --issue --standalone -d example.com -d www.example.com -d cp.example.com
```

### 修改默认 CA

acme.sh 脚本默认 CA 服务器是 `ZeroSSL`，有时可能会导致获取证书的时候一直出现：`Pending，The CA is processing your order，please just wait.`

只需要把 CA 服务器改成 `Let's Encrypt` 即可，虽然更改以后还是有概率出现 pending，但基本 2-3 次即可成功

```
acme.sh --set-default-ca --server letsencrypt
```

更高级的用法请参考: https://github.com/acmesh-official/acme.sh/wiki/How-to-issue-a-cert

## DNS 验证

你不需要任何服务器，不需要任何公网 IP，只需要 DNS 的解析记录即可完成验证。

### 手动验证

这需要你手动在域名上添加一条 TXT 解析记录，验证域名所有权。

注意，如果使用手动验证，acme.sh 将无法自动更新证书，每次都需要手动添加解析来验证域名所有权。**如果有自动更新证书的需求，请使用自动验证（DNS API）。**

```
acme.sh --issue --dns -d example.com -d www.example.com -d cp.example.com
```

然后，**acme.sh** 会生成相应的解析记录显示出来，你只需要在你的域名管理面板中添加这条 TXT 记录即可。

等待解析完成之后，执行以下命令重新生成证书：

```
acme.sh --renew -d mydomain.com
```

注意这里现在用的是 `--renew` 参数

### 自动验证（DNS API）

DNS 方式的真正强大之处在于可以使用域名解析商提供的 API 自动添加 TXT 记录，且在完成验证后删除对应的记录。

**acme.sh** 目前支持超过一百家的 DNS API。

以 DNSPod.cn 为例，你需要先登录到 [DNSPod.cn](https://dnspod.cn/)，拿到你的 DNSPod API Key 和 ID 并设置：

```
export DP_Id="1234"

export DP_Key="sADDsdasdgdsf"
```

现在我们可以签发通配符证书了：

```
acme.sh --issue --dns dns_dp -d example.com -d *.example.com
```

`DP_Id` 和 `DP_Key` 将保存在 `~/.acme.sh/account.conf` 中，并在需要时自动获取，无需手动再设置。

更详细的 DNS API 用法: https://github.com/acmesh-official/acme.sh/wiki/dnsapi

# 3. 复制证书

证书生成好以后，我们需要把证书复制给对应的 Apache、Nginx 或其他服务器去使用。

**必须使用** `--install-cert` 命令来把证书复制到目标文件，请勿直接使用 `~/.acme.sh/` 目录下的证书文件，这里面的文件都是内部使用，而且目录结构将来可能会变化。

## Apache 示例:

```
acme.sh --install-cert -d example.com \
--cert-file      /path/to/certfile/in/apache/cert.pem  \
--key-file       /path/to/keyfile/in/apache/key.pem  \
--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \
--reloadcmd     "service apache2 force-reload"
```

## Nginx 示例:

```
acme.sh --install-cert -d example.com \
--key-file       /path/to/keyfile/in/nginx/key.pem  \
--fullchain-file /path/to/fullchain/nginx/cert.pem \
--reloadcmd     "service nginx reload"
```

Nginx 的配置项 `ssl_certificate` 需要使用 `/etc/nginx/ssl/fullchain.cer` ，而非 `/etc/nginx/ssl/<domain>.cer` ，否则 [SSL Labs](https://www.ssllabs.com/ssltest/) 的测试会报证书链问题（`Chain issues Incomplete`）。

默认情况下，证书每 60 天更新一次（可自定义）。更新证书后，Apache 或者 Nginx 服务会通过 `reloadcmd` 传递的命令自动重载配置。

注意：`reloadcmd` 非常重要。证书会自动申请续签，但是如果没有正确的 `reloadcmd` 命令，证书可能无法被重新应用到 Apache 或者 Nginx，因为配置没有被重载。

# 4. 查看已安装证书信息

```
acme.sh --info -d example.com
```

会输出如下内容：

```
DOMAIN_CONF=/root/.acme.sh/example.com/example.com.conf
Le_Domain=example.com
Le_Alt=no
Le_Webroot=dns_ali
Le_PreHook=
Le_PostHook=
Le_RenewHook=
Le_API=https://acme-v02.api.letsencrypt.org/directory
Le_Keylength=
Le_OrderFinalize=https://acme-v02.api.letsencrypt.org/acme/finalize/23xxxx150/781xxxx4310
Le_LinkOrder=https://acme-v02.api.letsencrypt.org/acme/order/233xxx150/781xxxx4310
Le_LinkCert=https://acme-v02.api.letsencrypt.org/acme/cert/04cbd28xxxxxx349ecaea8d07
Le_CertCreateTime=1649358725
Le_CertCreateTimeStr=Thu Apr  7 19:12:05 UTC 2022
Le_NextRenewTimeStr=Mon Jun  6 19:12:05 UTC 2022
Le_NextRenewTime=1654456325
Le_RealCertPath=
Le_RealCACertPath=
Le_RealKeyPath=/etc/acme/example.com/privkey.pem
Le_ReloadCmd=service nginx force-reload
Le_RealFullChainPath=/etc/acme/example.com/chain.pem
```

# 5. 更新证书

目前证书每 60 天自动更新，你无需任何操作。

但是你也可以强制续签证书：

```
acme.sh --renew -d example.com --force
```

# 6. 关于修改 `reloadcmd`

目前修改 `reloadcmd` 没有专门的命令，可以通过重新安装证书来实现修改 `reloadcmd` 的目的。

此外，安装证书后，相关信息是保存在 `~/.acme.sh/example.com/example.conf` 文件下的，内容就是 `acme.sh --info -d example.com` 输出的信息，不过 `reloadcmd` 在文件中使用了 Base64 编码。理论上可以通过直接修改该文件来修改 `ReloadCmd`，且修改时，无需 Base64 编码，直接写命令原文 `acme.sh` 也可以识别。

不过，由于 `example.conf` 文件的位置和内容格式以后可能会改变，且 `example.conf` 一直都是内部使用，后续也有可能会改为用 SQLite 或者 MySQL 格式存储. 所以一般不建议自己修改。

# 7. 更新 acme.sh

acmd.sh 还在不断开发中，因此强烈建议保持并使用最新的版本。

升级 acme.sh 到最新版：

```
acme.sh --upgrade
```

如果你不想手动升级，可以开启自动升级:

```
acme.sh --upgrade --auto-upgrade
```

之后，acme.sh 就会自动保持更新了。

你也可以随时关闭自动更新:

```
acme.sh --upgrade --auto-upgrade  0
```

# 8. 出错怎么办：

如果出错，请添加 `--debug` 参数输出详细的调试信息：

```
acme.sh --issue  .....  --debug 
```

或者输出更详细的信息：

```
acme.sh --issue  .....  --debug  2
```

请参考：https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh

在 DNS 验证模式下如果 debug 中出现诸如 `timed out` 等字样可能是因为 `GFW` HTTP(S) Proxy 环境变量。（请按照自己实际设定修改）

```
export http_proxy="socks5h://localhost:1081"
export https_proxy="socks5h://localhost:1081" 
```

如果是使用 docker 则完整示例配置如下：

```
docker run --rm  -it  \
  -v "/etc/acme":/acme.sh  \
  -e "CF_Token=[填入自己的信息]" \
  -e "CF_Account_ID=[填入自己的信息]" \
  -e "CF_Zone_ID=[填入自己的信息]" \
  -e http_proxy="socks5h://[代理A]:1234" \
  -e https_proxy="socks5h://[代理A]:1234" \
  --network container:[代理A]\
  neilpang/acme.sh \
  --issue -d example.com --dns dns_cf --debug
```

上述例子中使用 Cloudflare 的 DNS 来签发证书，并通过把 acme.sh 链接到容器[代理A]，来转发 curl 请求（请按照自己实际设定修改）

最后，本文并非完全的使用说明，还有很多高级的功能，更高级的用法请参看 wiki 页面：https://github.com/acmesh-official/acme.sh/wiki/