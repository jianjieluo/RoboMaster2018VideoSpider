// 待爬取的网页: https://www.robomaster.com/live/video
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
srcs = [];
filenames = [];
videos = [];
ul = document.getElementsByClassName('clearfix')[0];
lis = ul.children;
function getSrcWrap(index) {
  let li = lis[index];
  return function getSrc() {
    // // Test 
    // if (index > 5) {
    //   return;
    // }
    name = li.children[1].innerText;
    li.click();
    setTimeout(() => {
      videosrc = ori_doc.getElementsByTagName('iframe')[0].src;
      // srcs.push(ori_doc.getElementsByTagName('iframe')[0].src);
      // filenames.push(name);
      videos.push({ "name": name, "src": videosrc });
      ori_doc.getElementsByClassName('modal-mask')[0].click();
      if (index < lis.length - 1) {
        console.log(`Got ${index} video`);
        setTimeout(getSrcWrap(index + 1), 1000);
      }
    }, 200);
  }
}
getSrcWrap(0)();

// after crawling, run this below to save the res
console.save(videos, 'data.txt')