# Rclone

Rclone是一款的命令行工具，支持在不同对象存储、网盘间同步、上传、下载数据。

支持的主流对象存储：

Google Drive
Amazon S3
Openstack Swift / Rackspace cloud files / Memset Memstore
Dropbox
Google Cloud Storage
Amazon Drive
Microsoft One Drive
Hubic
Backblaze B2
Yandex Disk
The local filesystem

...

官方网站：

[https://rclone.org/](https://rclone.org/)

### 常用的rclone命令

1. rclone config : 配置会话；
2. rclone copy : 将文件从原文件夹复制至目标文件夹，跳过已复制的文件；
3. rclone sync : 将文件从原文件夹同步至目标文件夹，只修改目的地；
4. rclone move : 将文件从原文件夹移动至目标文件夹；
5. rclone delete : 删除路径中的内容；
6. rclone purge : 清空指定路径下的所有文件数据；
7. rclone mkdir : 创建一个新目录；
8. rclone rmdir : 删除一个空目录；
9. rclone rmdirs : 删除路径下的所有空目录；
10. rclone check : 检查源和目标的数据是否匹配；
11. rclone ls : 列出指定路径下所有的文件包含文件的大小及路径；
12. rclone lsd : 列出路径中的所有目录containers和buckets；
13. rclone lsl : 列出具有大小、修改时间和路径中的所有对象；
14. rclone md5sum : 为路径中的所有对象生成一个md5sum文件；
15. rclone sha1sum : 为路径中的所有对象生成一个sha1sum文件；
16. rclone size : 返回远程路径中对象的总大小和数量；
17. rclone version : 显示版本号；
18. rclone cleanup : 如果可能的话，清理remote；
19. rclone dedupe : 交互式查找重复文件并删除重命名它们；
20. rclone authorize : 远程认证；
21. rclone cat : 连接文件并将它们发送到stdout；
22. rclone copyto : 将文件从源复制到目标，跳过已复制的文件；
23. rclone genautocomplete : rclone输出完成脚本；
24. rclone gendocs : rclone将markdown文档输出到所提供的目录；
25. rclone listremotes : 列出所有远程的配置文件；
26. rclone mount : 将远程目标挂载至本地；
27. rclone moveto : 将文件或目录从源移动至目标；
28. rclone obscure : 在rclone.conf文件中使用模糊密码；
29. rclone cryptcheck : 检验远程认证；
30. rclone about : 获取配额信息；

下面以挂载WebDav作为栗子为你讲解怎么使用

### 安装rclone

```
curl https://rclone.org/install.sh | sudo bash
```

上面的命令如果安装不了，可以试试手动安装

下载安装包并解压

```
curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip
unzip rclone-current-linux-amd64.zip
cd rclone-*-linux-amd64
```

移动文件

```
sudo cp rclone /usr/bin/
sudo chown root:root /usr/bin/rclone
sudo chmod 755 /usr/bin/rclone
```

安装 manpage

```
sudo mkdir -p /usr/local/share/man/man1
sudo cp rclone.1 /usr/local/share/man/man1/
sudo mandb
```

### 配置

运行 `rclone config` 开始 更多内容可以看官方文档 [rclone config docs](https://rclone.org/docs/)

```
rclone config
```

### 配置过程

```
[root@localhost yum.repos.d]# rclone config
2021/08/12 16:28:35 NOTICE: Config file "/root/.config/rclone/rclone.conf" not found - using defaults
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
name> aliyunwebdav
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / 1Fichier
   \ "fichier"
 2 / Alias for an existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, SeaweedFS, and Tencent COS
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Citrix Sharefile
   \ "sharefile"
 9 / Compress a remote
   \ "compress"
10 / Dropbox
   \ "dropbox"
11 / Encrypt/Decrypt a remote
   \ "crypt"
12 / Enterprise File Fabric
   \ "filefabric"
13 / FTP Connection
   \ "ftp"
14 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
15 / Google Drive
   \ "drive"
16 / Google Photos
   \ "google photos"
17 / Hadoop distributed file system
   \ "hdfs"
18 / Hubic
   \ "hubic"
19 / In memory object storage system.
   \ "memory"
20 / Jottacloud
   \ "jottacloud"
21 / Koofr
   \ "koofr"
22 / Local Disk
   \ "local"
23 / Mail.ru Cloud
   \ "mailru"
24 / Mega
   \ "mega"
25 / Microsoft Azure Blob Storage
   \ "azureblob"
26 / Microsoft OneDrive
   \ "onedrive"
27 / OpenDrive
   \ "opendrive"
28 / OpenStack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"
29 / Pcloud
   \ "pcloud"
30 / Put.io
   \ "putio"
31 / QingCloud Object Storage
   \ "qingstor"
32 / SSH/SFTP Connection
   \ "sftp"
33 / Sugarsync
   \ "sugarsync"
34 / Tardigrade Decentralized Cloud Storage
   \ "tardigrade"
35 / Transparently chunk/split large files
   \ "chunker"
36 / Union merges the contents of several upstream fs
   \ "union"
37 / Uptobox
   \ "uptobox"
38 / Webdav
   \ "webdav"
39 / Yandex Disk
   \ "yandex"
40 / Zoho
   \ "zoho"
41 / http Connection
   \ "http"
42 / premiumize.me
   \ "premiumizeme"
43 / seafile
   \ "seafile"
Storage> 38
URL of http host to connect to
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Connect to example.com
   \ "https://example.com"
url> http://127.0.0.1:8080
Name of the Webdav site/service/software you are using
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Nextcloud
   \ "nextcloud"
 2 / Owncloud
   \ "owncloud"
 3 / Sharepoint Online, authenticated by Microsoft account.
   \ "sharepoint"
 4 / Sharepoint with NTLM authentication. Usually self-hosted or on-premises.
   \ "sharepoint-ntlm"
 5 / Other site/service or software
   \ "other"
vendor> 5
User name. In case NTLM authentication is used, the username should be in the format 'Domain\User'.
Enter a string value. Press Enter for the default ("").
user> admin
Password.
y) Yes type in my own password
g) Generate random password
n) No leave this optional password blank (default)
y/g/n> y
Enter the password:
password:
Confirm the password:
password:
Bearer token instead of user/pass (e.g. a Macaroon)
Enter a string value. Press Enter for the default ("").
bearer_token> 
Edit advanced config?
y) Yes
n) No (default)
y/n> 
--------------------
[aliyunwebdav]
type = webdav
url = http://127.0.0.1:8080
vendor = other
user = admin
pass = *** ENCRYPTED ***
--------------------
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> 
Current remotes:
Name                 Type
====                 ====
aliyunwebdav         webdav
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q>  q
```

name请自行替换
密码需要输入两遍进行确认,建议上面运行webdav程序的时候不设置密码,这里就不需要进行设置,直接选择无密码选项

### 挂载到本地

```
#新建本地文件夹,位置可以自己选
mkdir /data/aliyunwebdav
#挂载
rclone mount DriveName:Folder LocalFolder --cache-dir /tmp --allow-other --vfs-cache-mode writes --allow-non-empty
```

DriverName是你在配置rclone的时候设置的名字,Folder没有需要求的话填/即可,LocalFolder是你本地挂载的地址,/tmp比较特殊,上传时缓存目录,其他类型挂载一般时不需要这个参数的,默认/tmp地址即可,除非你的系统特殊

执行完之后即可访问本地挂载的文件夹查看文件了.

### 设置开机自启

```
#将后面修改成你上面手动运行命令中，除了rclone的全部参数
command="mount DriveName:Folder LocalFolder --cache-dir /tmp --allow-other --vfs-cache-mode writes --allow-non-empty"
#以下是一整条命令，一起复制到SSH客户端运行
cat > /etc/systemd/system/rclone.service <<EOF
[Unit]
Description=Rclone
After=network-online.target
[Service]
Type=simple
ExecStart=$(command -v rclone) ${command}
Restart=on-abort
User=root
[Install]
WantedBy=default.target
EOF
```

开始启动：

<pre class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><p><code><span class="pln">systemctl start rclone</span></code></p></li></ol></pre>

设置开机自启：

<pre class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><p><code><span class="pln">systemctl enable rclone</span></code></p></li></ol></pre>

其他命令：

<pre class="prettyprint linenums prettyprinted"><ol class="linenums"><li class="L0"><p><code><span class="pun">重启：</span><span class="pln">systemctl restart rclone</span></code></p></li><li class="L1" data-node-id="20230213115459-kkt6q1w"><p><code><span class="pun">停止：</span><span class="pln">systemctl stop rclone</span></code></p></li><li class="L2"><p><code><span class="pun">状态：</span><span class="pln">systemctl status rclone</span></code></p></li></ol></pre>
