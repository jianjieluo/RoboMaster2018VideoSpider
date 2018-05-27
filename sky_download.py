import json
import os
import logging

import time
from selenium import webdriver


error_name = []

driver = webdriver.Firefox()
driver.implicitly_wait(5)


def base_download(video_name, video_src, check_dict=None):
    wgetCommand = "wget -c --tries=4 --read-timeout=60 %s -O ./videos/%s.mp4"

    if check_dict is not None:
        for item in check_dict:
            if item['name'] == video_name:
                print(video_name, " already has been downloaded.")
                return None

    video_name = video_name.replace(' ', '_')
    video_name = video_name.replace('&', 'and')

    try:
        os.system(wgetCommand % (video_src, video_name))
    except:
        print('Download Failed : %s', video_name)

    if os.path.isfile('./videos/%s.mp4' % (video_name)) is False:
        error_name.append(video_name)


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger(__name__)

    with open('data.txt') as json_data:
        check_dict = json.loads(json_data.read())
        json_data.close()

    with open('new_video_links.txt') as json_data:
        sky_urls = json.loads(json_data.read())
        json_data.close()

    # 浏览器模拟开始找到相应的视频地址开始下载
    for sky_url in sky_urls:
        driver.get(sky_url)

        time.sleep(2)
        iframe = driver.find_element_by_tag_name('iframe')
        video_name = iframe.get_attribute('title')
        iframe_url = iframe.get_attribute('src')
        driver.get(iframe_url)

        time.sleep(2)
        video = driver.find_element_by_tag_name('video')
        video_url = video.get_attribute('src')

        base_download(video_name, video_url, check_dict=check_dict)

    driver.quit()
    print("Download completed!")

    print(str(error_name))
