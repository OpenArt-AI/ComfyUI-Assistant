import React, {useState} from 'react';
import {Dialog} from "@headlessui/react";
import logo from "./logo.png";
import Draggable from "react-draggable";
function SearchResultsDialog({isOpen, close,data}) {
    if(!data) return null

    return (
        <Dialog
            open={isOpen}
            className="relative z-50"
            onClose={() => {}}
        >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
            <Dialog.Panel className="w-full max-w-4xl rounded-xl bg-comfy-light px-4 relative">
                        <span className={"font-semibold absolute top-0 left-0 m-4 cursor-pointer"}
                              onClick={close}>X</span>

                <Dialog.Title className={"flex flex-row justify-center"}>Search Results</Dialog.Title>
                    <div className={"flex flex-col max-h-96 overflow-y-auto space-y-2 p-2 "}>
                        {data.items.map(
                            item=> <a className={"flex flex-col space-y-2 hover:bg-gray-500 text-white no-underline p-2 rounded"} href={`https://openart.ai/workflows/${item.id}`} target={"_blank"} key={item.id}>
                                <span className={"text-2xl"} >{item.name}</span>
                                <div className={"p-2 border rounded text-xs"} dangerouslySetInnerHTML={{__html:item.description}}/>
                                <hr className={"w-full"}/>
                            </a>
                        )}
                </div>

            </Dialog.Panel>
        </div>
        </Dialog>
    );
}

export default SearchResultsDialog;