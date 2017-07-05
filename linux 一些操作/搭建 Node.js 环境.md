#### 下载最新的稳定版 v6.10.3 到本地
> wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz

#### 下载完成后, 将其解压
> xz -d node-v6.10.3-linux-x64.tar.xz // 在Linux下，大部分情况下不能直接解压tar.xz的文件
> tar xvf node-v6.10.3-linux-x64.tar // 变成tar文件后就可以正常解压了

#### 将解压的 Node.js 目录移动到 /usr/local 目录下
> mv node-v6.10.3-linux-x64 /usr/local/node-v6

#### 配置 node 软链接到 /bin 目录
> ln -s /usr/local/node-v6/bin/node /bin/node

#### 配置 npm
> ln -s /usr/local/node-v6/bin/npm /bin/npm

#### 配置环境变量
> echo 'export PATH=/usr/local/node-v6/bin:$PATH' >> /etc/profile

#### 生效环境变量
>source /etc/profile
> npm -v

