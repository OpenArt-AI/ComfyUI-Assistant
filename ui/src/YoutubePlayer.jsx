import React, {useEffect, useRef, useState} from 'react';
import YouTube from 'react-youtube';
import {Dialog} from "@headlessui/react";
import Draggable from "react-draggable";

function YoutubePlayer({videoId,close,keyframesFunctions}) {
    const playerStateRef= useRef(-1)
    const playerRef= useRef(null)

    const onPlayerStateChange = (event) => {
        playerRef.current = event.target
        playerStateRef.current = event.data
    }
    useEffect(() => {
            const lastInterval = setInterval(function () {
                // keyframesFunctions contains seconds and functions like {5:()=>console.log("five seconds!")} I want that this will always call the appropriate function based on the time but still taking to considerations interval hiccups
                const currentTime = playerRef.current.getCurrentTime();
                const timeInSeconds = Math.floor(currentTime);
                if (keyframesFunctions[timeInSeconds]) {
                    keyframesFunctions[timeInSeconds]();
                }
            }, 1000);
        return () => {
            clearInterval(lastInterval)
        }
    }, []);




    return (
        <Draggable>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2" >
            <Dialog.Panel className="w-fit max-w-4xl rounded-xl bg-comfy-light relative">

                        <div className={"flex flex-row items-center font-semibold w-full bg-gray-500 top-0 left-0 h-8 rounded-t-xl"}>
                            <span className={"cursor-pointer px-2"} onClick={close}>X</span>
                           </div>
                <div className={""}>
                    <YouTube videoId={videoId} onPlayerStateChange={onPlayerStateChange}/>
                </div>

            </Dialog.Panel>
        </div>
        </Draggable>

)
    ;
}

export default YoutubePlayer;