import os
import filecmp
import shutil
import __main__

import requests

WEB_DIRECTORY = 'javascript'
javascript_folder = os.path.join(os.path.dirname(os.path.realpath(__file__)), "javascript")

# Get latest data
url = "https://raw.githubusercontent.com/OpenArt-AI/ComfyUI-Assistant/main/javascript/data.js"
data_js_path = javascript_folder + "/data.js"
if os.getenv("COMFY_ASSISTANT_ENV") != "DEV":
    response = requests.get(url)
    if response.status_code == 200:
        with open(data_js_path, "w", encoding="utf-8") as local_file:
            local_file.write(response.text)
