# RoboMaster 官方回放网站爬取

https://www.robomaster.com/live/video

## 实验过的环境要求

浏览器: Google Chrome 67.0.3396.79

OS: Ubuntu 16.04 LTS

Python: 3.5

## 爬取方法

1. 进入[官方录像网站](https://www.robomaster.com/live/video), 按 F12 进入开发者模式。
2. 将 `spider.js` 的内容复制进浏览器的 console 中运行，等待运行结束。
3. 在 console 中输入 `console.save(videos, 'data.txt')`，保存链接至 `data.txt`。
4. 运行 `download.py` 下载 `data.txt` 中的视频。
