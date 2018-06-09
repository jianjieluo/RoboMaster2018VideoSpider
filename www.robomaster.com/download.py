import json
import os
import logging


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger(__name__)

    with open('data.txt') as json_data:
        videos = json.loads(json_data.read())
        json_data.close()

    error_name = []

    if os.path.isdir('./videos') is not True:
        os.mkdir('./videos')

    wgetCommand = "wget -c --tries=4 --read-timeout=60 %s -O ./videos/%s.mp4"

    for item in videos:
        item['name'] = item['name'].replace(' ', '_')
        item['name'] = item['name'].replace('&', 'and')
        item['name'] = item['name'].replace('（', '(')
        item['name'] = item['name'].replace('）', ')')

        # 检查如果发现已经有了就不需要再下载
        if os.path.isfile('./videos/%s.mp4' % (item['name'])):
            continue

        try:
            os.system(wgetCommand % (item["src"], item["name"]))
        except:
            logger.debug('Download Failed : %s', item["name"])

        if os.path.isfile('./videos/%s.mp4' % (item['name'])) is False:
            error_name.append(item['name'])

    try:
        error_record = open('./error_name.txt', 'w')
        error_record.write('\n'.join(error_name))
        error_record.close()
    except:
        print("Write error name file failed")
        print('\n'.join(error_name))

    print("Download completed!")
