---
sidebar_position: 1
---
# 制作系统启动 U 盘

如果你想安装系统，不管是 Windows 还是 Linux（比如 PVE，fnOS 等等），或者想启动一个 PE（[Edgeless](https://home.edgeless.top/)），都可以用 [Ventoy](https://www.ventoy.net/cn/download.html) 这个工具来制作启动 U 盘。
Ventoy:
https://www.ventoy.net/

制作启动 U 盘方法很简单，如果你是 Windows 系统，准备一个空闲的 U 盘，把 U 盘插到电脑上，下载 Ventoy 的 Windows 版，解压运行，直接安装 Ventoy 到 U 盘就可以了。

之后把你下载好的 ISO 镜像复制到 U 盘根目录即可。

Rufus
https://rufus.ie/

### 从 U 盘启动

把 U 盘插到你的机器上，如果你的机器上只有 U 盘这一个支持启动的设备，那么启动的时候应该就会从 U 盘启动。如果有多个支持启动的设备（比如安装了系统的硬盘），那么需要进到主板 BIOS 里设置优先从 U 盘启动。

如何进入 BIOS？

- 很多主板在启动的时候会在显示器上显示进入 BIOS 的快捷键，请多留意。
- 对大多数主板来说，在启动时可以尝试连续多次按 `DEL`，`F2`，`F8`，`F12` 等键进入 BIOS。
- 如果还是进不去 BIOS，可以按 `主板型号` 搜索对应的进入方法。

启动后，你可以看到 U 盘里的所有系统镜像，选择需要的系统开始安装。