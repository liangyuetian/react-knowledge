#### 使用 yum 安装 vsftpd
> yum install vsftpd -y

#### 安装完成后，启动 FTP 服务：
> service vsftpd start

#### 启动后，可以看到系统已经监听了 21 端口
> netstat -nltp | grep 21

#### vsftpd 的配置目录为 /etc/vsftpd，包含下列的配置文件：
> vsftpd.conf 为主要配置文件
> ftpusers 配置禁止访问 FTP 服务器的用户列表
> user_list 配置用户访问控制

#### 创建ftp 用户
> useradd ftpuser

#### 为用户 ftpuser 设置密码 
> echo "gsoUWMsv" | passwd ftpuser --stdin

#### 限制用户 ftpuser 只能通过 FTP 访问服务器，而不能直接登录服务器：
> usermod -s /sbin/nologin ftpuser

