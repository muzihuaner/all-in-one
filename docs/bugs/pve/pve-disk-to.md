# PVE设置硬盘直通

查看你现在的存储设备的序列号:

```
ls /dev/disk/by-id
```

然后就能看到所有存储设备的序列号

```
lrwxrwxrwx 1 root root 9 2月 6 11:47 ata-KINGSTON_SA400S37240G_XXXXX -> ../../sda
```

然后输入以下代码(请把硬盘序列号换成你硬盘的,100换成你LEDE的虚拟机ID)

```
qm set 100 -sata1 /dev/disk/by-id/ata-KINGSTON_SA400S37240G_XXXXX
```

如果返回以下信息,说明已成功挂载

```
update VM 100: -sata1 /dev/disk/by-id/ata-KINGSTON_SA400S37240G_XXXXX
```

然后可以进入PVE管理网页,查看是否真的挂载成功.如果看到LEDE虚拟机硬件设备里有这个,就说明成功.
