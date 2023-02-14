# 三步搞定esxi硬盘直通(RDM)


查找硬盘标识符
登陆esxi服务端->存储->设备->找到自己磁盘的id(在括号中的)

例如如下的id

```
t10.ATA_____ST8000NM000A2D2KE101_________________________________WKD1J1AFnaa.50000396a1b811a9
```



找到系统盘路径
登陆esxi服务端->存储->选择系统盘->复制位置后面地址

例如下面的地址

```
/vmfs/volumes/5eefaf52-4d40184a-07a6-4cd98f75a46c
/vmfs/volumes/5f26b739-abb7e2c5-ba5d-a85e453e259d
```



直通命令
启动ssh连入esxi服务器并输入下面命令

```
vmkfstools -z /vmfs/devices/disks/未格式化硬盘标识符 /vmfs/volumes/ESXI系统盘路径/自定义名称.vmdk
```

例如如下命令

```
vmkfstools -z /vmfs/devices/disks/naa.50000396a1b811a9 /vmfs/volumes/5eefaf52-4d40184a-07a6-4cd98f75a46c/nas1-1T.vmdk
```


视频教程：

[【ESXI虚拟机安装AIO之网卡直通+硬盘RDM直通，充分发挥All IN ONE主机性能】](https://www.bilibili.com/video/BV1Bv411J76g/?share_source=copy_web&vd_source=86bbda7edd701e41a1db3107e24e8ad6)
