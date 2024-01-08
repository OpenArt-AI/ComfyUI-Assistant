import React, {useState} from 'react';
import {Dialog} from "@headlessui/react";
import logo from "./logo.png";
import Draggable from "react-draggable";
import {ExternalLink} from "react-feather";
function SearchResultsDialog({isOpen, close,data}) {
    if(!data) return null

    return (
        <Dialog
            open={isOpen}
            className="relative z-50"
            onClose={close}
        >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
            <Dialog.Panel className="w-full max-w-4xl rounded-xl bg-comfy-light px-4 relative">
                        <span className={"font-semibold absolute top-0 left-0 m-4 cursor-pointer"}
                              onClick={close}>X</span>

                <Dialog.Title className={"flex flex-row justify-center"}>Search Results</Dialog.Title>
                <div className={"flex flex-col max-h-96 overflow-y-auto space-y-2 p-2 "}>
                    {data.items.map(
                        item => <div className={"flex flex-col"}>
                            <div
                                className={"flex flex-row space-y-2 justify-between space-x-2 items-center p-2 rounded"}
                                key={item.id}>
                                <div className={"w-32 h-32 relative flex-grow"}>
                                    <img className={"object-cover absolute w-32 h-32 rounded"}
                                         src={item.thumbnails[0].url}/>
                                </div>
                                <div className={"flex flex-col w-4/5"}>
                                    <span className={"text-2xl"}>
                                        {item.name}
                                         </span>
                                    <div
                                        className={"p-2 border rounded text-xs"}>{item.description.replace(/<[^>]*>?/gm, '').substring(0, 512)}</div>
                                </div>
                            </div>
                            <div className={"flex flex-row w-full justify-end space-x-2 items-center"}>
                                <a className={"text-white no-underline px-2 ring-0 outline-none focus:outline-none"}
                                   href={`https://openart.ai/workflows/${item.id}`}
                                   target={"_blank"}><ExternalLink/> </a>
                                <div
                                    onClick={(e) => {
                                        e.target.classList.add('animate-pulse')
                                        e.target.innerHTML = "Loading..."
                                        e.target.disabled = true
                                        fetch("https://openart.ai/api/public/workflows/download",
                                            {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    workflow_id: item.id
                                                })
                                            })
                                            .catch(() => {
                                                alert("Error loading workflow")
                                                e.target.classList.remove('animate-pulse')
                                                e.target.disabled = false
                                                e.target.innerHTML = "Use workflow"
                                            })
                                            .then(res => res.json())
                                            .then(res => {
                                                e.target.classList.remove('animate-pulse')
                                                e.target.disabled = false
                                                e.target.innerHTML = "Use workflow"
                                                app.loadGraphData(JSON.parse(res.payload))
                                                close()
                                            })

                                    }}
                                    className={"bg-comfy-dark p-2 rounded text-white text-lg font-semibold cursor-pointer"}>Use workflow
                                </div>
                            </div>
                            <hr className={"w-full"}/>
                        </div>
                    )}
                    {data.items.length === 0 && <div className={"text-center text-2xl"}>No results found</div>}
                </div>

            </Dialog.Panel>
        </div>
        </Dialog>
    );
}

export default SearchResultsDialog;