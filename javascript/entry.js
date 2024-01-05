import { app } from "../../scripts/app.js";
import * as data from './data.js';
window.data = data;
const ext = {
	// Unique name for the extension
	name: "ComfyUI-Assistant",
	async setup(app) {
		const menuLoadDefault = document.querySelector("#comfy-load-default-button");
		const learnBtn = document.createElement("button");
		learnBtn.textContent = "Learn";

		if(!localStorage.getItem("CLICKED_LEARN")) {
			learnBtn.classList.toggle("animate-background")
			learnBtn.addEventListener("click", ()=>{
				localStorage.setItem("CLICKED_LEARN","true")
				learnBtn.classList.remove("animate-background")
			})
		}
		learnBtn.addEventListener("click", ()=>{
			window.onLearnClick()
		})
		menuLoadDefault.after(learnBtn);
	},
};

app.registerExtension(ext);

