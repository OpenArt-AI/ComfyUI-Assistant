import os
import filecmp
import shutil
import __main__

import requests

DEV_MODE = True
extensions_folder = os.path.join(os.path.dirname(os.path.realpath(__main__.__file__)),
                                 "web" + os.sep + "extensions" + os.sep + "ComfyUI-Assistant")
javascript_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), "javascript")

# Get latest data
url = "https://raw.githubusercontent.com/OpenArt-AI/ComfyUI-Assistant/main/javascript/data.js"
data_js_path = javascript_folder + "/data.js"
if os.getenv("COMFY_ASSISTANT_ENV") != "DEV":
    response = requests.get(url)
    if response.status_code == 200:
        with open(data_js_path, "w", encoding="utf-8") as local_file:
            local_file.write(response.text)





if not os.path.exists(extensions_folder):
    os.makedirs(extensions_folder)

result = filecmp.dircmp(javascript_folder, extensions_folder)

if result.left_only or result.diff_files:
    file_list = list(result.left_only)
    file_list.extend(x for x in result.diff_files if x not in file_list)

    for file in file_list:
        src_file = os.path.join(javascript_folder, file)
        dst_file = os.path.join(extensions_folder, file)
        if os.path.exists(dst_file):
            os.remove(dst_file)
        shutil.copy(src_file, dst_file)
