# 删除local-lvm 扩容全部空间到local

在命令行里面输入以下命令，删除lovallvm
lvremove pve/data
输入Y回车继续

在命令行输入以下命令，扩容local为全部空间
lvextend -l +100%FREE -r pve/root

最后到在pve里删除

![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/103f4de71a512b59ec3ec7fd08bdcbc0.png)

![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/f707215504f0f21f415b90df67f42e33.png)

这时在查看local空间已经是硬盘的全部空间了