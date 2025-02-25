# 工欲善其事，必先利其器

“工欲善其事，必先利其器”，在数字化时代，数据存储和管理愈发重要，一款合适的 NAS（网络附加存储）就如同得力助手，能极大地提升我们对数据的运用效率。但面对琳琅满目的 NAS 产品，如何才能挑选到最契合自己需求的那一款呢？首先，明确使用目的是关键。若是家庭用户，主要用于存储照片、视频和日常文件，对性能要求相对没那么高，更注重操作的便捷性和基础的存储功能；而企业用户，可能需要处理大量业务数据，对数据的安全性、读写速度和多用户协作功能则有更高的要求。其次，硬件配置不容忽视。处理器性能决定了 NAS 处理数据的速度，内存大小影响着系统运行的流畅度，同时，要根据自身的数据量规划好存储容量，考虑是否支持硬盘扩展。再者，软件功能同样重要，比如数据备份与恢复功能是否强大，是否支持多种设备的连接和访问，以及是否具备完善的权限管理系统等。只有综合考量这些因素，才能在众多 NAS 产品中找到最适合自己的 “利器”，让数据管理变得轻松高效 。

## 硬件选择指南

- 入门级：树莓派、旧电脑改造、迷你主机（如 Intel NUC）、工控机（多网口）、成品NAS...
- 性能级：二手服务器（Dell R720/R730、HP Gen8/Gen10）、DIY NAS（J4125/J5040 主板）...

![群晖NAS](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/heading%402x.png)



![戴尔服务器](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/r730xd-1024x670.png)

## 如何选择 CPU？

#### 常见的 CPU 性能对比

和日常使用电脑的场景不同，NAS 对 CPU 的性能要求不高，Intel 12 代的 i3-12100 在 NAS 里已经算是很高的配置了，市面上主流的 NAS 使用的 CPU 也还是 N5105，N100 这种，这些 CPU 的性能对比如图。

下面的截图来自于 [PassMark](https://www.cpubenchmark.net/singleCompare.php) 这个网站，如果你想自己对比 CPU 性能，也可以到 [PassMark](https://www.cpubenchmark.net/singleCompare.php) 查询。

![img](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/NLtHoL_DjLsC3.png)

![PruQsN_Uvggpe](https://gcore.jsdelivr.net/gh/muzihuaner/huancdn@main/img/PruQsN_Uvggpe.png)

- First Seen on Chart：首次有测试数据的时间，也可以看成 CPU 发布时间
- Single Thread Rating：单线程跑分
- Other：这里一般写的都是核显信息，如果没显示，那就是无核显
- CPU Mark：CPU 总体性能分数

#### 根据需求选择 CPU

如果你没有虚拟 Windows 的需求，那 N5105，N100 是完全够用的。以我用的 N5105 为例（使用 Unraid 系统），开了 30 多个 Docker 和虚拟了一个 iStoreOS 作为主路由，CPU 负载也并不高。

如果你需要使用 Windows 虚拟机，那可以用个 G7400 或者 i3-12100 就足够用。

NAS CPU 在性能够用的前提下，最需要注意的是功耗，因为 NAS 长期 24 小时开机，按照全年 365 天开机计算，功耗每增加 1w，每年就多耗电 8.7 度，功耗增加 10w，每年就多耗电 87 度。

#### 哪些 CPU 适合用来硬解？

一般 Intel 的低功耗 CPU 都集成了核显，也都支持硬解，包括 J 系列（比如 J4125），N 系列（N5105，N100），G 系列（G6900，G7400）等等。视频编码格式有很多，不同的 CPU 对不同的编码格式支持也不一样，一般来说，越新的 CPU 支持的编码也就越全面。比如 Intel 第 12 代 CPU（比如 N100）就支持最新的 AV1 编解码，之前的 CPU 就不支持。

桌面级处理器中，Intel 的命名规则是，一般后缀不带 F 就表示自带核显（比如 12100 和 12100F）。AMD 的规则是：一般后缀带了 G 就表示带了核显（比如 5600G 和 5600）。

做 NAS，因为长期开机，功耗肯定是越低越好，Intel 在低功耗领域做的明显比 AMD 要好很多，第三方的软件（比如 Jellyfin）支持也是比较完善，所以如果要用到硬解，首选 Intel，如果同时考虑功耗，首选 Intel 的低功耗 CPU。

## 如何选择硬盘？

如何选择硬盘主要看你的需求。

- 如果想买全新盘，推荐直接到京东，淘宝，PDD 旗舰店买。
- 如果对噪音比较敏感，建议直接选西数红盘或者希捷酷狼，这种硬盘是 NAS 专用硬盘，噪音比较小，但价格也比较贵。
- 如果想要全新盘，但还希望有一些性价比，那可以看看海康的监控盘，用来做存储也可以。
- 如果你想要性价比，对噪音容忍度较高，那可以选择企业级矿盘。14TB、16TB 也只要 800~1000 元左右。一般来说，不推荐新手买矿盘。但矿盘性价比确实很高，如果你对数据的安全性没要求，也可以忍受企业级矿盘的噪音（噼里啪啦炒豆子声），用途也只是拿来做下载，存储高清电影。那可以选择一些企业级矿盘。

买二手硬盘，如果是机械硬盘，主要看通电时间。如果是 SSD，主要看写入量（TBW）。

> 但这里也提示大家，即便要买矿盘，最好不要买 `清零盘`，也尽量别买 10TB 以下的容量。

为什么别买 `清零盘`？别买清零盘是因为目前很多硬盘都可以用一些特殊的工具把记录硬盘运行状况的数据 `清零`，导致我们无法得知这些硬盘具体的使用数据，也不清楚这个硬盘到底用了多久。即便全盘扫描没有坏道，那也不如买清清楚楚表明通电时间的矿盘来得心里踏实。我们也不妨猜测一下，为什么要清零？难道是通电时间太久，导致通电数据太难看了？如何判断清零盘？价格比正常价格低的离谱，标的却是是 `全新` 的硬盘，大概率是清零盘。

为什么尽量别买 10TB 以下的硬盘？我买过很多次二手矿盘了，买这些矿盘，是因为这些硬盘属于企业级硬盘，整体素质比较好。而这些硬盘也是在之前比较火的 CHIA 挖矿大潮中锻炼过的。根据 CHIA 火起来的那段时间推算，如果通电时间在 2w 小时（也就是通电时间刚刚 2 年出头）左右的硬盘，那这块盘应该属于是 “正儿八经” 的矿盘。我们要买的就是这样的矿盘。但是我在问过很多卖家通电时间后发现，有大量的硬盘通电时间居然在 4w 小时以上，这些硬盘以 4~10 TB 的居多，如果按通电时间来推算，这些硬盘至少在 5 年前就已经在通电使用了。而那时候，还没有出现 CHIA 挖矿潮呢。因此很有可能是这些卖家把用了多年的硬盘（比如是用了多年的监控硬盘）拿出来滥竽充数，趁着很多用户看中矿盘的性价比，坑不知其中门道的小白用户。

> **最近，市场上又多了一些号称通电只有十几个小时的硬盘，这种盘也尽量别买，因为这种盘非常有可能是清零盘又重新通电了十几个小时后拿出来卖，很容易让人误以为是准全新盘。**

因此如果要买矿盘，一看通电时间，清零的最好别碰，二是到手检测，做好坏道扫描（全盘慢扫），三是使用过程中如果没有备份，不要存储重要数据。

> **注意：如果没有备份，不要用这些矿盘来存储重要数据。**

#### 如何扫描机械硬盘坏道？

##### 使用 Windows 直接扫描

Windows 可以安装 [图吧工具箱](https://www.tbtool.cn/)，里面带的 `HDTune Pro` 这个工具，可以用来错误扫描，扫描完正常的结果应该是全绿，如下图所示。

容量越大的硬盘，扫描时间也越长，比如东芝的 MG07 14TB，扫描一遍需要大概 16~18 个小时左右。

![img](https://img.slarker.me/wiki/mYQSyC_tQf8hk.png)

##### 使用 U 盘引导启动 PE 扫描

如果你的 Windows 无法外接硬盘扫描，那可以把硬盘都直接装到 NAS 里，使用 U 盘制作一个 PE 启动盘，在 NAS 主板 BIOS 里设置通过 U 盘启动 PE 来扫描。

PE 推荐使用 [Edgeless](https://down.edgeless.top/)，下载 ISO 镜像，使用 [rufus](https://rufus.ie/zh/) 或者 [balenaEtcher](https://etcher.balena.io/) 之类的启动盘制作工具将镜像写入 U 盘，通过 U 盘启动 PE 之后，可以使用 `DiskGenius` 的 [坏道检测与修复](https://www.diskgenius.cn/help/verify.php) 功能来扫描坏道。

##### 使用虚拟机启动 PE 扫描

如果没有 Windows，你使用的是 `PVE` 或者 `Unraid`，也可以启动一个 PE 虚拟机，将硬盘直通给 PE 虚拟机。PE 推荐使用 [Edgeless](https://down.edgeless.top/)，启动 PE 之后，可以使用 `DiskGenius` 的 [坏道检测与修复](https://www.diskgenius.cn/help/verify.php) 功能来扫描坏道。

#### 如何判断硬盘寿命？

机械盘主要看通电时间，SSD 主要看读写量（TBW）。

机械盘的寿命主要看通电时间，但实际上影响硬盘寿命的因素非常多，温湿度，环境因素，使用习惯等等对硬盘寿命都有很大影响。理论上普通机械盘使用寿命可以达到 3w 小时以上，如果是企业盘会更长一些，如果是按 NAS 24 小时连续运行来算，换算成使用时间大概就是至少可以用三年。

固态硬盘（SSD）的寿命则通常通过写入量来衡量，如 TBW（Terabytes Written）。这些指标表示硬盘可以承受的总写入数据量。比如以樊想 `S500Pro 1TB` 为例，标称的 TBW 是 640TBW，意思就是累计可以写入大概 640 TB 的数据，相当于全盘擦写 640 次。

#### NAS 系统支持硬盘休眠，休眠时间该设置多久？

首先要明确一点，**频繁的休眠唤醒对硬盘来说不是好事，对硬盘的寿命影响很大**。我个人认为，机械盘每天最多休眠唤醒 1 次，如果超过了 1 次，那还不如不要休眠。如果你的硬盘每天能休眠唤醒好几次，那你就应该适当增加休眠延迟时间。

#### 如何查看 SSD 读写数据？

Windows 可以安装 [图吧工具箱](https://www.tbtool.cn/)，里面带的 CrystalDiskInfo 这个工具，可以用来查看 SSD 读写量。

![31e1f2d0-f22d-4b46-a494-ec9c350684a6_8J1MeU](https://img.slarker.me/wiki/31e1f2d0-f22d-4b46-a494-ec9c350684a6_8J1MeU.jpeg)

#### NAS 可以使用 SAS 盘吗？

如果想使用 SAS 盘，需要 NAS 机箱背板和主板同时支持才行。

SAS 盘一般都是服务器上用的，市面上能买到的 SAS 盘也基本都是服务器上拆下来的。大部分常见的带硬盘背板的 NAS 机箱都支持 SAS 盘，但因为家用消费级市场的主板支持的都是 SATA 接口，所以需要通过 PCIE 扩展硬盘阵列卡（直通卡），就可以支持 SAS 硬盘。

#### NAS 最大支持多大容量的硬盘？

一般来说，只要没有特别说明，NAS 对硬盘容量并没有限制。

#### 有必要使用 SSD 作为缓存吗？

是否需要使用缓存，主要看你的需求。

使用缓存的目的是为了提升读写速度，目前一般普通机械盘的读写速度大概是 150MB/s 左右，企业级机械盘可以达到 200MB/s 左右。

如果你有万兆网口，那机械盘这个速度显然无法跑满万兆网口，会成为读写的瓶颈。提升读写速度有两种办法，一种是使用多块盘组成 Raid 阵列，比如 raid0，raid5 等等。另一种就是使用两块 SSD 组成 Raid1 作为读写缓存，来提高读写速度。

还有一种情况就是你经常需要读写大量的小文件，比如数百 GB 的照片文件。机械盘的缺点就是小文件读写比较慢，而这也正是 SSD 的优点，不需要反复寻道，读写小文件非常快，这个时候可以用 SSD 来作为缓存，提升读写速度。

如果你只有 2.5G 网口，主要用来下载看电影，照片也没有多少，并不需要大量的读写。那其实用 SSD 缓存的意义也不大。这种情况下，你只要用一块 SSD，把常用的软件，甚至照片，都存到 SSD 上就行了，不需要使用缓存。

#### SSD 只能作为缓存使用吗？

SSD 是否需要用来做缓存，你都可以自己决定。在群晖里，m.2 SSD 默认是作为缓存使用的，但你也可以根据下面的教程来把 m.2 改为存储空间使用。在 Unraid 里，想做缓存或者直接存数据都可以自己设置。

#### NAS 硬盘需要一次性买齐吗?

硬盘可以按需添加，NAS 的阵列支持动态扩容，不必一次性买齐。但你在设置阵列类型的时候，需要选择日后方便扩容的类型（比如群晖中的 SHR、RAID5 等等）。

#### 硬盘功耗大概有多少？

不同的硬盘功耗差异比较大，处于不同的工作状态时，功耗也会有显著差异，以下是一些大致的参考值：

- 如果是 3.5 寸机械硬盘，可以按 8w 来估算。
- 如果是 2.5 寸 SSD，可以按 5w 来估算。
- 如果是 M.2 SSD，可以按 5w 来估算。

### 如何选择内存？

#### NAS 需要考虑内存频率吗？

不需要，使用 NAS 又不是打游戏，内存容量的优先级远大于频率。

#### 使用多大的内存合适？

如果不玩虚拟机，8GB 的内存对大多数人都够用，如果你要使用 PVE 玩虚拟机 All in one，那最好直接上到 16GB。如果用的是 Unraid 或者 TrueNAS，想用 ZFS 这个文件系统来组 raid，由于 ZFS 本身会使用内存来作为缓存，比较吃内存，最好配的内存容量越大越好。

#### 该使用 DDR4 还是 DDR5 内存？

该使用 DDR4 还是 DDR5 内存，要看你的主板支持哪种内存。目前 DDR4 的性价比要高不少，如果你要用 DDR4 内存，可以优先选择支持 DDR4 的主板。

#### 内存稳定性对 NAS 的影响

如果内存稳定性有问题，可能造成 NAS 频繁死机，重启等现象，发生这种现象，建议优先排查内存。

### 如何选择机箱?

可以选择下面品牌的

#### 乔思伯机箱

#### 梵隆机箱

#### 宝藏盒

#### 见方机箱

#### 星之海机箱

#### 金河田

### UPS - NAS 的好搭档

机械硬盘成本在 NAS 里肯定算是大头，同时机械硬盘在 NAS 的所有部件里也是最脆弱的，异常断电对机械硬盘造成的危害不小，我见过不少因为异常断电导致硬盘损坏丢数据的用户。基于这些惨痛的教训，有必要为 NAS 配一个不间断电源，也就是 UPS。一个 UPS 也就几百块，对于 NAS 整机成本来说影响很小，却可以很大程度保障你的 NAS 安全，因此非常推荐购买。

首先需要说明一点，UPS 的存在并不是为了让你的设备能够一直持续在开机状态工作，而是为了让你的设备在市电中断后，能够有足够的时间来完成关机动作，避免意外断电对你的设备造成损坏。家用 UPS 基本上都配备了一根 USB 信号线，以便在市电中断时通知需要关机的设备。

#### NAS 都支持 UPS 吗？

群晖，Unraid 或者是使用 PVE 安装的 All in one 都支持 UPS，只要购买带有 USB 接口的 UPS 就可以。

#### 买什么样的 UPS 合适？

你可以根据自己的 NAS 的实际功耗来选择 UPS，像是山特 TG-Box 600 已经够绝大多数 NAS 设备使用了。以山特 TG-Box 600 为例，如果你的 NAS 功耗是 100W，那么 UPS 可以坚持 10 分钟，这足够你的 NAS 完成关机动作了。

未完待续...

内容来自 https://wiki.slarker.me/hardware/cpu.html