import os
import shutil
import __main__
import shutil
import requests
from zipfile import ZipFile
import requests

def transform_css_to_js(css_content):
    js_content = """
    var docStyle = document.createElement('style');
docStyle.innerHTML = `""" + css_content.replace('`', r'\`').replace('\\', r'\\') + """
`;
document.head.appendChild(docStyle);
    """
    return js_content

def transform_files_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".css"):
            css_file_path = os.path.join(folder_path, filename)
            js_file_path = os.path.join(folder_path, filename[:-4] + ".css.js")

            with open(css_file_path, 'r') as css_file:
                css_content = css_file.read()

            js_content = transform_css_to_js(css_content)

            with open(js_file_path, 'w') as js_file:
                js_file.write(js_content)




github_repo_url = "https://github.com/OpenArt-AI/ComfyUI-Assistant"
zip_url = f"{github_repo_url}/archive/main.zip"

script_directory = os.path.dirname(os.path.realpath(__file__))
javascript_folder = os.path.join(script_directory, "javascript")


temp_zip_path = os.path.join(script_directory, "main.zip")
temp_extracted_folder = os.path.join(script_directory, "temp_extracted")

if os.getenv("COMFY_ASSISTANT_ENV") == "DEV":
    print("Skipping auto-upgrade")
else:
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

transform_files_in_folder(javascript_folder)




WEB_DIRECTORY = 'javascript'
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}