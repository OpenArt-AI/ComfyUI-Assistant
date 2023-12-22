import {ComfyDialog} from "../../scripts/ui.js";
import {startVideo} from "./youtube.js";
import { app } from "../../scripts/app.js";
import {modules,CATEGORY_COMFY_ACADEMY,categories} from "./data.js";

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
            cursor: pointer;
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
            height: auto;
            width: 128px;
        }
        .module-item a {
            color: white;
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
    for (let module of modules) {
        if (module.categories.includes(category) || category==="All") {
            const moduleItem = document.createElement('div');
            moduleItem.classList.add('module-item');
            moduleItem.innerHTML = `
                    <img src="${module.thumbnail ? module.thumbnail:`https://img.youtube.com/vi/${module.videoId}/default.jpg`}" alt="module image">
                    <div class="module-item-details">
                        <h2>${module.title}</h2>
                        <p>${module.description}</p>
                    </div>
                    <button>Learn!</button>
                `;
            moduleListEl.appendChild(moduleItem);
            moduleItem.querySelector('button').addEventListener('click', () => {
                LearnModal.get().close()
                if(module.initialWorkflow){
                    app.loadGraphData(JSON.parse(module.initialWorkflow))
                }
                if(module.type === 'lesson') {
                    const keyframesFunctions = {}
                    if(module.keyframesWorkflows){
                        for (let keyframe in module.keyframesWorkflows) {
                            const parsedWorkflow = JSON.parse(module.keyframesWorkflows[keyframe])
                            keyframesFunctions[keyframe] = ()=> app.loadGraphData(parsedWorkflow);
                        }
                    }
                    startVideo(module.title,module.videoId,keyframesFunctions)
                }
            });
        }
    }
}

loadCategory(CATEGORY_COMFY_ACADEMY)

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