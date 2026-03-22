Tailscale 是一款基于 WireGuard 协议构建的现代 VPN 服务，它可以帮助用户轻松创建安全的虚拟专用网络（VPN）。Tailscale 提供了一种简单、易用且安全的方式，让不同设备（如计算机、服务器、移动设备等）之间能够安全地通信，即使这些设备处于不同的网络环境中。

https://tailscale.com/download/

Tailscale 的主要特点包括：

- **易于使用**：无需复杂的配置，通过简单的步骤即可完成设备的添加和网络的搭建。
- **安全可靠**：采用 WireGuard 加密协议，确保数据传输的安全性。
- **跨平台支持**：支持多种操作系统，包括 Windows、macOS、Linux、iOS 和 Android 等。
- **自动组网**：能够自动发现和连接设备，形成一个虚拟的私有网络。

### 在 Linux 上安装 Tailscale

以下是在 Linux 发行版上安装 Tailscale 的步骤：

1. **添加 Tailscale 的软件包源**：

   ```bash
   curl -fsSL https://tailscale.com/install.sh | sh
   ```

   该脚本会自动检测你的系统，并添加 Tailscale 的软件包源，然后安装 Tailscale。

2. **启动 Tailscale 服务**：

   ```bash
   sudo tailscale up
   ```

   执行此命令后，会打开一个浏览器窗口，要求你登录 Tailscale 账户进行授权。登录并授权后，该设备就会加入到你的 Tailscale 网络中。

3. 国内源安装
参考 Tailscale 的安装教程，在安装完成后替换软件源：

```bash
sudo sed -i 's,pkgs.tailscale.com/stable,mirrors.ustc.edu.cn/tailscale,g' /etc/apt/sources.list.d/tailscale.list
```
然后执行 sudo apt update 刷新软件包缓存。

安装
```bash
apt-get install -y tailscale tailscale-archive-keyring
```
4.在 Tailscale 中禁用 DNS
Tailscale 中的--accept-dns=false标志用于禁用 Tailscale 管理控制台提供的 DNS 配置。默认情况下，Tailscale 可能会将您的设备配置为使用来自 Tailnet 的 MagicDNS 或其他 DNS 设置。此标志可确保您的设备不接受或应用这些 DNS 设置。

```bash
tailscale up --accept-dns=false --netfilter-mode=off
```

此命令会将您的设备连接到 Tailscale 网络，同时确保未应用任何来自 Tailscale 网络的 DNS 设置。您的设备将继续使用其现有的 DNS 配置。