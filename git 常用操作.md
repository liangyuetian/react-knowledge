> Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。

#### git 常用操作
```js
git init // git 初始化
git add app/* // 添加app文件夹下的所有文件
git commit -m "这里填写此次提交说明" // git 提交到本地仓库
git remote origin http://.....   // git 添加远程仓库
git push -u master  // git 提交到远程master分支

```

#### git 撤销
```js
git add *  // git 添加所有文件到git仓库，可是后悔了，添加错了，
git reset // git 还原到没有添加到之前的操作，注意：如果提交了不可以使用这种方法还原，可以使用git reset HEAD 但是不建议

```

#### git 创建分支
```js
git branch test // 创建test 分支
git checkout test // 切换到test分支
git checkout -b test // 创建test分支并切换到此分支

```
#### git 查看历史
```js
git log // 查看历史
git log --pretty=oneline // 精炼版
git reflog // 查看历史加强版
```

#### git 回滚更改
```js
git reflog 
git reset --hard HEAD^ // 回退到上一个版本
git reset --hard commit_id // 回退到指定版本
```
