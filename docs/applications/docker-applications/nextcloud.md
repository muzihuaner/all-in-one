# nextcloud

Nextcloud 是一款开源的、基于 Web 的文件存储和协作平台，旨在为个人和企业提供类似于 Dropbox、Google Drive 的功能，同时强调数据的安全性和隐私性，让用户能够完全掌控自己的数据。以下是关于 Nextcloud 的详细介绍：



### 功能特点

- **文件存储与同步**：用户可以在本地设备和 Nextcloud 服务器之间双向同步文件，确保数据在不同设备上保持一致。支持多种操作系统，包括 Windows、Mac、Linux 以及移动设备的 iOS 和 Android 系统。

- 强大的协作功能

  - **共享文件和文件夹**：用户可以方便地与他人共享文件和文件夹，并可设置不同的访问权限，如只读、可编辑等。
  - **文件评论和版本控制**：在文件上添加评论，方便团队成员之间交流。系统自动保存文件的多个版本，用户可以轻松回滚到以前的版本，避免数据丢失或错误。
  - **支持多人在线编辑**：与 OnlyOffice 等在线办公套件集成，支持多人同时在线编辑文档、表格和幻灯片，实时查看彼此的修改，提高协作效率。

  

- **丰富的应用生态**：拥有大量的插件和应用，可扩展其功能。如支持日历、联系人管理，可与 Outlook 等其他日历和联系人应用同步；支持任务管理，用户可以创建、分配和跟踪任务等。

- 安全与隐私保护

  - **数据加密**：支持对存储在服务器上的文件进行加密，确保数据在传输和存储过程中的安全性。用户可以使用自己的密钥对数据进行加密，只有拥有正确密钥的用户才能访问数据。
  - **用户认证和权限管理**：提供强大的用户认证和权限管理系统，管理员可以精细地控制每个用户对文件和文件夹的访问权限，确保数据只能被授权的用户访问。
  - **安全更新和审计**：团队会定期发布安全更新，以修复可能存在的漏洞。同时，系统提供审计功能，记录用户的操作行为，便于管理员进行安全监控和问题排查。

  ##### docker-compose安装

  ```yaml
  ---
  services:
    nextcloud:
      image: lscr.io/linuxserver/nextcloud:latest
      container_name: nextcloud
      environment:
        - PUID=1000
        - PGID=1000
        - TZ=Etc/UTC
      volumes:
        - /path/to/nextcloud/config:/config
        - /path/to/data:/data
      ports:
        - 443:443
      restart: unless-stopped
  ```

  ##### docker cli安装

  ```bash
  docker run -d \
    --name=nextcloud \
    -e PUID=1000 \
    -e PGID=1000 \
    -e TZ=Etc/UTC \
    -p 443:443 \
    -v /path/to/nextcloud/config:/config \
    -v /path/to/data:/data \
    --restart unless-stopped \
    lscr.io/linuxserver/nextcloud:latest
  ```