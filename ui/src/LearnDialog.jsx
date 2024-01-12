import React, {useState} from 'react';
import {Dialog} from "@headlessui/react";
import logo from "./logo.png";
import Draggable from "react-draggable";
//             moduleItem.querySelector('button').addEventListener('click', () => {
//                 LearnModal.get().close()
//                 if(module.initialWorkflow){
//                     app.loadGraphData(JSON.parse(module.initialWorkflow))
//                 }
//                 if(module.type === 'lesson') {
//                     const keyframesFunctions = {}
//                     if(module.keyframesWorkflows){
//                         for (let keyframe in module.keyframesWorkflows) {
//                             const parsedWorkflow = JSON.parse(module.keyframesWorkflows[keyframe])
//                             keyframesFunctions[keyframe] = ()=> app.loadGraphData(parsedWorkflow);
//                         }
//                     }
//                     startVideo(module.title,module.videoId,keyframesFunctions)
//                 }
function LearnDialog({close, startVideo}) {
    const [selectedCategory,setSelectedCategory] = useState(window.data.categories[0])

    return (
        <Draggable>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
            <Dialog.Panel className="w-full max-w-4xl rounded-xl bg-comfy-light px-4 relative">
                        <span className={"font-semibold absolute top-0 left-0 m-4 cursor-pointer"}
                              onClick={close}>X</span>
                <a className={"text-lg p-2 rounded no-underline absolute top-0 right-0 m-4 text-white"}
                   href="https://github.com/OpenArt-AI/ComfyUI-Assistant/issues/new">Send Feedback</a>
                <Dialog.Title className={"flex flex-row justify-center"}>Comfy Assistant <span
                    className={"px-2 text-xs"}>by <a
                    href={"https://openart.ai"}><img src={logo} className={"w-14 px-1"}/></a></span>
                </Dialog.Title>
                <div className={"flex flex-col"}>
                    <div className="flex flex-row justify-around underline space-x-2 p-2">
                        {window.data.categories.map(cat => <a key={cat} className={"cursor-pointer"}
                                                              onClick={() => {
                                                                  setSelectedCategory(cat)
                                                              }}>{cat}</a>)}
                    </div>
                    <div className={"flex flex-col max-h-96 overflow-y-auto space-y-2 p-2 "}>
                        {window.data.modules.filter(module => module.categories.includes(selectedCategory)).map(module =>
                            <div key={module.title}
                                 className={"flex items-center flex-row space-x-2 p-2  hover:bg-gray-500 cursor-pointer"}
                                 onClick={(e) => {
                                     if (module.initialWorkflow) {
                                         app.loadGraphData(JSON.parse(module.initialWorkflow))
                                     }
                                     if (module.type === 'lesson') {
                                         const keyframesFunctions = {}
                                         if (module.keyframesWorkflows) {
                                             for (let keyframe in module.keyframesWorkflows) {
                                                 const parsedWorkflow = JSON.parse(module.keyframesWorkflows[keyframe])
                                                 keyframesFunctions[keyframe] = () => app.loadGraphData(parsedWorkflow);
                                             }
                                         }
                                         startVideo({title: module.title, videoId: module.videoId, keyframesFunctions})
                                     } else {
                                         close()
                                     }

                                 }}
                            >
                                <img width={96} height={96} className={"object-cover"}
                                     src={module.thumbnail ? module.thumbnail : `https://img.youtube.com/vi/${module.videoId}/default.jpg`}/>
                                <div className={"flex flex-col"}>
                                    <span className={"font-semibold text-2xl py-2"}>{module.title}</span>
                                    <span className={"text-sm text-gray-300"}>{module.description}</span>
                                    <hr/>
                                </div>
                            </div>)}
                    </div>

                </div>

            </Dialog.Panel>
        </div>
        </Draggable>
    );
}

export default LearnDialog;