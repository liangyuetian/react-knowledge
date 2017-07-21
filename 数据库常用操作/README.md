> mysql -h主机地址 -u用户名 －p用户密码   //进入mysql数据库

> mysqladmin -u用户名 -p旧密码 password 新密码   //更改密码

> grant select on 数据库.* to 用户名@登录主机 identified by "密码" // 增加新用户

> 
#### 数据库操作
> show databases;    //列出数据库

> use database_name   //使用database_name数据库

> create database data_name //创建名为data_name的数据库

> drop database data_name  //删除一个名为data_name的数据库

> 
#### 表操作
> show tables  //列出所有表

> create talbe tab_name(id  int(10) not null auto_increment primary key,name varchar(40),pwd varchar(40)) charset=gb2312; // 创建一个名为tab_name的新表

> drop table tab_name 删除名为tab_name的数据表

> describe tab_name  //显示名为tab_name的表的数据结构

> delete  from  tab_name   //将表tab_name中的记录清空

> select * from tab_name    //显示表tab_name中的记录

> mysqldump -uUSER -pPASSWORD --no-data DATABASE TABLE > table.sql  //复制表结构

> 
#### 修改表结构
> alter table tab_name drop col_name   //在tab_name中将col_name字段删

> alter table tab_name rename to new_tab_name // 修改表名

> 
#### 数据的备份与恢复
> 执行外部的sql脚本当前数据库上执行:mysql < input.sql

> 指定数据库上执行:mysql [表名] < input.sql

> 数据传入命令 load data local infile "[文件名]" into table [表名];

> 备份数据库：(dos下)mysqldump --opt school>school.bbbmysqldump -u [user] -p [password] databasename > filename (备份)

> mysql -u [user] -p [password] databasename < filename (恢复)
