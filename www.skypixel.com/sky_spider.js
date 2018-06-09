// 待爬取的网页: https://www.skypixel.com/users/robomas-_user
// 爬取的是最新的链向视频的网页 URL
// 注册保存函数
(function (console) {

    console.save = function (data, filename) {

        if (!data) {
            console.error('Console.save: No data')
            return;
        }

        if (!filename) filename = 'console.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], { type: 'text/json' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

// 开始爬取链接
ori_doc = document;
video_links = []
blocks = document.getElementsByClassName('_2Vh5');

for (var i = 0; i < blocks.length; ++i) {
    var divs = blocks[i].children;
    for (var j = 0; j < divs.length; ++j) {
        video_links.push(divs[j].firstChild.href)
    }
}

// after crawling, run this below to save the res
// console.save(video_links, 'data.txt')