# RoboMaster2018VideoSpider

> 爬取了两个网站
> https://www.robomaster.com/live/video
> https://www.skypixel.com/users/robomas-_user

本来是在第一个网站上爬取的，但是因为后期第一个网站不再更新，所以爬了另一个天空之城的网站。故脚本有两个版本。

## 第一个网站的爬取
1. 运行 spider.js
2. 运行 download.py


## 第二个网站的爬取
1. 时间原因，手动模拟向下滑动，将需要下载的视频的可选项 div 都加载出来
2. 运行 sky_spider.js
3. 运行 sky_download.py


## 视频缺少情况
1. 北部第11场天空之城没有上传，不是代码的问题。
2. 中部第11场官网链接失效，爬虫下载失败，天空之城上有完整的录像，手动进行下载补全。


> 最后爬取于 2018.05.26
