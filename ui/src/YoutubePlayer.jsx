import React, {useEffect, useRef, useState} from 'react';
import YouTube from 'react-youtube';
import {Dialog} from "@headlessui/react";
import Draggable from "react-draggable";

function YoutubePlayer({videoId,close,video}) {
    const playerStateRef= useRef(-1)
    const playerRef= useRef(null)
    const [isMinified,setIsMinified] = useState(false)
    const onPlayerStateChange = (event) => {
        playerRef.current = event.target
        playerStateRef.current = event.data
    }
    useEffect(() => {
            const lastInterval = setInterval(function () {
                if(playerStateRef.current === YT.PlayerState.PLAYING){
                    // keyframesFunctions contains seconds and functions like {5:()=>console.log("five seconds!")} I want that this will always call the appropriate function based on the time but still taking to considerations interval hiccups
                    const currentTime = playerRef.current.getCurrentTime();
                    const timeInSeconds = Math.floor(currentTime);
                    if (video.keyframesFunctions[timeInSeconds]) {
                        video.keyframesFunctions[timeInSeconds]();
                    }
                }
            }, 1000);
        return () => {
            clearInterval(lastInterval)
        }
    }, []);




    return (

        <div className="fixed inset-0 flex w-screen items-center justify-center p-2" >
            <Draggable>
            <Dialog.Panel  className="w-fit max-w-4xl rounded-xl bg-comfy-light relative">

                        <div className={"flex flex-row items-center font-semibold w-full bg-gray-500 top-0 left-0 h-8 rounded-t-xl"}>
                            <div>
                                <span className={"cursor-pointer px-2"} onClick={close}>X</span>
                                <span className={"cursor-pointer px-2"}
                                      onClick={() => setIsMinified(!isMinified)}>-</span>
                            </div>
                            <div className={"flex-grow text-center px-4"}>
                                {video.title}
                            </div>

                        </div>
                <div className={isMinified ? "hidden" : "visible"}>
                    <YouTube videoId={videoId} onStateChange={onPlayerStateChange}/>
                </div>

            </Dialog.Panel>
            </Draggable>
        </div>


)
    ;
}

export default YoutubePlayer;