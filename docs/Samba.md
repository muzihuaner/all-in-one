# Samba

Samba是在Linux和UNIX系统上实现SMB协议的一个免费软件，由服务器及客户端程序构成。SMB（Server Messages Block，信息服务块）是一种在局域网上共享文件和打印机的一种通信协议，它为局域网内的不同计算机之间提供文件及打印机等资源的共享服务,简单来说就是实现跨系统的文件管理服务程序.


samba安装
root用户下直接使用以下命令

```
 apt-get install samba
```

若是普通用户下使用以下命令

```
 sudo apt-get install samba
```

samba配置
samba的配置文件在/etc/samba/路径下，文件名为smb.conf，注意需要root用户权限才能编辑该文件，我是用root用户下使用vim进行编辑修改的。
在文件末尾添加以下内容

```
[test]
	comment = samba test
	path = /home/d/share //共享文件路径
	browseable = yes
	read only = no
	guest ok = yes
	writable = yes
```

添加samba用户

```
smbpasswd -a 用户名
```

接着需要两次输入密码
此处设置的用户和密码，是用来登录用的

可能出现的错误
执行smbpasswd有可能会出现以下错误：

```
 bash: smbpasswd: command not found
```

解决办法：出现该错误表示samba-client没有安装

 执行命令

```
apt-get install samba-client
```

执行samba-client命令可能会出现以下错误：

```
 smbclient: Depends: libwbclient0 (= 2:4.5.16+dfsg-1+deb9u1) but 2:4.5.16+dfsg-1+deb9u2 is to be installed
```

解决办法：

```
 执行命令 apt-get autoremove libwbclient0 //卸载之前安装的版本
 执行命令 apt-get install libwbclient0=2:4.5.16+dfsg-1+deb9u1 //安装所需要的版本
```

通过以上命令即可解决问题，此时可以执行apt-get install samba-client，将成功安装samba-client

起动samba服务
使用命令 systemctl start smb
执行以上命令会报错：Failed to start smb.service: Unit smb.service not found
到目录/etc/init.d目录下可以发现没有smb文件，但可以发现smnd和nmbd文件，使用这两个执行文件来起动samba服务，执行以下命令：

```
systemctl restart smbd.service nmbd.service
```

若执行上述命令时，出现以下错误：

```
Failed to restart smbd.service: Unit smbd.sercvice not found
Failed to restart nmbd.service: Unit nmbd.service not found
```

出现上述错误的原因是因为samba没有安装成功，因此需要执行apt-get install samba，重新安装samba，安装完成以后，再执行以上命令，即可成功起动samba服务

若要查看samba服务是否起动成功，只需要执行命令systemctl status smbd.service，执行该命令后，可以在终端上看到active(running)，表明samba服务已经起动成功。
