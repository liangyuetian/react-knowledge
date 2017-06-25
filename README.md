```js
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/liangyuetian/react-knowledge.git
git push -u origin master
```


```js
git remote add origin https://github.com/liangyuetian/react-knowledge.git
git push -u origin master
```

批量添加文件夹
```js
git add dir/**
```
远程提交
```js
git add */**
git commit -m "提交说明"
git pull // 同步服务器上的文件
git push -u origin master

```

push失败时可以使用强刷推送
```js
git push -f origin master
```

git 版本回恢复命令
```js
首先
git log 获取所有的版本信息
git reset --mixed：此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息

git reset --soft：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可

git reset --hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容
```
<<<<<<< HEAD
以下是一些reset的示例：

(1) 回退所有内容到上一个版本  
git reset HEAD^  
(2) 回退a.py这个文件的版本到上一个版本  
git reset HEAD^ a.py  
(3) 向前回退到第3个版本  
git reset –soft HEAD~3  
(4) 将本地的状态回退到和远程的一样  
git reset –hard origin/master  
(5) 回退到某个版本  
git reset 057d  
(7) 回退到上一次提交的状态，按照某一次的commit完全反向的进行一次commit  
Git revert HEAD
=======
>>>>>>> f421e5f22477d471665c460f88604b5ab117279c
