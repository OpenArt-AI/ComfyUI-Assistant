import os
import shutil
import __main__
import shutil
import requests
from zipfile import ZipFile
import requests

WEB_DIRECTORY = 'javascript'
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
github_repo_url = "https://github.com/OpenArt-AI/ComfyUI-Assistant"
zip_url = f"{github_repo_url}/archive/main.zip"

script_directory = os.path.dirname(os.path.realpath(__file__))
javascript_folder = os.path.join(script_directory, "javascript")
temp_zip_path = os.path.join(script_directory, "main.zip")
temp_extracted_folder = os.path.join(script_directory, "temp_extracted")

# Download the ZIP file
response = requests.get(zip_url)
if response.status_code == 200:
    with open(temp_zip_path, "wb") as temp_zip_file:
        temp_zip_file.write(response.content)

# Extract the contents of the ZIP file to a temporary folder
with ZipFile(temp_zip_path, 'r') as zip_ref:
    zip_ref.extractall(temp_extracted_folder)

# Replace the current JavaScript folder with the new one
new_javascript_folder = os.path.join(temp_extracted_folder, "ComfyUI-Assistant-main", "javascript")

# Copy the contents of the new JavaScript folder to the current folder
shutil.rmtree(javascript_folder)
shutil.copytree(new_javascript_folder, javascript_folder)

# Cleanup: remove temporary files and folders
os.remove(temp_zip_path)
shutil.rmtree(temp_extracted_folder)