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
