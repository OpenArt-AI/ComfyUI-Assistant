import { app } from "../../scripts/app.js";
import {LearnModal} from './learn-menu.js'
import {latestVersion} from "./data.js";


const localVersion = 1;


var docStyle = document.createElement('style');
docStyle.innerHTML = `
@keyframes Gradient {
		    	0%{background-position: 0% 50%}
		    	50%{background-position: 100% 50%}
		    	100%{background-position: 0% 50%}
		    }
`;

document.head.appendChild(docStyle);

let learnModalInstance = null;



const ext = {
	// Unique name for the extension
	name: "ComfyUI-Assistant",
	async setup(app) {
		const menuLoadDefault = document.querySelector("#comfy-load-default-button");
		const learnBtn = document.createElement("button");
		learnBtn.textContent = "Learn";

		if(!localStorage.getItem("clickedLearn")) {
			learnBtn.style.background = "linear-gradient(270deg, #d53369, #daae51)";
			learnBtn.style.backgroundSize = "200% 200%";
			learnBtn.style.animation = "Gradient 2s ease infinite";
			learnBtn.addEventListener("click", ()=>{
				localStorage.setItem("clickedLearn","true")
				learnBtn.style=null;
			})
		}
		learnBtn.addEventListener("click", ()=>{
			if(latestVersion>localVersion){
				alert("You are using an old version of the plugin, update it to get the latest features")
			}
			LearnModal.get().show();
		})
		menuLoadDefault.after(learnBtn);
	},
};

app.registerExtension(ext);

