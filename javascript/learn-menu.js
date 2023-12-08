import {ComfyDialog} from "../../scripts/ui.js";
import {startVideo} from "./youtube.js";
import { app } from "../../scripts/app.js";


const docStyle = document.createElement('style');
docStyle.innerHTML = `
        .learn-menu {
            display: flex;
            justify-content: space-between;
            width: 60vw;
            color: white;
            
        }

        .category-list {
            flex: 0 0 10%;
            border-right: 1px solid #ccc;
            padding-right: 1em;
            display: flex;
            flex-direction: column;
        }
        .category-item{
            border: 1px solid #ccc;
            padding: 1em;
        }       

        .module-list {
            flex: 1;
            padding-left: 1em;
            overflow-y: auto;
        }

        .module-item {
            border: 1px solid #ccc;
            padding: 1em;
            margin-bottom: 1em;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .module-item img {
            height: 100%;
            width: auto;
        }
        .module-item-details{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding-left: 1em;
            padding-right: 1em;
        }

        .module-item button {
            background: #007BFF;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: right;
            text-decoration: none;
            justify-content: right;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
        }
    
`;

document.head.appendChild(docStyle);

export const learnMenu = document.createElement('div');
learnMenu.classList.add("learn-menu")


const tutorials = [
    {
        title:"How to get started with ComfyUI",
        description:`How and why<b> to get started with ComfyUI</b>. Join to OpenArt Contest with a Price Pool of over $13000 USD https://contest.openart.ai/#participate 
This ComfyUi Starter Guide shows you how to install everything and get started. Learn ComfyUI with easy Workflow examples. Build and Sell powerful Workflows in no time.`,
        videoId:`5dBAIhx28ow`,
        categories:["All"],
        initialWorkflow:`{
                    "last_node_id": 9,
                    "last_link_id": 9,
                    "nodes": [],
                    "links": [],
                    "groups": [],
                    "config": {},
                    "extra": {},
                    "version": 0.4
                }`
    }, {
        title:"How to use IP-Adapter",
        description:`In this tutorial we will learn the how to use one of the most powerful tools in stable diffusion - the IP-Adapter`,
        videoId:`yrqT5FaBoIU`,
        categories:["All"],
        initialWorkflow:`{
                    "last_node_id": 9,
                    "last_link_id": 9,
                    "nodes": [],
                    "links": [],
                    "groups": [],
                    "config": {},
                    "extra": {},
                    "version": 0.4
                }`,
        keyframesWorkflows: {
            5: `{"last_node_id": 9,"last_link_id": 9,"nodes": [{"id": 7,"type": "CLIPTextEncode","pos": [413,389],"size": {"0": 425.27801513671875,"1": 180.6060791015625},"flags": {},"order": 3,"mode": 0,"inputs": [{"name": "clip","type": "CLIP","link": 5}],"outputs": [{"name": "CONDITIONING","type": "CONDITIONING","links": [],"slot_index": 0}],"properties": {"Node name for S&R": "CLIPTextEncode"},"widgets_values": ["text, watermark"]},{"id": 6,"type": "CLIPTextEncode","pos": [415,186],"size": {"0": 422.84503173828125,"1": 164.31304931640625},"flags": {},"order": 2,"mode": 0,"inputs": [{"name": "clip","type": "CLIP","link": 3}],"outputs": [{"name": "CONDITIONING","type": "CONDITIONING","links": [],"slot_index": 0}],"properties": {"Node name for S&R": "CLIPTextEncode"},"widgets_values": ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]},{"id": 5,"type": "EmptyLatentImage","pos": [473,609],"size": {"0": 315,"1": 106},"flags": {},"order": 0,"mode": 0,"outputs": [{"name": "LATENT","type": "LATENT","links": [],"slot_index": 0}],"properties": {"Node name for S&R": "EmptyLatentImage"},"widgets_values": [512,512,1]},{"id": 4,"type": "CheckpointLoaderSimple","pos": [26,474],"size": {"0": 315,"1": 98},"flags": {},"order": 1,"mode": 0,"outputs": [{"name": "MODEL","type": "MODEL","links": [],"slot_index": 0},{"name": "CLIP","type": "CLIP","links": [3,5],"slot_index": 1},{"name": "VAE","type": "VAE","links": [],"slot_index": 2}],"properties": {"Node name for S&R": "CheckpointLoaderSimple"},"widgets_values": ["v1-5-pruned-emaonly.ckpt"]}],"links": [[3,4,1,6,0,"CLIP"],[5,4,1,7,0,"CLIP"]],"groups": [],"config": {},"extra": {},"version": 0.4}`,
            10:`{"last_node_id": 9,"last_link_id": 9,"nodes": [{"id": 7,"type": "CLIPTextEncode","pos": [413,389],"size": {"0": 425.27801513671875,"1": 180.6060791015625},"flags": {},"order": 3,"mode": 0,"inputs": [{"name": "clip","type": "CLIP","link": 5}],"outputs": [{"name": "CONDITIONING","type": "CONDITIONING","links": [6],"slot_index": 0}],"properties": {"Node name for S&R": "CLIPTextEncode"},"widgets_values": ["text, watermark"]},{"id": 6,"type": "CLIPTextEncode","pos": [415,186],"size": {"0": 422.84503173828125,"1": 164.31304931640625},"flags": {},"order": 2,"mode": 0,"inputs": [{"name": "clip","type": "CLIP","link": 3}],"outputs": [{"name": "CONDITIONING","type": "CONDITIONING","links": [4],"slot_index": 0}],"properties": {"Node name for S&R": "CLIPTextEncode"},"widgets_values": ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]},{"id": 5,"type": "EmptyLatentImage","pos": [473,609],"size": {"0": 315,"1": 106},"flags": {},"order": 0,"mode": 0,"outputs": [{"name": "LATENT","type": "LATENT","links": [2],"slot_index": 0}],"properties": {"Node name for S&R": "EmptyLatentImage"},"widgets_values": [512,512,1]},{"id": 3,"type": "KSampler","pos": [863,186],"size": {"0": 315,"1": 262},"flags": {},"order": 4,"mode": 0,"inputs": [{"name": "model","type": "MODEL","link": 1},{"name": "positive","type": "CONDITIONING","link": 4},{"name": "negative","type": "CONDITIONING","link": 6},{"name": "latent_image","type": "LATENT","link": 2}],"outputs": [{"name": "LATENT","type": "LATENT","links": [7],"slot_index": 0}],"properties": {"Node name for S&R": "KSampler"},"widgets_values": [156680208700286,"randomize",20,8,"euler","normal",1]},{"id": 8,"type": "VAEDecode","pos": [1209,188],"size": {"0": 210,"1": 46},"flags": {},"order": 5,"mode": 0,"inputs": [{"name": "samples","type": "LATENT","link": 7},{"name": "vae","type": "VAE","link": 8}],"outputs": [{"name": "IMAGE","type": "IMAGE","links": [9],"slot_index": 0}],"properties": {"Node name for S&R": "VAEDecode"}},{"id": 9,"type": "SaveImage","pos": [1451,189],"size": {"0": 210,"1": 58},"flags": {},"order": 6,"mode": 0,"inputs": [{"name": "images","type": "IMAGE","link": 9}],"properties": {},"widgets_values": ["ComfyUI"]},{"id": 4,"type": "CheckpointLoaderSimple","pos": [26,474],"size": {"0": 315,"1": 98},"flags": {},"order": 1,"mode": 0,"outputs": [{"name": "MODEL","type": "MODEL","links": [1],"slot_index": 0},{"name": "CLIP","type": "CLIP","links": [3,5],"slot_index": 1},{"name": "VAE","type": "VAE","links": [8],"slot_index": 2}],"properties": {"Node name for S&R": "CheckpointLoaderSimple"},"widgets_values": ["v1-5-pruned-emaonly.ckpt"]}],"links": [[1,4,0,3,0,"MODEL"],[2,5,0,3,3,"LATENT"],[3,4,1,6,0,"CLIP"],[4,6,0,3,1,"CONDITIONING"],[5,4,1,7,0,"CLIP"],[6,7,0,3,2,"CONDITIONING"],[7,3,0,8,0,"LATENT"],[8,4,2,8,1,"VAE"],[9,8,0,9,0,"IMAGE"]],"groups": [],"config": {},"extra": {},"version": 0.4}`
        }
    }

]
const categories = ["All"]


const categoriesEl = document.createElement('div')
categoriesEl.classList.add('category-list')
categoriesEl.innerHTML = `<h3>Categories</h3>`
learnMenu.appendChild(categoriesEl)
const moduleListEl = document.createElement('div')
moduleListEl.classList.add('module-list')
learnMenu.appendChild(moduleListEl)

for (let category of categories) {
    const cat = document.createElement('li');
    cat.classList.add('category-item');
    cat.textContent = category;
    cat.onclick = ()=>loadCategory(category)
    categoriesEl.appendChild(cat);
}

function loadCategory(category){
    moduleListEl.innerHTML = "";
    for (let tutorial of tutorials) {
        if (tutorial.categories.includes(category) || category==="All") {
            const moduleItem = document.createElement('div');
            moduleItem.classList.add('module-item');
            moduleItem.innerHTML = `
                    <img src="https://img.youtube.com/vi/${tutorial.videoId}/default.jpg" alt="module image">
                    <div class="module-item-details">
                        <h2>${tutorial.title}</h2>
                        <p>${tutorial.description}</p>
                    </div>
                    <button>Learn!</button>
                `;
            moduleListEl.appendChild(moduleItem);
            moduleItem.querySelector('button').addEventListener('click', () => {
                LearnModal.get().close()
                if(tutorial.initialWorkflow){
                    app.loadGraphData(JSON.parse(tutorial.initialWorkflow))
                }
                const keyframesFunctions = {}
                if(tutorial.keyframesWorkflows){
                    for (let keyframe in tutorial.keyframesWorkflows) {
                        const parsedWorkflow = JSON.parse(tutorial.keyframesWorkflows[keyframe])
                        keyframesFunctions[keyframe] = ()=> app.loadGraphData(parsedWorkflow);
                    }
                }
                startVideo(tutorial.title,tutorial.videoId,keyframesFunctions)
            });
        }
    }
}

loadCategory("All")

export class LearnModal extends ComfyDialog{
    static instance=null
    show(){
        super.show(learnMenu);
    }

    static get(){
        if (LearnModal.instance === null) {
            LearnModal.instance = new LearnModal();
        }
        return LearnModal.instance;
    }
}