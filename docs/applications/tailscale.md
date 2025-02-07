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