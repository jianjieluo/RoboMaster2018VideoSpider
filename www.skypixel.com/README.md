# skypixel 网站 RoboMaster 用户界面爬取

https://www.skypixel.com/users/robomas-_user


## 实验过的环境要求

浏览器: Mozilla Firefox 60.0.1 & Google Chrome 67.0.3396.79

OS: Ubuntu 16.04 LTS

Python: 3.5

## 爬取方法

1. 安装 FireFox 对应的 [geckodriver](https://github.com/mozilla/geckodriver/releases), 或者安装 Chrome 对应的 web driver. 并且使用 pip 安装上 `selenium` 包。
2. 进入[skypixel 网站 RoboMaster 用户界面](https://www.skypixel.com/users/robomas-_user), 按 F12 进入开发者模式。
3. 下拉浏览器，使得隐藏的视频列表加载出来，因为 robomaster 用户并不是只投稿了比赛录像回放，所以使用人工控制页面中需要下载的视频比较合理。
4. 将 `sky_spider.js` 的内容复制进浏览器的 console 中运行，等待运行结束。
5. 在 console 中输入 `console.save(videos, 'data.txt')`，保存链接至 `data.txt`。
6. 运行 `sky_download.py` 下载 `data.txt` 中的视频。
7. 手工删除个别无关的视频。