---
sidebar_position: 2
---
# Exsi安装教程

下载：

[https://customerconnect.vmware.com/cn/downloads/info/slug/datacenter_cloud_infrastructure/vmware_vsphere_hypervisor_esxi/7_0](https://customerconnect.vmware.com/cn/downloads/info/slug/datacenter_cloud_infrastructure/vmware_vsphere_hypervisor_esxi/7_0)

[https://sysin.org/blog/vmware/](https://sysin.org/blog/vmware/)

vSphere 的两个核心组件是 ESXi和vCenter Server。ESXi是用于创建并运行虚拟机和虚拟设备的虚拟化平台。vCenter Server是一项服务，用于管理网络中连接的多个主机，并将主机资源池化。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3acc3594-bdfc-11eb-842f-00163e068ecd.png)

VMware vSphere ESXi 7.0安装教程：

1、首先下载VMware-VMvisor-Installer-7.0.0.iso安装文件，用虚拟光驱挂载或者写入U盘做成启动盘进行安装。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3af02a80-bdfc-11eb-842f-00163e068ecd.png)

2、进入系统后加载安装文件。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3b3d6d0e-bdfc-11eb-842f-00163e068ecd.png)

3、加载VMkernel文件。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3b8dd8fc-bdfc-11eb-842f-00163e068ecd.png)

4、加载文件完成，按【Enter】键开始安装VMware ESXi 7.0。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3ba74800-bdfc-11eb-842f-00163e068ecd.png)

5、系统出现“End User License Agreement（EULA）”界面，也就是最终用户许可协议，按【F11】键接受“Accept and Continue”，接受许可协议。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3c003ba4-bdfc-11eb-842f-00163e068ecd.png)

6、系统提示选择安装VMware ESXi 使用的存储，ESXi支持U盘以及SD卡安装。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3c5491e0-bdfc-11eb-842f-00163e068ecd.png)

7、原服务器安装有ESXi 6.7版本，选择全新安装。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3c820878-bdfc-11eb-842f-00163e068ecd.png)

8、提示选择键盘类型，选择“US Default”，默认美国标准，按【Enter】键继续。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3cd22fb0-bdfc-11eb-842f-00163e068ecd.png)

9、系统提示配置root用户的密码，根据实际情况输入，按【Enter】键继续。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3d19a35e-bdfc-11eb-842f-00163e068ecd.png)

10、系统提示将安装在刚才选择的存储，按【F11】键开始安装。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3d58c8cc-bdfc-11eb-842f-00163e068ecd.png)

11、如果使用INTEL XEON 56XX CPU会出现一些特性不支持警告提示。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3dd092d0-bdfc-11eb-842f-00163e068ecd.png)

12、开始安装ESXi 7.0。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3e2f7fac-bdfc-11eb-842f-00163e068ecd.png)

13、安装的时间取决于服务器的性能，等待一段时间后即可完成VMware ESXi 7.0的安装，按【Enter】键重启服务器。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3e6d8824-bdfc-11eb-842f-00163e068ecd.png)

14、服务器重启完成后，进入VMware ESXi 7.0正式界面

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3eb4af4c-bdfc-11eb-842f-00163e068ecd.png)

15、按【F2】键输入root用户密码进入主机配置模式。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3ef3c4e8-bdfc-11eb-842f-00163e068ecd.png)

16、选择“Configure Management Network”配置管理网络。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3f2ecb56-bdfc-11eb-842f-00163e068ecd.png)

17、选择“IPv4 Configuration”对IP进行配置。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3f6ab49a-bdfc-11eb-842f-00163e068ecd.png)

18、完成主机IP配置。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3faa7850-bdfc-11eb-842f-00163e068ecd.png)

19、使用浏览器登录VMware ESXi 7.0主机。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_3fea3e90-bdfc-11eb-842f-00163e068ecd.png)

20、进入ESXi 7.0主机操作界面，可以进行基本的配置和操作，比如创建虚拟机，更多的功能实现需要依靠vCenter Server来实现。

![](https://oss-emcsprod-public.modb.pro/wechatSpider/modb_20210526_403d59e0-bdfc-11eb-842f-00163e068ecd.png)
